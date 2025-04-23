import { Badge } from "@rds/react-badge";

export function ColorVariants() {
  return (
    <div className="flex flex-col gap-5">
      <Badge content={88}>Default</Badge>
      <Badge content={88} variant="primary">
        Primary
      </Badge>
      <Badge content={88} variant="info">
        Info
      </Badge>
      <Badge content={88} variant="info-light">
        Info Light
      </Badge>
      <Badge content={88} variant="success">
        Success
      </Badge>
      <Badge content={88} variant="success-light">
        Success Light
      </Badge>
      <Badge content={88} variant="warning">
        Warning
      </Badge>
      <Badge content={88} variant="warning-light">
        Warning Light
      </Badge>
    </div>
  );
}
