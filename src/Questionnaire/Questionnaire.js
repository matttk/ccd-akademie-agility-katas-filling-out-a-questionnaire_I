import React from "react";

import { Controls } from "./Controls/Controls";
import { Questions } from "./Questions/Questions";
import { Results } from "./Results/Results";

function Questionnaire() {
  return (
    <div className="Questionnaire">
      <Questions />
      <Results />
      <Controls />
    </div>
  );
}

export { Questionnaire };
