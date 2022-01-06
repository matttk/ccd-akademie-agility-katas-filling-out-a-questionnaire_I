import { Question } from "../Questions/Questions";
import { Answers } from "./Answers";
import { Summary } from "./Summary";

interface ResultsProps {
  questions: Array<Question>;
  answers: Array<string | undefined>;
}

function Results(props: ResultsProps): JSX.Element {
  const { questions, answers } = props;

  return (
    <div className="Results">
      <Summary questions={questions} answers={answers} />
      <Answers questions={questions} answers={answers} />
    </div>
  );
}

export { Results };
