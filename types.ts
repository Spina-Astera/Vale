
export enum Step {
  PASSWORD = 'PASSWORD',
  FAVORITE_ARTIST = 'FAVORITE_ARTIST',
  TROLL_QUESTIONS = 'TROLL_QUESTIONS',
  LOVE_SLIDER = 'LOVE_SLIDER',
  FINAL_ASK = 'FINAL_ASK',
  CELEBRATION = 'CELEBRATION'
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctIndex: number;
  trollResponse?: string;
}
