import { useState } from "react";

import { Controls } from "./Controls/Controls";
import { Question, Questions } from "./Questions/Questions";
import { Results } from "./Results/Results";

const questions: Array<Question> = [
  {
    label: "this is a question?",
    name: "question1",
    choices: [
      { value: "opt1", label: "option 1" },
      { value: "opt2", label: "option 2", correct: true },
    ],
  },
];

function Questionnaire(): JSX.Element {
  const [answers, setAnswers] = useState<Array<string | undefined>>(
    Array(questions.length)
  );

  function handleChangeAnswer(index: number, value: string) {
    const newValues = [...answers];

    newValues[index] = value;
    setAnswers(newValues);
  }

  const title: string = "Questionnaire";

  return (
    <div className="Questionnaire">
      <h1>{title}</h1>
      <Questions
        questions={questions}
        answers={answers}
        onChangeAnswer={handleChangeAnswer}
      />
      <Results questions={questions} answers={answers} />
      <Controls />
    </div>
  );
}

export { Questionnaire };
