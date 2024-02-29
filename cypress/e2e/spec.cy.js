describe('Landing page', () => {
    beforeEach(() => {
        cy.viewport(1024, 700);
        cy.visit(Cypress.env('SITE_URL'))
    })
    it('renders landing page properly', () => {
      cy.contains('Vite').should('be.visible');
    })
  })