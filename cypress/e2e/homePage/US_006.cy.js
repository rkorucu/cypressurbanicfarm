import HomePage from '../../support/pageObjectmodel/homePage';

describe('US006', () => {
  const hp = new HomePage();
  it('TC001', () => {
    cy.visit('');
    hp.contactUs().click();
    cy.url()
      .should('eql', 'https://test.urbanicfarm.com/contact-us')
      .and('contain', 'contact-us');
  });
});
