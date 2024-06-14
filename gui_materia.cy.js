/// <reference types="Cypress"/>



describe('Teste funcional da seleção da matéria', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("http://localhost:8000")
        cy.get('#subject') //Colocando login
        cy.get('#confirmPresence')//Colocando a senha
        cy.get('button').click()//clicando no botão "entrar"
    });
});