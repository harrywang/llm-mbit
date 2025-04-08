"use client";

import React, { createContext, useContext, useState, useRef, ReactNode } from "react";
import { questions } from "@/app/test/questions";

type MBTIType = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";
type MBTIResult = Record<MBTIType, number>;

interface TestContextType {
  currentQuestion: number;
  answers: Record<string, string>;
  result: MBTIResult | null;
  setCurrentQuestion: (questionNumber: number) => void;
  saveAnswer: (questionId: string, answer: string, type: MBTIType) => void;
  calculateResult: () => void;
  resetTest: () => void;
  progress: number;
}

const defaultMBTIResult: MBTIResult = {
  E: 0,
  I: 0,
  S: 0,
  N: 0,
  T: 0,
  F: 0,
  J: 0,
  P: 0,
};

const TestContext = createContext<TestContextType | undefined>(undefined);

export function TestProvider({ children }: { children: ReactNode }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<MBTIResult | null>(null);
  const [progress, setProgress] = useState(0);

  // Get the total number of questions dynamically from the questions object
  // This will work with both full and development mode question sets
  const [totalQuestions, setTotalQuestions] = useState(93);
  
  // This will be updated when the test is reset

  const saveAnswer = (questionId: string, answer: string, _type: MBTIType) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    setCurrentQuestion((prev) => {
      const next = prev + 1;
      // Update progress
      setProgress(Math.floor((next - 1) / totalQuestions * 100));
      return next;
    });
  };

  // Use a ref to prevent multiple calculations
  const isCalculatingRef = useRef(false);
  
  const calculateResult = () => {
    // Prevent multiple simultaneous calculations
    if (isCalculatingRef.current) return;
    
    try {
      isCalculatingRef.current = true;
      
      // Only calculate if we have answers and no result yet
      if (Object.keys(answers).length > 0 && !result) {
        const newResult = { ...defaultMBTIResult };
        
        // Count the occurrences of each MBTI type in answers
        Object.values(answers).forEach((type) => {
          if (type in newResult) {
            newResult[type as MBTIType] += 1;
          }
        });
        
        setResult(newResult);
      }
    } finally {
      isCalculatingRef.current = false;
    }
  };

  const resetTest = () => {
    setCurrentQuestion(1);
    setAnswers({});
    setResult(null);
    setProgress(0);
    
    // Get the question count from the imported questions
    try {
      const questionCount = Object.keys(questions).length;
      console.log(`Test initialized with ${questionCount} questions`);
      setTotalQuestions(questionCount);
    } catch (error) {
      console.error("Failed to load questions:", error);
      // Fallback to 93 if there's an error
      setTotalQuestions(93);
    }
  };

  return (
    <TestContext.Provider
      value={{
        currentQuestion,
        answers,
        result,
        setCurrentQuestion,
        saveAnswer,
        calculateResult,
        resetTest,
        progress,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

export function useTest() {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error("useTest must be used within a TestProvider");
  }
  return context;
}
