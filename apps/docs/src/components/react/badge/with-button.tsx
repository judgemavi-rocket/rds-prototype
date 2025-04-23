import { Badge } from "@rds/react-badge";
import { Button } from "@rds/react-button";

export function WithButton() {
  return (
    <Badge content="99+">
      <Button>Button</Button>
    </Badge>
  );
}
