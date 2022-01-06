import { Controls } from "./Controls/Controls";
import { Question, Questions } from "./Questions/Questions";
import { Results } from "./Results/Results";

function Questionnaire(): JSX.Element {
  const questions: Array<Question> = [
    {
      label: "this is a question?",
      name: "question1",
      choices: [
        { value: "opt1", label: "option 1" },
        { value: "opt2", label: "option 2" },
      ],
    },
  ];
  const title: string = "Questionnaire";

  return (
    <div className="Questionnaire">
      <h1>{title}</h1>
      <Questions questions={questions} />
      <Results />
      <Controls />
    </div>
  );
}

export { Questionnaire };
