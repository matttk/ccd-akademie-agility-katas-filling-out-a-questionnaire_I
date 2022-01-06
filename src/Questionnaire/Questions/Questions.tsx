import { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";

export type Question = {
  label: string;
  name: string;
  choices: Array<QuestionChoice>;
};

type QuestionChoice = {
  label: string;
  value: string;
};

interface QuestionsProps {
  questions: Array<Question>;
}

function Questions(props: QuestionsProps): JSX.Element {
  const { questions } = props;
  const [values, setValues] = useState<Array<string | undefined>>(
    Array(questions.length)
  );

  function handleChange(index: number, value: string) {
    const newValues = [...values];

    newValues[index] = value;
    setValues(newValues);
  }

  return (
    <div className="Questions">
      {questions.map((question, index) => (
        <SingleQuestion
          key={question.name}
          label={question.label}
          name={question.name}
          choices={question.choices}
          selectedChoice={values[index]}
          onChange={(value: string) => handleChange(index, value)}
        />
      ))}
    </div>
  );
}

interface SingleQuestionProps {
  label: string;
  name: string;
  choices: Array<QuestionChoice>;
  selectedChoice?: string;
  onChange: Function;
}

function SingleQuestion(props: SingleQuestionProps): JSX.Element {
  const { label, name, choices, selectedChoice, onChange } = props;

  return (
    <FormGroup tag="fieldset">
      <legend>{label}</legend>
      {choices.map((choice) => (
        <FormGroup check key={choice.label}>
          <Input
            id={`${name}-${choice.value}`}
            name={name}
            type="radio"
            checked={choice.value === selectedChoice}
            onChange={() => onChange(choice.value)}
          />{" "}
          <Label for={`${name}-${choice.value}`} check>
            {choice.label}
          </Label>
        </FormGroup>
      ))}
    </FormGroup>
  );
}

export { Questions };
