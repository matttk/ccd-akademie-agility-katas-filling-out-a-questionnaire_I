import { Answers } from "./Answers";
import { Summary } from "./Summary";

function Results(): JSX.Element {
  return (
    <div className="Results">
      <Summary />
      <Answers />
    </div>
  );
}

export { Results };
