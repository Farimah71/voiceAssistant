import { ButtonHTMLAttributes, ReactNode } from "react";

type titleType = {
  title: string;
  icon: ReactNode;
};

type buttonType = "singleState" | "doubleState";

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "title"
> & {
  buttonType?: buttonType;
  title?: string;
  titleStart?: titleType;
  titleStop?: titleType;
  isListening?: boolean;
};
