import { AvailableLocale } from "../../src/types";
import { mockProductsByCollection } from "../../testUtils/mocks/api/products";
describe("Homepage", () => {
  it.only("should render homepage in both en & ru", () => {
    ["en", "ru"].forEach((lang) => {
      // const headerBannerData = getMockHeroBannerData(
      //   lang as AvailableLocale,
      //   HeroBannerType.Simple
      // )?.data as SimpleHeroBannerData;
      const productsByCollection =
        mockProductsByCollection[lang as AvailableLocale];

      cy.visit(`/${lang}`);

      // assert header banner
      // cy.findByTestId("homepage-hero-banner").within((el) => {
      //   cy.wrap(el)
      //     .should("have.css", "background-image")
      //     .should("be.a", "string");
      //   cy.findByRole("heading", { name: headerBannerData.heading });
      //   cy.findByRole("heading", { name: headerBannerData.subHeading });
      //   cy.findByText(headerBannerData.text);
      //   cy.findByRole("link", { name: headerBannerData.linkText })
      //     .should("have.attr", "href")
      //     .should("include", headerBannerData.link);
      // });

      // assert product collections tabs
      cy.findByTestId("collection-products").within((el) => {
        Object.keys(productsByCollection).forEach((collection) => {
          cy.findByRole("tab", { name: collection });
        });

        cy.findByRole("tab", {
          name: Object.keys(productsByCollection)[0],
        }).should("have.attr", "aria-selected", "true");
      });
    });
  });
});
