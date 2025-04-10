import { Button } from "@rds/react-button";

export function AsChild() {
  return (
    <Button asChild>
      <a href="/">Link to home page</a>
    </Button>
  );
}
