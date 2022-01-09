import { render, screen } from "@testing-library/react";
import Index from "@/pages/index";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import TestAppProvider from "testUtils/TestAppProvider";

describe("Home", () => {
  it("renders components", () => {
    render(
      <TestAppProvider>
        <DefaultLayout>
          <Index />
        </DefaultLayout>
      </TestAppProvider>
    );

    const heading = screen.getByRole("heading", {
      name: /welcome!/i,
    });

    const button = screen.getByRole("button", {
      name: /hi/i,
    });

    const changeLnBtn = screen.getByRole("button", {
      name: /change language/i,
    });

    expect(changeLnBtn).toBeInTheDocument();

    expect(heading).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
