import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image src="/mbti-logo.svg" alt="MBTI Logo" width={50} height={50} priority />
          </div>
          <h1 className="text-3xl font-bold mb-2">MBTI Personality Test</h1>
        </div>
        <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">About the Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p>
            The Myers-Briggs Type Indicator (MBTI) is a self-report questionnaire designed to identify
            a person&apos;s personality type, strengths, and preferences.
          </p>
          <p>
            This test consists of 93 questions that will help you understand your preferences across
            four different dimensions:
          </p>

          <ul className="list-disc space-y-2 mx-auto text-left max-w-xs pl-8">
            <li><strong>Extraversion (E)</strong> vs <strong>Introversion (I)</strong></li>
            <li><strong>Sensing (S)</strong> vs <strong>Intuition (N)</strong></li>
            <li><strong>Thinking (T)</strong> vs <strong>Feeling (F)</strong></li>
            <li><strong>Judging (J)</strong> vs <strong>Perceiving (P)</strong></li>
          </ul>
          {process.env.NEXT_PUBLIC_USE_DEV_MODE !== 'false' && (
            <p className="text-xs text-sky-600 italic">
              Currently running in development mode with 10 random questions.
            </p>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/test" className="w-full max-w-xs">
            <Button className="w-full">Start the Test</Button>
          </Link>
        </CardFooter>
      </Card>
        <div className="mt-8 flex items-center justify-center gap-1">
          <a 
            href="https://github.com/harrywang/llm-mbit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="View source on GitHub"
          >
            <Image src="/github.svg" alt="GitHub" width={24} height={24} className="dark:invert" />
          </a>
          <div className="text-sm text-muted-foreground">
            Made by <a 
              href="https://harrywang.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline underline-offset-2"
            >
              Harry Wang
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
