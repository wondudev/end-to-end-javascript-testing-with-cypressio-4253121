describe('Max character input functionality', () => {
    it('displays the appropriate remaining characters count', () => {
      cy.visit('http://localhost:5173/example-3');
      cy.get('span[data-cy=first-name-chars-left-count]').eq(0).invoke('text').should('equal', '15');
      cy.get('#first-name-input').type('Hello')
      cy.get('span[data-cy=first-name-chars-left-count]').invoke('text').should('equal', '10');
      cy.get('#first-name-input').type('Hello')
      cy.get('span[data-cy=first-name-chars-left-count]').invoke('text').should('equal', '5');
      cy.get('#first-name-input').type('Hello')
      cy.get('span[data-cy=first-name-chars-left-count]').invoke('text').should('equal', '0');
      cy.get('#first-name-input').type('Hello')
      cy.get('#first-name-input').should('have.value', 'HelloHelloHello')
      cy.get('span[data-cy=first-name-chars-left-count]').invoke('text').should('equal', '0');
    })
  })