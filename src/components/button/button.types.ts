import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "title"
> & {
  title: string | ReactNode;
};
