import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestAppProvider from "testUtils/TestAppProvider";
import { CategoryMenu } from "./CategoryMenu";

describe("Displays root level category items", () => {
  it("should render all the category items", async () => {
    render(
      <TestAppProvider>
        <CategoryMenu
          items={[
            {
              title: "Category 1",
              href: "/category-1",
            },
            {
              title: "Category 2",
              href: "/category-2",
            },
            {
              title: "Category 3",
              href: "/category-3",
              subMenu: [
                {
                  title: "Category 3.1",
                  href: "/category-3.1",
                },
              ],
            },
          ]}
        />
      </TestAppProvider>
    );

    const categoryItems = screen.getAllByRole("menuitem");
    expect(categoryItems).toHaveLength(3);
    expect(categoryItems[0]).toHaveTextContent("Category 1");
    expect(categoryItems[0]).toHaveAttribute("href", "/category-1");

    expect(categoryItems[1]).toHaveTextContent("Category 2");

    expect(categoryItems[2]).toHaveTextContent("Category 3");
    within(categoryItems[2]).getByLabelText("Expand Category 3");

    const category3Wrapper = screen.getByTestId("Category 3");
    expect(category3Wrapper).toHaveAttribute("aria-haspopup", "true");

    expect(await screen.findByTestId("category-sub-menu")).not.toBeVisible();
    await userEvent.hover(category3Wrapper);

    expect(await screen.findByTestId("category-sub-menu")).toBeVisible();
  });
});
