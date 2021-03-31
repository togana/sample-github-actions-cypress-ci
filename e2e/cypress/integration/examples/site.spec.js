/// <reference types="cypress" />

context('Site', () => {
  const baseUrl = Cypress.env('baseUrl');
  beforeEach(() => {
    cy.visit(`${baseUrl}`)
  });

  it('sholud work', () => {
    cy.get('a').should('have.text', 'Learn React')
  })
})
