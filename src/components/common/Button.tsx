import React from "react";

interface ButtonProps {
  btnRole: boolean | string;
  bgColor?: string;
  textColor?: string;
  onclick?: () => void;
}

export default function Button({
  btnRole,
  bgColor,
  textColor,
  onclick,
}: ButtonProps) {
  return (
    <button
      onClick={onclick}
      className={`px-3 ${bgColor && bgColor} ${
        textColor ? textColor : "text-slate-900"
      }`}
    >
      {typeof btnRole === "boolean" ? (btnRole ? `ToDo` : `Done`) : btnRole}
    </button>
  );
}
