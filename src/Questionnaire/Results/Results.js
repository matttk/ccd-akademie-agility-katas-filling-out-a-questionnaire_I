import React from "react";

import { Answers } from "./Answers";
import { Summary } from "./Summary";

function Results() {
  return (
    <div className="Results">
      <Summary />
      <Answers />
    </div>
  );
}

export { Results };
