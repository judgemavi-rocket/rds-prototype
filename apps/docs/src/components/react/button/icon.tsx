import { Button } from "@rds/react-button";

const _Icon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m11 16 4-4-4-4" />
  </svg>
);

export function Icon() {
  return (
    <div className="flex flex-col gap-4">
      <Button variant="icon" size="sm">
        <_Icon />
      </Button>
      <Button variant="icon">
        <_Icon />
      </Button>
      <Button variant="icon" size="lg">
        <_Icon />
      </Button>
      <Button disabled variant="icon">
        <_Icon />
      </Button>
    </div>
  );
}
