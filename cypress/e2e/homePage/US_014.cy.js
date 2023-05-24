import HomePage from '../../support/pageObjectmodel/homePage';

describe('US014', () => {
  const hp = new HomePage();

  it('TC001', () => {
    cy.visit('');

    hp.whatsNearYou().click({ force: true });
    cy.url().should('contain', 'explore');

    cy.go('back').wait(1000);

    hp.postYourGoods().click({ force: true });
    cy.url()
      .should('eql', 'https://test.urbanicfarm.com/auth/register')
      .and('contain', 'register');
  });
});
