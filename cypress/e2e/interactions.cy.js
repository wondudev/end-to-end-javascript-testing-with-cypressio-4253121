describe('basic page interactions', () => {
    beforeEach(() => {
        cy.visit('/example-4');
    });

    it('sets the header text to the item name when double clicked', () => {
        cy.get('ul[data-cy=box-1-items-list] > li').eq(2).dblclick();
        cy.get('span[data-cy=box-1-selected-name]').invoke('text').should('equal', 'Option Three');
    })
})