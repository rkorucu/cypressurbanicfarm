import HomePage from '../../support/pageObjectmodel/homePage';

describe('US024', () => {
  const hp = new HomePage();
  it('TC001', () => {
    cy.visit('');
    cy.scrollTo('bottom');
    hp.address()
      .should('be.visible')
      .and(
        'have.text',
        'UrbanicFarm Inc., 1159 Kelez Dr San Jose, California, 95120, United States'
      );
  });
});
