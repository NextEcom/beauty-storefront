import { AppEvent, AppEventManager } from "@/controllers/app";
import { useCallback, useEffect, useState } from "react";
import { AppHeader } from "../widgets/AppHeader";
import { LoginAndSignUpDialog } from "../widgets/Auth/LoginAndSignUpDialog";
import { Topbar } from "../widgets/Topbar";

const appEventManager = AppEventManager.getInstance();

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const [authDialog, setAuthDialog] = useState<
    "login" | "signup" | undefined
  >();

  const openLoginDialog = useCallback(() => {
    setAuthDialog("login");
  }, []);

  const openSignUpDialog = useCallback(() => {
    setAuthDialog("signup");
  }, []);

  const closeLoginOrSignUpDialog = useCallback(() => {
    setAuthDialog(undefined);
  }, []);

  useEffect(() => {
    appEventManager.addListener(AppEvent.OpenLoginModal, openLoginDialog);
    appEventManager.addListener(AppEvent.OpenSignupModal, openSignUpDialog);

    return () => {
      appEventManager.removeListener(AppEvent.OpenLoginModal, openLoginDialog);
      appEventManager.removeListener(
        AppEvent.OpenSignupModal,
        openSignUpDialog
      );
    };
  }, [openLoginDialog, openSignUpDialog]);

  return (
    <>
      <Topbar />
      <AppHeader />
      {children}
      <LoginAndSignUpDialog
        open={Boolean(authDialog)}
        startAt={authDialog}
        onClose={closeLoginOrSignUpDialog}
      />
    </>
  );
};
