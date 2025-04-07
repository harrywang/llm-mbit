"use client";

import { Progress } from "@/components/ui/progress";
import { useTest } from "@/context/TestContext";

export function TestProgress() {
  const { progress } = useTest();
  
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="flex justify-between mb-2 text-sm">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
}
