import HomePage from '../../support/pageObjectmodel/homePage';

describe('US016', () => {
  const hp = new HomePage();
  it('TC001', () => {
    cy.visit('');
    hp.footerBlog().should('be.visible').click({ force: true });
    cy.url().should('eql', 'https://urbanicfarm.com/blog/');
  });
});
