import { Question, QuestionChoice } from "../Questions/Questions";
import { isCorrect } from "./utils";

interface AnswersProps {
  questions: Array<Question>;
  answers: Array<string | undefined>;
}

function Answers(props: AnswersProps): JSX.Element {
  const { questions, answers } = props;

  return (
    <div className="Answers">
      {questions.map((question, index) => (
        <AnswerInfo
          key={question.label}
          question={question}
          answer={answers[index]}
        />
      ))}
    </div>
  );
}

interface AnswerInfoProps {
  question: Question;
  answer: string | undefined;
}

function AnswerInfo(props: AnswerInfoProps): JSX.Element {
  const { question, answer } = props;
  const isAnswerCorrect: boolean = isCorrect(question, answer);
  const correctChoice: QuestionChoice | undefined = question.choices.find(
    (choice) => choice.correct
  );

  function getCorrectnessText(
    answer: string | undefined,
    isCorrect: boolean
  ): string {
    if (isCorrect) {
      return `Your answer '${answer}' is correct`;
    }

    return `Your answer '${answer}' is wrong`;
  }

  return (
    <div className="AnswerInfo">
      <p>{question.label}</p>
      <ul>
        <li>{getCorrectnessText(answer, isAnswerCorrect)}</li>
        {!isAnswerCorrect && !!correctChoice && (
          <li>Correct answer: '{correctChoice.label}'</li>
        )}
      </ul>
    </div>
  );
}

export { Answers };
