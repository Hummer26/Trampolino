import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";

import {cn} from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand-yellow text-brand-blue shadow-lg shadow-yellow-500/20 hover:-translate-y-0.5 hover:bg-yellow-300",
        secondary: "bg-white text-brand-blue hover:-translate-y-0.5 hover:bg-brand-sky",
        outline: "border border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/20",
        blue: "bg-brand-blue text-white hover:-translate-y-0.5 hover:bg-blue-900"
      },
      size: {
        default: "h-11 px-5",
        lg: "h-[3.25rem] px-7 py-4 text-base",
        icon: "h-11 w-11 px-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, size, asChild = false, ...props}, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({variant, size, className}))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export {Button, buttonVariants};
