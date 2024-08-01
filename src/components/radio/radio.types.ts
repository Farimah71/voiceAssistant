import { InputHTMLAttributes, ReactNode } from "react";

export type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
  iconCheck: ReactNode;
  iconChecked: ReactNode;
};
