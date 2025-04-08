"use client";

import React, { useCallback, useMemo } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTest } from "@/context/TestContext";
import { MBTI_DESCRIPTIONS } from "@/data/mbtiDescriptions";

export function ResultsCard() {
  const { result, resetTest } = useTest();
  
  // Always define memoized values, even if we don't use them
  // This ensures hooks are called in the same order every render
  const personalityType = useMemo(() => {
    if (!result) return "";
    return [
      result.E > result.I ? "E" : "I",
      result.S > result.N ? "S" : "N",
      result.T > result.F ? "T" : "F",
      result.J > result.P ? "J" : "P",
    ].join("");
  }, [result]);
  
  // Calculate percentages for each dimension
  // Memoize the calculation to prevent recalculating on every render
  const calculatePercentage = useCallback((type1: string, type2: string) => {
    if (!result) return 50;
    const value1 = result?.[type1 as keyof typeof result] || 0;
    const value2 = result?.[type2 as keyof typeof result] || 0;
    const total = value1 + value2;
    return total > 0 ? Math.round((value1 / total) * 100) : 50;
  }, [result]);
  
  // Return early if no result is available
  if (!result) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <p>Calculating your results...</p>
        </CardContent>
      </Card>
    );
  }

  // Use the imported MBTI descriptions

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Your MBTI Type: {personalityType}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4 mb-6">
          <p className="text-center font-medium text-lg">{MBTI_DESCRIPTIONS[personalityType]?.short_desc || "A unique personality type!"}</p>
          <div className="bg-slate-50 p-4 rounded-lg text-sm">
            <div dangerouslySetInnerHTML={{ __html: MBTI_DESCRIPTIONS[personalityType]?.features.replace(/\n/g, '<br/>') || "" }} />
          </div>
        </div>
        
        <div className="space-y-6">
          {/* E/I Dimension */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-slate-700">Introversion (I)</span>
              <span className="text-slate-700">Extraversion (E)</span>
            </div>
            <div className="relative w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-slate-300 rounded-l-full" style={{ width: `${calculatePercentage("I", "E")}%` }}></div>
              <div className="absolute top-0 right-0 h-full bg-slate-400 rounded-r-full" style={{ width: `${calculatePercentage("E", "I")}%` }}></div>
            </div>
            <div className="flex justify-between text-xs text-slate-600">
              <span>{calculatePercentage("I", "E")}%</span>
              <span>{calculatePercentage("E", "I")}%</span>
            </div>
          </div>
          
          {/* S/N Dimension */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-slate-700">Sensing (S)</span>
              <span className="text-slate-700">Intuition (N)</span>
            </div>
            <div className="relative w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-teal-200 rounded-l-full" style={{ width: `${calculatePercentage("S", "N")}%` }}></div>
              <div className="absolute top-0 right-0 h-full bg-teal-400 rounded-r-full" style={{ width: `${calculatePercentage("N", "S")}%` }}></div>
            </div>
            <div className="flex justify-between text-xs text-slate-600">
              <span>{calculatePercentage("S", "N")}%</span>
              <span>{calculatePercentage("N", "S")}%</span>
            </div>
          </div>
          
          {/* T/F Dimension */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-slate-700">Thinking (T)</span>
              <span className="text-slate-700">Feeling (F)</span>
            </div>
            <div className="relative w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-amber-200 rounded-l-full" style={{ width: `${calculatePercentage("T", "F")}%` }}></div>
              <div className="absolute top-0 right-0 h-full bg-amber-400 rounded-r-full" style={{ width: `${calculatePercentage("F", "T")}%` }}></div>
            </div>
            <div className="flex justify-between text-xs text-slate-600">
              <span>{calculatePercentage("T", "F")}%</span>
              <span>{calculatePercentage("F", "T")}%</span>
            </div>
          </div>
          
          {/* J/P Dimension */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-slate-700">Judging (J)</span>
              <span className="text-slate-700">Perceiving (P)</span>
            </div>
            <div className="relative w-full h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-sky-200 rounded-l-full" style={{ width: `${calculatePercentage("J", "P")}%` }}></div>
              <div className="absolute top-0 right-0 h-full bg-sky-400 rounded-r-full" style={{ width: `${calculatePercentage("P", "J")}%` }}></div>
            </div>
            <div className="flex justify-between text-xs text-slate-600">
              <span>{calculatePercentage("J", "P")}%</span>
              <span>{calculatePercentage("P", "J")}%</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={resetTest} className="w-full">Take Test Again</Button>
      </CardFooter>
    </Card>
  );
}
