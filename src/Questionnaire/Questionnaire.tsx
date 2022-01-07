import { useEffect, useState } from "react";

import { Controls } from "./Controls/Controls";
import { getFileData } from "./data/FileProvider";
import { parseQuestions } from "./data/QuestionParser";
import { Question, Questions } from "./Questions/Questions";
import { Results } from "./Results/Results";

function Questionnaire(): JSX.Element {
  const [showAnswers, setShowAnswers] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Array<Question>>([]);
  const [answers, setAnswers] = useState<Array<string | undefined>>(
    Array(questions.length)
  );

  useEffect(() => {
    getFileData()
      .then((fileData) => {
        const questions = parseQuestions(fileData);
        setQuestions(questions);
      })
      .catch(() => {
        // no defined error state for this exercise
      });
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
