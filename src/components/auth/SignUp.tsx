import { SignUpFormController, SignUpFormInput } from "@/types";
import {
  AlertColor,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useTranslations } from "next-intl";
import { ChangeEventHandler, useEffect, useState } from "react";
import SnackbarAlert from "../snackbar-alert";

function validateFormInputs(inputs: SignUpFormInput): {
  isValid: boolean;
  errors: string[];
} {
  const { firstName, lastName, phoneNumber, password } = inputs;

  const errors: string[] = [];

  if (!firstName) {
    errors.push("First name is required");
  }

  if (!lastName) {
    errors.push("Last name is required");
  }

  if (!phoneNumber) {
    errors.push("Phone number is required");
  }

  if (!password) {
    errors.push("Password is required");
  }

  return { isValid: !errors.length, errors };
}

type EnterOTPDialogProps = {
  isOpen?: boolean;
  isValidOTPInput?: (otp: string) => boolean;
  onVerify?: (otp: string) => void;
  onChangeNumber?: () => void;
};
export function EnterOTPDialog({
  isOpen = false,
  onChangeNumber = () => null,
  isValidOTPInput = (otp) => !!otp,
  onVerify = () => null,
}: EnterOTPDialogProps) {
  const [otp, setOTP] = useState("");
  const t = useTranslations("SignUp");

  useEffect(() => {
    if (isOpen) {
      setOTP("");
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen}>
      <DialogTitle>{t("verifyOTP")}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="enterOTP"
          label={t("enterOTP")}
          type="tel"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          required
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setOTP("");
            onChangeNumber();
          }}
        >
          {t("changeNumber")}
        </Button>
        <Button disabled={!isValidOTPInput(otp)} onClick={() => onVerify(otp)}>
          {t("verifyOTP")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

type SignUpProps = {
  handler?: SignUpFormController;
};

export function SignUp({
  handler = {
    signUp: async () => ({ status: "success", data: {} as any }),
    verifyOTP: async () => ({ status: "success", data: true }),
  },
}: SignUpProps) {
  const [formInputs, setFormInput] = useState<SignUpFormInput>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
  });
  const [signUpErrorResult, setSignUpErrorResult] = useState<{
    errorMessage: string;
    fieldErrors: Partial<SignUpFormInput>;
  } | null>(null);

  const [showOTPDialog, setShowOTPDialog] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    type: AlertColor;
    message: string;
  } | null>(null);
  const t = useTranslations("SignUp");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormInput({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  const { isValid } = validateFormInputs(formInputs);

  const handleSignUp = async () => {
    const signUpresult = await handler.signUp(formInputs);
    if (signUpresult.status === "error") {
      setSignUpErrorResult(signUpresult.error);
      setSnackbar({
        type: "error",
        message: signUpresult.error.errorMessage,
      });
    } else {
      setSignUpErrorResult(null);
      setSnackbar(null);
      setShowOTPDialog(true);
    }
  };

  const handleVerifyOTP = async (otp: string) => {
    const otpResult = await handler.verifyOTP(otp);
    if (otpResult.status == "error") {
      // show error message
    } else {
      setShowOTPDialog(false);
      setSnackbar({ type: "success", message: t("phoneVerified") });
    }
  };

  return (
    <Box>
      {Object.keys(formInputs).map((input) => {
        const inputKey = input as keyof SignUpFormInput;
        return (
          <TextField
            key={inputKey}
            name={inputKey}
            label={t(inputKey)}
            type={
              inputKey === "password"
                ? "password"
                : inputKey == "phoneNumber"
                ? "tel"
                : "text"
            }
            value={formInputs[inputKey]}
            onChange={handleInputChange}
            required
            error={Boolean(
              signUpErrorResult && signUpErrorResult.fieldErrors[inputKey]
            )}
            helperText={
              signUpErrorResult && signUpErrorResult.fieldErrors[inputKey]
            }
          />
        );
      })}

      <Button
        variant="contained"
        color="primary"
        disabled={!isValid}
        onClick={handleSignUp}
      >
        {t("createAccount")}
      </Button>
      <EnterOTPDialog
        isOpen={showOTPDialog}
        onVerify={handleVerifyOTP}
        onChangeNumber={() => setShowOTPDialog(false)}
      />
      {snackbar && (
        <SnackbarAlert
          open={Boolean(snackbar)}
          severity={snackbar.type}
          handleClose={() => setSnackbar(null)}
        >
          {snackbar.message}
        </SnackbarAlert>
      )}
    </Box>
  );
}
