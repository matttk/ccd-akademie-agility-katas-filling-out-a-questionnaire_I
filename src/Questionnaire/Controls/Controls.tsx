import { MouseEventHandler } from "react";
import { Button } from "reactstrap";

interface ControlsProps {
  onClickShowScore: MouseEventHandler<HTMLButtonElement>;
}

function Controls(props: ControlsProps): JSX.Element {
  const { onClickShowScore } = props;

  return (
    <div className="Controls">
      <Button onClick={onClickShowScore}>Show my score...</Button>
    </div>
  );
}

export { Controls };
