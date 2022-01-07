const FILENAME = "Questionnaire.txt";

function getFileData(): Promise<Array<string>> {
  const fileLocation: string = getFileLocation();

  return fetchFile(fileLocation)
    .then((fileData) => {
      return splitStringByNewlines(fileData);
    })
    .catch(() => {
      console.error(`Unable to read file ${fileLocation}`);
      return Promise.reject();
    });
}

function getFileLocation(): string {
  return `/${FILENAME}`;
}

async function fetchFile(fileLocation: string): Promise<string> {
  return fetch(fileLocation).then((response) => {
    return response.text();
  });
}

function splitStringByNewlines(string: string): Array<string> {
  return string.split("\n");
}

export { getFileData };
