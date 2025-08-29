describe('Teste de Login', () => {
    context('Login Funcionário', () => {
        it('Login - Sucesso', () => {
            cy.visit('https://uol.hmg.unifor.br/acesso/app/autenticacao/');
            cy.get('app-login > .form-section > .login-inner-form > :nth-child(1) > .form-control')
                .should('be.visible')
                .type(730543480);
            cy.get('.label-float.clearfix > .form-control')
                .should('be.visible')                
                .type(12345678);
            cy.contains('button', 'Acessar')
                .should('be.visible')
                .click();
            cy.url().should('contain', 'inicio');

        });
    });
    context('Login Aluno', () => {
        it('Login - Sucesso', () => {
            cy.visit('https://uol.hmg.unifor.br/acesso/app/autenticacao/');
            cy.get('app-login > .form-section > .login-inner-form > :nth-child(1) > .form-control')
                .should('be.visible')
                .type(2225841);
            cy.get('.label-float.clearfix > .form-control')
                .should('be.visible')                
                .type(12345678);
            cy.contains('button', 'Acessar')
                .should('be.visible')
                .click();
            cy.url().should('contain', 'inicio');
        });
    });
    context('Erros de login', () => {
        it('Erro - Senha', () => {
            cy.visit('https://uol.hmg.unifor.br/acesso/app/autenticacao/');
            cy.get('app-login > .form-section > .login-inner-form > :nth-child(1) > .form-control')
                .should('be.visible')
                .type(12345678);
            cy.get('.label-float.clearfix > .form-control')
                .should('be.visible')                
                .type(12345678);
            cy.contains('button', 'Acessar')
                .should('be.visible')
                .click();
            cy.get('message-right-container > .overlay-panel > .container-aviso > .describe_message')
                .should('be.visible')
        });

        it('Erro - Senha', () => {
            cy.visit('https://uol.hmg.unifor.br/acesso/app/autenticacao/');
            cy.get('app-login > .form-section > .login-inner-form > :nth-child(1) > .form-control')
                .should('be.visible')
                .type(730543480);
            cy.get('.label-float.clearfix > .form-control')
                .should('be.visible')                
                .type(1);
            cy.contains('button', 'Acessar')
                .should('be.visible')
                .click();
            cy.get('message-right-container > .overlay-panel > .container-aviso > .describe_message')
                .should('be.visible')
        });
    });
});