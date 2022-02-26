it('Testando links da landing page', () => {
	cy.visit('/');
	cy.get('a').contains('Login').click();
	cy.get('#USER_EMAIL');
	cy.get('#USER_PASSWORD');
	cy.contains('button', 'Fazer Login');
	cy.visit('/');
	cy.get('a').contains('Cadastro').click();
	cy.get('#USER_EMAIL');
	cy.get('#USER_PASSWORD');
	cy.contains('button', 'Registrar conta');
});
