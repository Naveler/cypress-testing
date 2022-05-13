/// <reference types="cypress"/>

describe('testing', () => {
    
    beforeEach(() => {
        cy.visit('https://myitside.com/to-do/')
    });
    
    it('creates a new task', () => {
        cy.get('#item').type('test')
        cy.get('#add').click().should('be.visible')
    });

    it('reads table', () => {
        cy.get('#todo').should('be.visible')
    });

    it('deletes the task', () => {
        cy.get('#item').type('delete it').should('be.visible')
        cy.get('#add').click()
        cy.get('li').should('be.visible')
        cy.get('.remove').click()
        cy.get('li').should('not.exist')
    })
    
})
