import { Button } from "@rds/react-button";

export function Warning() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="warning">Warning</Button>
      <Button variant="warning-outline">Warning Outline</Button>
    </div>
  );
}
