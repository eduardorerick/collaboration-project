it("Fazendo login", () => {
  cy.visit("/auth/login");
  cy.get("#USER_EMAIL").type("cypress@teste.com");
  cy.get("#USER_PASSWORD").type("123123");
  cy.contains("button", "Fazer Login").click();
  cy.contains("h1", "Bem vindo, cypress@teste.com");
});
