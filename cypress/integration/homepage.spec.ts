describe("Homepage", () => {
  it("should have welcome message", () => {
    cy.visit("/");
    cy.findByText("Welcome!");
  });
});
