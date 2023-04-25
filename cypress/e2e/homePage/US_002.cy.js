/// <reference types="cypress" />

import HomePage from '../../support/pageObjectmodel/homePage';

describe('US002', () => {
  const hp = new HomePage();

  it('TC001', () => {
    cy.visit('');

    hp.logo().should('be.visible');

    hp.supportLocalFood().should('be.visible');

    hp.blog().should('be.visible');

    hp.explore().should('be.visible');

    hp.about().should('be.visible');

    hp.contactUs().should('be.visible');

    hp.login().should('be.visible');

    hp.register().should('be.visible');
  });

  it('TC001 -> array', () => {
    cy.visit('');

    const arr = [
      hp.logo(),
      hp.supportLocalFood(),
      hp.blog(),
      hp.explore(),
      hp.about(),
      hp.contactUs(),
      hp.login(),
      hp.register(),
    ];

    arr.forEach((value, index, $list) => {
      value.should('be.visible');
    });
  });
});
