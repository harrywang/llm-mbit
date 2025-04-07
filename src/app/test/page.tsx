"use client";

import { useEffect, useState, useRef } from "react";
import { useTest } from "@/context/TestContext";
import { QuestionCard } from "@/components/QuestionCard";
import { ResultsCard } from "@/components/ResultsCard";
import { TestProgress } from "@/components/TestProgress";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { questions } from "./questions";

// Client component using static questions data
export default function TestPage() {
  const { currentQuestion, calculateResult, resetTest, progress } = useTest();
  const router = useRouter();
  const initialized = useRef(false);
  
  useEffect(() => {
    // Only run this effect once during component initialization
    if (!initialized.current) {
      initialized.current = true;
      // Reset the test when the component mounts
      resetTest();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Use a ref to track if we've calculated the result to avoid re-renders
  const hasCalculatedResult = useRef(false);
  
  // Check if we've reached the end of the test
  useEffect(() => {
    // Only calculate the result once when progress reaches 100%
    if (progress === 100 && !hasCalculatedResult.current) {
      // Set the flag before calculating to prevent multiple calls
      hasCalculatedResult.current = true;
      // Calculate the result
      calculateResult();
    } else if (progress < 100) {
      // Reset the flag if progress goes back below 100%
      hasCalculatedResult.current = false;
    }
  }, [progress, calculateResult]);



  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">MBTI Personality Test</h1>
          <p className="text-gray-600">
            Answer the questions honestly to discover your personality type.
          </p>
        </div>

        <TestProgress />

        {progress < 100 ? (
          questions[currentQuestion.toString()] ? (
            <QuestionCard
              questionId={currentQuestion.toString()}
              questionData={questions[currentQuestion.toString()]}
            />
          ) : (
            <div className="p-4 border border-sky-100 bg-sky-50 rounded text-sky-700 mb-4">
              <p className="font-medium">Loading questions...</p>
              <p className="text-sm">If this message persists, please refresh the page.</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2" 
                onClick={() => resetTest()}
              >
                Reset Test
              </Button>
            </div>
          )
        ) : (
          <ResultsCard />
        )}

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            onClick={() => router.push("/")}
            className="mt-4"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
