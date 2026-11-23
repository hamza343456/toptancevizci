import { MessageCircle } from "lucide-react";
import { buildGeneralQuoteMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  label?: string;
  productName?: string;
  customMessage?: string;
  variant?: "primary" | "walnut" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

const variantClasses: Record<
  NonNullable<WhatsAppButtonProps["variant"]>,
  string
> = {
  primary:
    "bg-leaf-700 text-white hover:bg-leaf-800 focus-visible:outline-leaf-700 shadow-sm",
  walnut:
    "bg-walnut-900 text-cream-50 hover:bg-walnut-800 focus-visible:outline-walnut-900 shadow-sm",
  outline:
    "border border-leaf-700 text-leaf-800 bg-white hover:bg-leaf-50 focus-visible:outline-leaf-700",
};

const sizeClasses: Record<NonNullable<WhatsAppButtonProps["size"]>, string> = {
  sm: "px-3.5 py-2 text-sm gap-1.5",
  md: "px-5 py-2.5 text-sm sm:text-base gap-2",
  lg: "px-6 py-3.5 text-base gap-2.5",
};

export function WhatsAppButton({
  label = "WhatsApp'tan Teklif Al",
  productName,
  customMessage,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
}: WhatsAppButtonProps) {
  const message = customMessage || buildGeneralQuoteMessage(productName);
  const href = buildWhatsAppUrl(message);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={[
        "inline-flex items-center justify-center rounded-lg font-medium transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
