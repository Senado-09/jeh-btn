import React from "react";
import { Loader2 } from "lucide-react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
};

const variantClasses = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-gray-300 hover:bg-gray-400 text-black",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  isLoading = false,
  disabled = false,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-md ${variantClasses[variant]} ${sizeClasses[size]} transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
      disabled={isLoading || disabled}
    >
      {isLoading ? <Loader2 className="animate-spin" size={20} /> : icon}
      {label}
    </button>
  );
};

export default Button;