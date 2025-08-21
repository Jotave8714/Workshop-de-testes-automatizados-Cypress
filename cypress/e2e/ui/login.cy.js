describe('Teste de Login', () => {
    context('Login Funcionário', () => {
        it('Login - Sucesso', () => {
            cy.visit('')
            cy.get('matricula').type(951552066)
            cy.get('senha').type(12345678)
            cy.contains('button', 'Acessar')
            cy.url().should('contain','/inicio')
        });
    });
    context('Login Aluno', () => {
        it('Login - Sucesso', () => {
            cy.get('matricula').type(2413542)
            cy.get('senha').type(12345678)
            cy.contains('button', 'Acessar')
            cy.url().should('contain','/inicio')
        });
    });
});