// components/Button.tsx
import clsx from "clsx";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string; // for extra styles if needed
};

export default function Button({
  children,
  variant = "primary",
  onClick,
  className,
}: ButtonProps) {
  const baseStyles =
    "flex justify-center items-center px-[10px] py-[30px] font-semibold text-base  sm:text-[24px] transition-colors duration-200 font-extrabold w-[246px] h-[61px] tect-center";

  const variants: Record<typeof variant, string> = {
    primary: "bg-[#8EC8EE] text-blue-900 hover:bg-blue-400 text-[#061665] ",
    outline:
      "border border-[#8EC8EE] text-[#8EC8EE] hover:bg-[#8EC8EE] hover:text-blue-900",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </button>
  );
}
