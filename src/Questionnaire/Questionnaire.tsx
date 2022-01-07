import { useEffect, useState } from "react";

import { Controls } from "./Controls/Controls";
import { getFileData } from "./data/FileProvider";
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
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Array<string | undefined>>(
    Array(questions.length)
  );

  useEffect(() => {
    const fileData: Array<string> | null = getFileData();
    
    console.log(fileData);
  }, []);

  function handleChangeAnswer(index: number, value: string) {
    const newValues = [...answers];

    newValues[index] = value;
    setAnswers(newValues);
  }

  function handleShowResults() {
    setShowAnswers(true);
  }

  const title: string = "Questionnaire";

  return (
    <div className="Questionnaire">
      <h1>{title}</h1>
      {!showAnswers && (
        <Questions
          questions={questions}
          answers={answers}
          onChangeAnswer={handleChangeAnswer}
        />
      )}
      {showAnswers && <Results questions={questions} answers={answers} />}
      {!showAnswers && <Controls onClickShowScore={handleShowResults} />}
    </div>
  );
}

export { Questionnaire };
