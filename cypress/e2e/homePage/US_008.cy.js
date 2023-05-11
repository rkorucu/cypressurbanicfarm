import HomePage from '../../support/pageObjectmodel/homePage';

describe('US008', () => {
  const hp = new HomePage();
  it('TC001', () => {
    cy.visit('');
    hp.register().click();
    cy.url()
      .should('eql', 'https://test.urbanicfarm.com/auth/register')
      .and('contain', 'register');
  });
});
