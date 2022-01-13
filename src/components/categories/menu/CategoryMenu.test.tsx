import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getMockCategoriesData } from "testUtils/mocks/api";
import TestAppProvider from "testUtils/TestAppProvider";
import { CategoryMenu } from "./CategoryMenu";

describe("Displays root level category items", () => {
  it("should render all the category items", async () => {
    for (let locale of ["en", "ru"]) {
      const items = getMockCategoriesData(locale as any);
      const { unmount } = render(
        <TestAppProvider locale={locale as any}>
          <CategoryMenu items={items} />
        </TestAppProvider>
      );

      const categoryItems = await screen.findAllByRole("menuitem");
      expect(categoryItems).toHaveLength(items.length);

      for (const catIndex in categoryItems) {
        const itemElement = categoryItems[catIndex];
        const item = items[catIndex];

        expect(itemElement).toHaveTextContent(item.title);
        expect(itemElement).toHaveAttribute("href", item.href);

        if (item.subMenu?.length) {
          const itemContainer = screen.getByTestId(
            `item-container-${item.href}`
          );
          expect(itemContainer).toHaveAttribute("aria-haspopup", "true");
          expect(
            await screen.findByTestId(`submenu-of-${item.href}`)
          ).not.toBeVisible();
          userEvent.hover(itemContainer);
          expect(
            await screen.findByTestId(`submenu-of-${item.href}`)
          ).toBeVisible();
        }
      }

      unmount();
    }
  });
});
