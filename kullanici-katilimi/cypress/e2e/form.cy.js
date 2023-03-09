describe("User Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("form doğru şekilde görüntüleniyor mu ?", () => {
    cy.get(".form-wrapper").should("exist");
    cy.get(".form-label").should("have.length", 3);
    cy.get(".form-input").should("have.length", 1);
    cy.get("#terms").should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("form doldurulup submit ediyor mu ?", () => {
    cy.get("#name").type("Test User");
    cy.get("#email").type("testuser@test.com");
    cy.get("#password").type("testpassword");
    cy.get("#terms").check();
    cy.get('button[type="submit"]').click();
  });

  it("form alanlarının doğrulanması", () => {
    cy.get(".form-input:invalid").should("have.length",0);
    cy.get("#name").type("fatih erik");
    cy.get("#email").type("fatih@erik.com");
    cy.get("#password").type("123456");
    cy.get("#terms").check();
    cy.get('button[type="submit"]').click();
    cy.get(".form-input:invalid").should("have.length", 0);
    cy.get("#email")
      .siblings(".form-feedback")
      .should("have.text", "Geçerli bir e-posta adresi giriniz");
  });
});
