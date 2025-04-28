import { Tag } from "@rds/react-tag";

export function ColorVariants() {
  return (
    <div className="flex flex-col gap-4">
      <Tag>Default</Tag>
      <Tag variant="info">Info</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="unavailable">Unavailable</Tag>
      <Tag variant="warning">Warning</Tag>
    </div>
  );
}
