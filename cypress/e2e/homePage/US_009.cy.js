/// <reference types="cypress"/>

import HomePage from "../../support/pageObjectmodel/homePage"

describe('US_009',()=>{
    const hb=new HomePage();
    it('TC_001',()=>{

  cy.visit('')

  hb.getFreshProduce().click({force: true});

  hb.getFreshProduce().should('be.visible');


    })
})