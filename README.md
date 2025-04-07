# MBTI Personality Test

A modern web application for the Myers-Briggs Type Indicator (MBTI) personality test built with Next.js and Shadcn UI components.

This is based on a summer project my interns did in 2024 [https://github.com/datamonet/llm-personality](https://github.com/datamonet/llm-personality). 

The dataset is


## Overview

This application provides a complete MBTI personality test experience with 93 questions covering the four MBTI dimensions:

- **Extraversion (E)** vs **Introversion (I)**
- **Sensing (S)** vs **Intuition (N)**
- **Thinking (T)** vs **Feeling (F)**
- **Judging (J)** vs **Perceiving (P)**

The application tracks user answers and calculates their MBTI type based on the most frequent letter in each dimension.

## Development Mode

For faster development and testing, the application includes a development mode that uses only 10 random questions instead of the full 93-question test. This mode is enabled by default.

### Configuring Development Mode

You can toggle between development and production modes using environment variables:

1. Create a `.env` file in the project root (see `.env.example` for reference)
2. Set `NEXT_PUBLIC_USE_DEV_MODE` to `false` to use all 93 questions or `true` for 10 random questions

```
# .env.local example
NEXT_PUBLIC_USE_DEV_MODE=true  # or false for full test
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/harrywang/llm-mbit.git
cd llm-mbit

# Install dependencies
pnpm install

# Run the development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Built With

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui components
- [Logo source](https://www.svgrepo.com/svg/241644/puzzle)