import HomePage from '../../support/pageObjectmodel/homePage';

describe('US012', () => {
  const hp = new HomePage();

  it('TC001', () => {
    cy.visit('');

    const arr = [hp.sell(), hp.share(), hp.trade()];

    arr.forEach((value, index, $list) => {
      value.should('be.visible');
      value.click({ force: true });
      cy.url()
        .should('eql', 'https://test.urbanicfarm.com/auth/register')
        .and('contain', 'register');
      cy.go('back').wait(1000);
    });
  });
});
