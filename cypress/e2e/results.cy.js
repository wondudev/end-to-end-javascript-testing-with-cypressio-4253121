describe('Max character input functionality', () => {
    it('displays the appropriate remaining characters count', () => {
        cy.visit('/example-3');

        cy.get('span[data-cy=first-name-chars-left-count]').then(function($charsLeftSpan) {
            // expect($charsLeftSpan.text()).to.equal('15');
            cy.wrap($charsLeftSpan).invoke('text').should('equal', '15');
        });

        cy.get('span[data-cy=first-name-chars-left-count]').invoke('text').as('fnCharsLeft');
        cy.get('#first-name-input').as('fnInput');

        cy.get('@fnCharsLeft').should('equal', '15');
        cy.get('@fnInput').type('Hello')
        cy.get('@fnCharsLeft').should('equal', '10');
        cy.get('@fnInput').type('Hello')
        cy.get('@fnCharsLeft').should('equal', '5');
        cy.get('@fnInput').type('Hello')
        cy.get('@fnCharsLeft').should('equal', '0');
        cy.get('@fnInput').type('Hello')
        cy.get('@fnInput').should('have.value', 'HelloHelloHello')
        cy.get('@fnCharsLeft').should('equal', '0');
    })
})