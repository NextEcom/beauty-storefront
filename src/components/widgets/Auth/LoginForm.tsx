import { Flexbox, NavLink } from "@/components/base";
import {
  ThemedPasswordField,
  ThemedTextField,
} from "@/components/base/ThemedInputFields";
import { Box, Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export function LoginForm() {
  const t = useTranslations();

  return (
    <Box>
      <Flexbox flexDirection="column" alignItems="center" gap={3.5}>
        <ThemedTextField
          required
          type="tel"
          size="small"
          name="phoneNumber"
          label={t("SignUpForm.phoneNumber")}
          placeholder="+998 999 999 99"
          variant="outlined"
          fullWidth
        />
        <ThemedPasswordField required />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          {t("Common.signIn")}
        </Button>
      </Flexbox>

      <Flexbox
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-end"
        my={2.5}
      >
        <NavLink href="/reset-password">
          <Typography variant="caption">
            {t("Common.resetPassword?")}
          </Typography>
        </NavLink>
      </Flexbox>
    </Box>
  );
}
