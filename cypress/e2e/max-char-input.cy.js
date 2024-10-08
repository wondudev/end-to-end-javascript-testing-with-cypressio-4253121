describe('Max character input functionality', () => {
    it('displays the appropriate remaining characters count', () => {
      cy.visit('http://localhost:5173/example-2');
      cy.get('span').invoke('text').should('equal', '15');
      cy.get('input').type('Hello')
      cy.get('span').invoke('text').should('equal', '10');
      cy.get('input').type('Hello')
      cy.get('span').invoke('text').should('equal', '5');
      cy.get('input').type('Hello')
      cy.get('span').invoke('text').should('equal', '0');
      cy.get('input').type('Hello')
      cy.get('input').should('have.value', 'HelloHelloHello')
      cy.get('span').invoke('text').should('equal', '0');
    })
  })