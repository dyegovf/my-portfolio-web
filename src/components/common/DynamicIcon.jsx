import { Icon } from "@iconify/react";

export function DynamicIcon({
  name,
  fallback = "mdi:shape-outline",
  className = "h-5 w-5",
}) {
  return <Icon icon={name || fallback} className={className} />;
}
