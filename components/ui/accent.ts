export type SpaceVariant = "default" | "ai" | "marketing" | "leadership";

export const ACCENT_TEXT: Record<SpaceVariant, string> = {
  default: "text-blue-500",
  ai: "text-blue-500",
  marketing: "text-green-600",
  leadership: "text-gold-500",
};

export const ACCENT_BORDER: Record<SpaceVariant, string> = {
  default: "border-blue-500",
  ai: "border-blue-500",
  marketing: "border-green-600",
  leadership: "border-gold-500",
};

export const ACCENT_BG: Record<SpaceVariant, string> = {
  default: "bg-blue-500",
  ai: "bg-blue-500",
  marketing: "bg-green-600",
  leadership: "bg-gold-500",
};

export const ACCENT_HOVER_TEXT: Record<SpaceVariant, string> = {
  default: "hover:text-blue-600",
  ai: "hover:text-blue-600",
  marketing: "hover:text-green-600",
  leadership: "hover:text-gold-600",
};

// Tailwind's JIT scanner needs full literal class strings, so group-hover
// combinations are pre-composed here rather than built with template strings.
export const ACCENT_GROUP_HOVER: Record<SpaceVariant, string> = {
  default: "group-hover:border-blue-500 group-hover:text-blue-600",
  ai: "group-hover:border-blue-500 group-hover:text-blue-600",
  marketing: "group-hover:border-green-600 group-hover:text-green-600",
  leadership: "group-hover:border-gold-500 group-hover:text-gold-600",
};
