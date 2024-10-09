describe('Challenge page functionality', () => {
    beforeEach(() => {
        cy.visit('/challenge-1');
        cy.get('input[data-cy=first-name-input]').as('input');
        cy.get('span[data-cy=name-greeting]').as('greeting');
    });

    it('doesn\'t display any message when the text input is empty', () => {
      cy.get('@input').should('have.value', '')
      cy.get('@greeting').invoke('text').should('equal', '');
    })

    it('displays a greeting when there is something inside the input', () => {
        cy.get('@input').type('Shaun');
        cy.get('@greeting').invoke('text').should('equal', 'Hello, Shaun!');
    });
  })