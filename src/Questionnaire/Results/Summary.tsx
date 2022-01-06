import { Question } from "../Questions/Questions";
import { isCorrect } from "./utils";

interface AnswersProps {
  questions: Array<Question>;
  answers: Array<string | undefined>;
}

function Summary(props: AnswersProps): JSX.Element {
  const { questions, answers } = props;
  const numCorrect: number = questions.reduce(
    (numCorrect: number, question: Question, index: number) => {
      if (answers[index] && isCorrect(question, answers[index])) {
        numCorrect++;
      }

      return numCorrect;
    },
    0
  );
  const numQuestions: number = questions.length;
  const percentage: number = Math.round((numCorrect / questions.length) * 100);
  const summaryText: string = `${numCorrect} out of ${numQuestions} questions answered correctly (${percentage}%)`;

  return <div className="Summary">{summaryText}</div>;
}

export { Summary };
