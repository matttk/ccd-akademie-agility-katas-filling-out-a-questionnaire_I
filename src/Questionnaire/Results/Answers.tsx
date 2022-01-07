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
    question: Question,
    answer: string | undefined,
    isCorrect: boolean
  ): string {
    const answerChoice: QuestionChoice | undefined = question.choices.find(
      (choice) => choice.value === answer
    );

    if (!answerChoice) {
      return `Unknown answer '${answer}' is wrong`;
    }

    if (isCorrect) {
      return `Your answer '${answerChoice.label}' is correct`;
    }

    return `Your answer '${answerChoice.label}' is wrong`;
  }

  return (
    <div className="AnswerInfo">
      <p>{question.label}</p>
      <ul>
        <li>{getCorrectnessText(question, answer, isAnswerCorrect)}</li>
        {!isAnswerCorrect && !!correctChoice && (
          <li>Correct answer: '{correctChoice.label}'</li>
        )}
      </ul>
    </div>
  );
}

export { Answers };
