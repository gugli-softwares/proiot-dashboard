describe('Dashboard', () => {
  it('should load the dashboard page', () => {
    cy.visit('/')
    cy.get('h1').contains('Dashboard')
  })
})
