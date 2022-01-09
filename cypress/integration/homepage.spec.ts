import { mockHeaderBannerData } from "../../testUtils/mocks/cms";

describe("Homepage", () => {
  it("should render welcome text and can switch to russian language", () => {
    // assert english page
    cy.visit("/");
    cy.findByRole("heading", { name: "Welcome!" });
    cy.findByRole("button", { name: "Hi" });

    // switch to russian
    cy.findByRole("button", { name: /change language/i }).click();
    cy.findByRole("menuitem", { name: /russian/i }).click();

    // assert russian page
    cy.url().should("include", "/ru");
    cy.findByRole("heading", { name: "Добро пожаловать!" });
    cy.findByRole("button", { name: "Привет" });

    // switch to english
    cy.findByRole("button", { name: /Изменить язык/i }).click();
    cy.findByRole("menuitem", { name: /english/i }).click();

    // assert english page
    cy.findByRole("heading", { name: "Welcome!" });
    cy.findByRole("button", { name: "Hi" });
  });

  it.only("should render homepage in both en & ru", () => {
    Object.keys(mockHeaderBannerData).forEach((lang) => {
      const headerBannerData = mockHeaderBannerData[lang];

      cy.visit(`/${lang}`);
      cy.findByTestId("homepage-hero-banner").within((el) => {
        cy.wrap(el)
          .should("have.css", "background-image")
          .should("be.a", "string");
        cy.findByRole("heading", { name: headerBannerData.heading });
        cy.findByRole("heading", { name: headerBannerData.subHeading });
        cy.findByText(headerBannerData.text);
        cy.findByRole("link", { name: headerBannerData.linkText })
          .should("have.attr", "href")
          .should("include", headerBannerData.link);
      });
    });
  });
});
