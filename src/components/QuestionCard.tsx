"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useTest } from "@/context/TestContext";
import { Question } from "@/app/test/questions";

// Import the MBTIType from the context
type MBTIType = "E" | "I" | "S" | "N" | "T" | "F" | "J" | "P";

interface QuestionCardProps {
  questionId: string;
  questionData: Question;
}

export function QuestionCard({ questionId, questionData }: QuestionCardProps) {
  const { saveAnswer } = useTest();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedOption) {
      // Get the corresponding MBTI type for the selected option
      const mbtiType = selectedOption === "A" ? questionData.A : questionData.B;
      // Ensure the type is a valid MBTI type
      saveAnswer(questionId, mbtiType, mbtiType as MBTIType);
      setSelectedOption(null); // Reset selection for next question
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Question {questionId}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-lg">{questionData.question}</p>
        <RadioGroup
          value={selectedOption || ""}
          onValueChange={setSelectedOption}
          className="space-y-4"
        >
          <div className="flex items-start space-x-2 rounded-md border p-3">
            <RadioGroupItem value="A" id={`option-A-${questionId}`} />
            <label
              htmlFor={`option-A-${questionId}`}
              className="flex flex-1 cursor-pointer items-start gap-2 text-sm font-medium"
            >
              {questionData.optionA}
            </label>
          </div>
          <div className="flex items-start space-x-2 rounded-md border p-3">
            <RadioGroupItem value="B" id={`option-B-${questionId}`} />
            <label
              htmlFor={`option-B-${questionId}`}
              className="flex flex-1 cursor-pointer items-start gap-2 text-sm font-medium"
            >
              {questionData.optionB}
            </label>
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleNext} 
          disabled={!selectedOption}
          className="w-full"
        >
          Next Question
        </Button>
      </CardFooter>
    </Card>
  );
}
