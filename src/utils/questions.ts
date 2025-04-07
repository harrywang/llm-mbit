import fs from 'fs';
import path from 'path';

export interface Question {
  question: string;
  optionA: string;
  optionB: string;
  A: string;
  B: string;
}

export type Questions = Record<string, Question>;

export function getQuestions(): Questions {
  const filePath = path.join(process.cwd(), 'data', 'mbti_questions.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const questions: Questions = JSON.parse(fileContents);
  
  return questions;
}
