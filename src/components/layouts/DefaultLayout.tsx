import * as React from "react";
import { AppHeader } from "../widgets/AppHeader";
import { Topbar } from "../widgets/Topbar";

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Topbar />
      <AppHeader />
      {children}
    </>
  );
};
