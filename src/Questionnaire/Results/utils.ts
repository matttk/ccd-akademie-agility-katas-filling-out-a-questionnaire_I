import { Question, QuestionChoice } from "../Questions/Questions";

export function isCorrect(
  question: Question,
  answer: string | undefined
): boolean {
  const correctChoice: QuestionChoice | undefined = question.choices.find(
    (choice) => choice.correct
  );

  if (correctChoice) {
    return correctChoice.value === answer;
  }

  return false;
}
