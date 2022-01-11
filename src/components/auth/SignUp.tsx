import { Input, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslations } from "next-intl";

export function SignUp() {
  const t = useTranslations("SignUp");

  return (
    <Box>
      <TextField required label={t("firstName")} />
      <TextField required label={t("lastName")} />
      <TextField required label={t("phoneNumber")} type={"tel"} />
      <TextField required label={t("password")} type="password" />
    </Box>
  );
}
