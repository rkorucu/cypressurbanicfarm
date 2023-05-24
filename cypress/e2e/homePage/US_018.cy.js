import HomePage from '../../support/pageObjectmodel/homePage';

describe('US018', () => {
  const hp = new HomePage();
  it('TC001', () => {
    cy.visit('');
    hp.getTheApp().should('be.visible').click({ force: true });
    cy.url().should('eql', 'https://test.urbanicfarm.com/mobile');
  });
});
