import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export default function Button(props: ButtonProps) {
  return <button {...props}>{props.children}</button>;
}
