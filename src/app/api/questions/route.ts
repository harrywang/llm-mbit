import { NextResponse } from 'next/server';
import { getQuestions } from '@/utils/questions';

// Cache the questions data
let cachedQuestions: Record<string, unknown> | null = null;

export async function GET() {
  try {
    // Use cached data if available
    if (!cachedQuestions) {
      cachedQuestions = await getQuestions();
    }
    
    return NextResponse.json(cachedQuestions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch questions' },
      { status: 500 }
    );
  }
}
