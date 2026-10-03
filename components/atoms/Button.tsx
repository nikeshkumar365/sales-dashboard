import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;
};

export default function Button({ active = false, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "bg-teal-700 text-white"
          : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
      } ${className}`}
    />
  );
}
