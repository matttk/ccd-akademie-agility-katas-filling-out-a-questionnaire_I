import fs from "fs";

const FILENAME = "Questionnaire.txt";

function getFileData(): Array<string> | null {
  const filePath: string = getFilePath();
  const fileData: string | null = readFile(filePath);

  if (fileData) {
    return splitStringByNewlines(fileData);
  }

  return null;
}

function getFilePath(): string {
  return `./${FILENAME}`;
}

function readFile(filepath: string): string | null {
  try {
    return fs.readFileSync(filepath, "utf8");
  } catch (err) {
    console.error(`Unable to read file ${filepath}`);
  }

  return null;
}

function splitStringByNewlines(string: string): Array<string> {
  return string.split("\n");
}

export { getFileData };
