import { ComponentProps } from "react";
import { Button as MuiButton } from "@mui/material";

type ButtonProps = ComponentProps<typeof MuiButton>;

export default function Button(props: ButtonProps) {
  return (
    <MuiButton variant="contained" {...props}>
      {props.children}
    </MuiButton>
  );
}
