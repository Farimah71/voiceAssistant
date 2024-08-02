import { ButtonHTMLAttributes, ReactNode } from "react";

type titleType = {
  title: string;
  icon: ReactNode;
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  titleStart: titleType;
  titleStop?: titleType;
  isListening?: boolean;
};
