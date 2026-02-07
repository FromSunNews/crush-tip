import {
  Camera,
  BrainCircuit,
  Send,
  Sparkles,
  Globe,
  Zap,
  SmilePlus,
  Smile,
  Heart,
  Star,
  Lightbulb,
  UserRound,
  MessageCircle,
  Check,
  type LucideProps,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  camera: Camera,
  "brain-circuit": BrainCircuit,
  send: Send,
  sparkles: Sparkles,
  globe: Globe,
  zap: Zap,
  "smile-plus": SmilePlus,
  smile: Smile,
  heart: Heart,
  star: Star,
  lightbulb: Lightbulb,
  "user-round": UserRound,
  "message-circle": MessageCircle,
  check: Check,
};

export function DynIcon({
  name,
  className,
  ...props
}: { name: string } & LucideProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} {...props} />;
}
