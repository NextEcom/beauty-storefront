import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useTranslations } from "next-intl";
import { ChangeEventHandler, useState } from "react";

type FormInputs = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
};

function validateFormInputs(inputs: FormInputs): {
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
};
export function EnterOTPDialog({
  isOpen = false,
  isValidOTPInput = (otp) => !!otp,
  onVerify = () => null,
}: EnterOTPDialogProps) {
  const [otp, setOTP] = useState("");
  const t = useTranslations("SignUp");

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
        <Button disabled={!isValidOTPInput(otp)} onClick={() => onVerify(otp)}>
          {t("verifyOTP")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

type SignUpProps = {
  onSignUp?: (inputs: FormInputs) => Promise<void>;
  onVerifyOTP?: (otp: string) => Promise<boolean>;
};
export function SignUp({
  onSignUp = async () => null,
  onVerifyOTP = async () => true,
}: SignUpProps) {
  const [formInputs, setFormInput] = useState<FormInputs>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
  });
  const [showOTPDialog, setShowOTPDialog] = useState(false);
  const t = useTranslations("SignUp");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormInput({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };

  const { isValid } = validateFormInputs(formInputs);

  const handleVerifyOTP = async (otp: string) => {
    const isValidOTP = await onVerifyOTP(otp);
    if (isValidOTP) {
      await onSignUp(formInputs);
      setShowOTPDialog(false);
    }
  };

  return (
    <Box>
      <TextField
        required
        name="firstName"
        label={t("firstName")}
        value={formInputs.firstName}
        onChange={handleInputChange}
      />
      <TextField
        required
        name="lastName"
        label={t("lastName")}
        value={formInputs.lastName}
        onChange={handleInputChange}
      />
      <TextField
        name="phoneNumber"
        required
        label={t("phoneNumber")}
        type={"tel"}
        value={formInputs.phoneNumber}
        onChange={handleInputChange}
      />
      <TextField
        name="password"
        required
        label={t("password")}
        type="password"
        value={formInputs.password}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={!isValid}
        onClick={() => {
          setShowOTPDialog(true);
        }}
      >
        {t("createAccount")}
      </Button>
      <EnterOTPDialog isOpen={showOTPDialog} onVerify={handleVerifyOTP} />
    </Box>
  );
}
