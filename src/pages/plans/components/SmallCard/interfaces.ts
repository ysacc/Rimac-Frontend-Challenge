import { ButtonHTMLAttributes } from "react";

export interface SmallCardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: () => JSX.Element;
  title: string;
  description: string;
  selected: boolean;
}
