import { Dialog, DialogProps, styled, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LoginForm } from "./LoginForm";
import { SignUpForm } from "./SignUpForm";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const StyledForm = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: "3rem 5rem",
  width: 385,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    padding: "1.5rem 2.5rem",
  },
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <StyledForm>{children}</StyledForm>}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function LoginAndSignUpDialog({
  open,
  signUpFormProps,
  loginFormProps,
  startAt,
  ...props
}: {
  signUpFormProps?: any;
  loginFormProps?: any;
  startAt?: "login" | "signup";
} & DialogProps) {
  const t = useTranslations("Common");
  const [value, setValue] = useState(startAt == "signup" ? 1 : 0);

  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (startAt) setValue(startAt == "signup" ? 1 : 0);
  }, [startAt]);

  return (
    <Dialog open={open} {...props}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="login and signup tabs"
      >
        <Tab label={t("signIn")} {...a11yProps(0)} />
        <Tab label={t("signUp")} {...a11yProps(1)} />
      </Tabs>
      {[LoginForm, SignUpForm].map((Form, index) => (
        <TabPanel key={index} value={value} index={index}>
          <Form {...(index === 0 ? loginFormProps : signUpFormProps)} />
        </TabPanel>
      ))}
    </Dialog>
  );
}
