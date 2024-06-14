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



describe('Testes funcionais de login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("http://localhost:8000")
        cy.get('#username').type('UC22200136') //Colocando login
        cy.get('#password').type('1234')//Colocando a senha
        cy.get('button').click()
        
    });
});



describe('Teste funcional da seleção da matéria', () => {
    it('Deve realizar a seleção da matéria com sucesso', () => {
        cy.visit("http://localhost:8000/dashboard.html")
        //cy.get('#subject').click()//Selecionando a materia
        cy.get('#confirmPresence').click()//Confirmando a presença
    });
});

describe('Teste funcional confirmando matéria', () => {
    it('Deve realizar a seleção da matéria com sucesso', () => {
        cy.visit("http://localhost:8000/confirmacao.html")
        //cy.get('#subject').click()//Selecionando a materia
        cy.get('#confirmPresence').click()//Confirmando a presença
    });
});

describe('Teste funcional voltando ao dashboard', () => {
    it('Deve voltar para a seleção da matéria', () => {
        cy.visit("http://localhost:8000/dashboard.html")
        //cy.get('#subject').click()//Selecionando a materia
        cy.get('button').click()//Confirmando a presença
    });
});



/*describe('Testes não funcionais de registro', () => {
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
});*/