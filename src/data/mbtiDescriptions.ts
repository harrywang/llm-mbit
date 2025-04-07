type MBTIDescription = {
  short_desc: string;
  features: string;
};

export const MBTI_DESCRIPTIONS: Record<string, MBTIDescription> = {
  'ISTJ': {
    'short_desc': 'Introversion / Sensing / Thinking / Judging',
    'features': '1. Serious and quiet, achieving success through concentration and reliable commitment.  \n2. Practical, orderly, realistic, logical, true, and reliable.  \n3. Very attentive and happy to have good organization and order in all things (work, home, life).  \n4. Responsible.  \n5. Make decisions based on established results and are steadfast in the face of obstacles and gossip.  \n6. Value tradition and loyalty.  \n7. Traditional thinkers or managers.'
  },
  'ISFJ': {
    'short_desc': 'Introversion / Sensing / Feeling / Judging',
    'features': '1. Quiet, kind, responsible, and conscientious.  \n2. Diligent and committed in their actions.  \n3. High stability, often the stabilizing force in projects or teams.  \n4. Willing to work hard, endure hardships, and strive for accuracy.  \n5. Usually not interested in technology. Patient with detailed tasks.  \n6. Loyal, considerate, intellectual, and concerned with the feelings of others.  \n7. Dedicated to creating an orderly and harmonious work and family environment.'
  },
  'INFJ': {
    'short_desc': 'Introversion / Intuition / Feeling / Judging',
    'features': '1. Successful due to perseverance, creativity, and a strong sense of purpose.  \n2. Puts maximum effort into their work.  \n3. Quietly strong, sincere, and genuinely caring about others.  \n4. Respected for their principles.  \n5. Respected and followed for presenting a clear vision that benefits the public.  \n6. Pursue the meaning and connections of ideas, relationships, and material possessions.  \n7. Wants to understand what motivates others and has insights into others.  \n8. Honest and firmly believes in their values.  \n9. Organized and decisive in carrying out their vision.'
  },
  'INTJ': {
    'short_desc': 'Introversion / Intuition / Thinking / Judging',
    'features': '1. Strong drive and intention to achieve goals and ideas—stubborn and determined.  \n2. Has a grand vision and can quickly identify meaningful patterns among external events.  \n3. Capable of planning and completing tasks efficiently in their duties.  \n4. Skeptical, critical, independent, decisive, and holds high standards for competence and performance.'
  },
  'ISTP': {
    'short_desc': 'Introversion / Sensing / Thinking / Perceiving',
    'features': '1. Calm observer—quiet, adaptable, flexible, and curious with an unbiased curiosity and unexpected original humor.  \n2. Interested in exploring the reasons and effects of technical issues, how things work, and uses logical principles to construct facts, valuing efficiency.  \n3. Good at grasping the core of problems and finding solutions.  \n4. Analyzes the reasons for success and can quickly identify the core practical issues from a large amount of data.'
  },
  'ISFP': {
    'short_desc': 'Introversion / Sensing / Feeling / Perceiving',
    'features': '1. Shy, peaceful, kind, sensitive, and modest in their actions.  \n2. Likes to avoid conflicts and does not impose their views or values on others.  \n3. Not interested in leading but often loyal followers.  \n4. Works without urgency, content with the status quo, and not driven by results.  \n5. Likes to have their own space and follow their own schedule.'
  },
  'INFP': {
    'short_desc': 'Introversion / Intuition / Feeling / Perceiving',
    'features': '1. Quiet observer, idealistic and loyal to their values and important people.  \n2. Wants external life to align with inner values.  \n3. Curious and quick to see opportunities, often a catalyst for developing ideas.  \n4. Flexible, adaptable, and resilient unless their values are violated.  \n5. Eager to understand and develop others potential. Focuses intensely on their tasks.  \n6. Not very concerned with circumstances or possessions.  \n7. Adaptable and flexible unless their values are threatened.'
  },
  'INTP': {
    'short_desc': 'Introversion / Intuition / Thinking / Perceiving',
    'features': '1. Quiet, reserved, flexible, and adaptable.  \n2. Particularly fond of pursuing theories and scientific principles.  \n3. Used to solving problems with logic and analysis—problem solvers.  \n4. Most interested in creative matters and specific work, not much interested in gatherings and chit-chat.  \n5. Pursues a career that allows them to follow their strong personal interests.  \n6. Seeks logical explanations for matters of interest.'
  },
  'ESTJ': {
    'short_desc': 'Extraversion / Sensing / Thinking / Judging',
    'features': '1. Practical, realistic, and fact-oriented, with entrepreneurial or technical talents.  \n2. Dislikes abstract theories; prefers learning immediately applicable principles.  \n3. Likes to organize and manage activities, focusing on the most efficient way to achieve results.  \n4. Decisive, detail-oriented, and quick to make decisions—excellent administrators.  \n5. May overlook others\' feelings.  \n6. Prefers leadership roles or corporate management.'
  },
  'ESFJ': {
    'short_desc': 'Extraversion / Sensing / Feeling / Judging',
    'features': '1. Sincere, talkative, cooperative, popular, and fair-minded—natural collaborators and active group members.  \n2. Values harmony and excels at creating it.  \n3. Often engages in activities beneficial to others.  \n4. Better work performance with encouragement and praise.  \n5. Most interested in matters that directly and tangibly affect people\'s lives.  \n6. Likes to work with others to complete tasks accurately and on time.'
  },
  'ENFJ': {
    'short_desc': 'Extraversion / Intuition / Feeling / Judging',
    'features': '1. Enthusiastic, empathetic, and responsible—leaders who encourage others.  \n2. Genuinely concerned about others\' thoughts and desires, and addresses them with sincerity.  \n3. Skillfully and pleasantly leads group discussions or presentations.  \n4. Sociable, popular, and empathetic.  \n5. Sensitive to praise and criticism.  \n6. Likes to guide others and helps them or groups reach their potential.'
  },
  'ENTJ': {
    'short_desc': 'Extraversion / Intuition / Thinking / Judging',
    'features': '1. Frank, decisive activity leaders.  \n2. Skilled at developing and implementing broad systems to solve organizational problems.  \n3. Expert in meaningful and intelligent discussions, such as public speaking.  \n4. Enjoys continually absorbing new knowledge and can open information channels widely.  \n5. May become overly confident and strongly express their ideas.  \n6. Likes long-term planning and goal setting.'
  },
  'ESTP': {
    'short_desc': 'Extraversion / Sensing / Thinking / Perceiving',
    'features': '1. Skilled at solving on-the-spot problems—problem solvers.  \n2. Enjoys doing things and takes pleasure in the process.  \n3. Inclined to technical matters and sports, making friends easily.  \n4. Adaptable, tolerant, practical; invests effort in work that quickly shows results.  \n5. Dislikes lengthy explanations and theories.'
  },
  'ESFP': {
    'short_desc': 'Extraversion / Sensing / Feeling / Perceiving',
    'features': '1. Extraverted, kind, accepting, enjoys sharing joy with others.  \n2. Likes to act with others and make things happen, including in learning.  \n3. Aware of future developments and actively participates.  \n4. Excellent at interpersonal skills and practical knowledge, highly adaptable to others and environments.  \n5. A lover of life, people, and material comforts.'
  },
  'ENFP': {
    'short_desc': 'Extraversion / Intuition / Feeling / Perceiving',
    'features': '1. Enthusiastic, energetic, intelligent, imaginative, sees life full of opportunities but seeks affirmation and support from others.  \n2. Capable of achieving almost anything of interest.  \n3. Quickly finds solutions to problems and offers help to those in need.  \n4. Relies on improvisation rather than planning.  \n5. Often finds reasons to push themselves to achieve goals.  \n6. Spontaneous performers.'
  },
  'ENTP': {
    'short_desc': 'Extraversion / Intuition / Thinking / Perceiving',
    'features': '1. Quick-witted, intelligent, versatile.  \n2. Motivates partners, quick and outspoken.  \n3. Enjoys debating both sides of issues for fun.  \n4. Strategic in solving new and challenging problems, but may overlook or get bored with routine tasks and details.  \n5. Diverse interests, easily shifts to new ones.'
  }
};
