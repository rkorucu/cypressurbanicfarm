import HomePage from '../../support/pageObjectmodel/homePage';

describe('US003', () => {
  const hp = new HomePage();
  it('TC001', () => {
    cy.visit('');
    hp.explore().click();
    cy.url().should('eql', 'https://test.urbanicfarm.com/explore');
    cy.url().should('contain', 'explore');
  });
});
