/// <reference types="Cypress"/>


describe('Testes funcionais de registro', () => {
    it('Deve realizar o registro com sucesso', () => {
        cy.visit("http://localhost:8000")
        cy.get('a').click() //registre-se aqui
        cy.get('#regFullName').type('Henrique Rodrigues')//Nome Completo
        cy.get('#regUsername').type('UC22200136')//Matrícula
        cy.get('#regEmail').type('henrique@gmail.com')//Email
        cy.get('#regPassword').type('1234')//Senha
        cy.get('#regConfirmPassword').type('1234')//Confirmação de senha
        cy.get('button').click()
    });
});
