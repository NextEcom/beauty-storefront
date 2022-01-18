import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField, TextFieldProps } from "@mui/material";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

export function ThemedTextField(props: TextFieldProps) {
  return <TextField fullWidth size="small" {...props} />;
}

export function ThemedPasswordField(props: TextFieldProps) {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const togglePasswordVisibility = useCallback(() => {
    setPasswordVisibility((visible) => !visible);
  }, []);
  const t = useTranslations("");
  return (
    <ThemedTextField
      name="password"
      label={t("SignUpForm.password")}
      placeholder="*********"
      autoComplete="on"
      type={passwordVisibility ? "text" : "password"}
      fullWidth
      InputProps={{
        endAdornment: (
          <IconButton
            size="small"
            type="button"
            onClick={togglePasswordVisibility}
          >
            {passwordVisibility ? (
              <Visibility
                sx={{
                  color: "grey.500",
                }}
                fontSize="small"
              />
            ) : (
              <VisibilityOff
                sx={{
                  color: "grey.300",
                }}
                fontSize="small"
              />
            )}
          </IconButton>
        ),
      }}
      {...props}
    />
  );
}
