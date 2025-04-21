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
    <div className="w-full flex justify-evenly gap-16 [&>div]:flex [&>div]:flex-col [&>div]:gap-4 [&_p]:text-lg [&_p]:font-medium">
      <div>
        <p>Icon default</p>
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
      <div>
        <p>Icon transparent (in inputs)</p>
        <Button variant="icon-transparent" size="sm">
          <_Icon />
        </Button>
        <Button variant="icon-transparent">
          <_Icon />
        </Button>
        <Button variant="icon-transparent" size="lg">
          <_Icon />
        </Button>
        <Button disabled variant="icon-transparent">
          <_Icon />
        </Button>
      </div>
    </div>
  );
}
