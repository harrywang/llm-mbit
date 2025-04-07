"use client";

import questionsData from '../../../data/mbti_questions.json';

export interface Question {
  question: string;
  optionA: string;
  optionB: string;
  A: string;
  B: string;
}

export type Questions = Record<string, Question>;

// Check for development mode from environment variable or default to true for local development
const USE_DEV_MODE = process.env.NEXT_PUBLIC_USE_DEV_MODE !== 'false';

// Number of questions to use in development mode
const DEV_QUESTIONS_COUNT = 10;

// Use a deterministic approach for development mode to avoid hydration errors
function getDevQuestions(count: number): Questions {
  const allQuestions = questionsData as Questions;
  const allKeys = Object.keys(allQuestions);
  
  // Sort keys to ensure consistent order
  allKeys.sort((a, b) => parseInt(a) - parseInt(b));
  
  // Create a mapping of dimensions to question keys
  const dimensionTypes = ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'];
  const dimensionQuestions: Record<string, string[]> = {};
  
  // Initialize dimension arrays
  dimensionTypes.forEach(type => { dimensionQuestions[type] = []; });
  
  // Group questions by dimension type
  allKeys.forEach(key => {
    const question = allQuestions[key];
    if (question.A && dimensionTypes.includes(question.A)) {
      dimensionQuestions[question.A].push(key);
    }
    if (question.B && dimensionTypes.includes(question.B)) {
      dimensionQuestions[question.B].push(key);
    }
  });
  
  // Selected keys for our subset
  const selectedKeys: string[] = [];
  
  // First, select one question from each dimension (deterministically)
  dimensionTypes.forEach(type => {
    if (dimensionQuestions[type].length > 0) {
      // Always pick the first question in each dimension for consistency
      const key = dimensionQuestions[type][0];
      if (!selectedKeys.includes(key)) {
        selectedKeys.push(key);
      }
    }
  });
  
  // Then fill the rest with questions in order until we reach the count
  let i = 0;
  while (selectedKeys.length < count && i < allKeys.length) {
    const key = allKeys[i];
    if (!selectedKeys.includes(key)) {
      selectedKeys.push(key);
    }
    i++;
  }
  
  // Create a new object with sequentially numbered questions
  const result: Questions = {};
  selectedKeys.forEach((key, index) => {
    // Use sequential numbers starting from 1 as keys
    result[(index + 1).toString()] = allQuestions[key];
  });
  
  return result;
}

// Import all questions from the data file
const allQuestions: Questions = questionsData as Questions;

// Export either all questions or a subset based on development mode
export const questions: Questions = USE_DEV_MODE 
  ? getDevQuestions(DEV_QUESTIONS_COUNT) 
  : allQuestions;
