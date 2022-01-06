import { Question } from "../Questions/Questions";

interface AnswersProps {
  questions: Array<Question>;
  answers: Array<string | undefined>;
}

function Answers(props: AnswersProps): JSX.Element {
  return <div className="Answers">answers</div>;
}

export { Answers };
