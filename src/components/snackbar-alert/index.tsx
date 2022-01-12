import { Alert, AlertColor, Snackbar } from "@mui/material";
import { ComponentProps, ReactNode } from "react";

export default function SnackbarAlert({
  open = false,
  handleClose = () => null,
  severity = "success",
  snackbarProps,
  alertProps,
  children,
}: {
  open?: boolean;
  handleClose?: () => void;
  severity?: AlertColor;
  snackbarProps?: ComponentProps<typeof Snackbar>;
  alertProps?: ComponentProps<typeof Alert>;
  children?: ReactNode;
}) {
  return (
    <Snackbar
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      {...snackbarProps}
      open={open}
      onClose={handleClose}
    >
      <Alert
        sx={{ width: "100%" }}
        {...alertProps}
        onClose={handleClose}
        severity={severity}
      >
        {children}
      </Alert>
    </Snackbar>
  );
}
