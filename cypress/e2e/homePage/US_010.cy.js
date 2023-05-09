import HomePage from '../../support/pageObjectmodel/homePage';

describe('US010', () => {
  const hp = new HomePage();
  it('TC001', () => {
    cy.visit('');
    hp.sellYourProduce().click({force: true});
    cy.url()
      .should('eql', 'https://test.urbanicfarm.com/explore')
      .and('contain', 'explore');
  });
});
