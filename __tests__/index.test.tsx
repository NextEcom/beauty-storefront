import { render, screen } from "@testing-library/react";
import Index from "@/pages/index";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import TestAppProvider from "testUtils/TestAppProvider";

describe("Home", () => {
  it("renders components", () => {
    const { container } = render(
      <TestAppProvider>
        <DefaultLayout>
          <Index
            heroBanner={{
              heading: "Heading",
              subHeading: "Sub Heading",
              text: "Text",
              link: "https://example.com",
              linkText: "Link Text",
              backgroundImage: "https://example.com/image.jpg",
            }}
          />
        </DefaultLayout>
      </TestAppProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
