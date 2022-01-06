import { useState } from "react";
import { FormGroup, Input, Label } from "reactstrap";

function Questions({ questions }) {
  const [values, setValues] = useState([]);

  function handleChange(index, value) {
    const newValues = [...values];

    newValues[index] = value;
    setValues(newValues);
  }

  return (
    <div className="Questions">
      {questions.map((question, index) => (
        <Question
          key={question.name}
          label={question.label}
          name={question.name}
          choices={question.choices}
          selectedChoice={values[index]}
          onChange={(value) => handleChange(index, value)}
        />
      ))}
    </div>
  );
}

function Question({ label, name, choices, selectedChoice, onChange }) {
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
