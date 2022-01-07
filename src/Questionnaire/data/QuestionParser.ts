import { Question, QuestionChoice } from "../Questions/Questions";

const DO_NOT_KNOW_CHOICE: QuestionChoice = {
  label: "Don't know",
  value: "dontknow",
};

function parseQuestions(lines: Array<string>): Array<Question> {
  const questions: Array<Question> = [];
  let index = 0;

  while (lines[index]) {
    const currentLine: string = lines[index];

    if (isQuestion(currentLine)) {
      const question: Question = {
        label: getQuestionLabel(currentLine),
        name: getQuestionInternalName(currentLine),
        choices: getChoices(lines, index + 1),
      };
      const numLinesToSkip: number = 1 + question.choices.length - 1;

      questions.push(question);
      index += numLinesToSkip;
    } else {
      index++;
    }
  }

  return questions;
}

function isQuestion(line: string): boolean {
  return line.indexOf("?") === 0;
}

function getChoices(
  lines: Array<string>,
  startIndex: number
): Array<QuestionChoice> {
  const choices: Array<QuestionChoice> = [];
  let index: number = startIndex;

  while (lines[index] && !isQuestion(lines[index])) {
    const choice: QuestionChoice = getChoice(lines[index]);
    choices.push(choice);
    index++;
  }

  choices.push(DO_NOT_KNOW_CHOICE);

  return choices;
}

function getQuestionLabel(line: string): string {
  return `${line.slice(1)}?`;
}

function getQuestionInternalName(line: string): string {
  return line.replace(/[^a-zA-Z]+/g, "").toLowerCase();
}

function getChoice(line: string): QuestionChoice {
  const isCorrect: boolean = line.indexOf("*") === 0;

  return {
    label: getChoiceLabel(line, isCorrect),
    value: getChoiceValue(line),
    correct: isCorrect,
  };
}

function getChoiceLabel(line: string, isCorrect: boolean): string {
  if (isCorrect) {
    return line.slice(1);
  }

  return line;
}

function getChoiceValue(line: string): string {
  return line.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
}

export { parseQuestions };
