/// <reference types="Cypress"/>


describe('Testes funcionais de login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("http://localhost:8000")
        cy.get('#username').type('UC22200136') //Colocando login
        cy.get('#password').type('12345')//Colocando a senha
        cy.get('button').click()
        
    });
});