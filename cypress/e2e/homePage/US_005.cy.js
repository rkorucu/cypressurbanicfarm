/// <reference types="cypress" />

import HomePage from "../../support/pageObjectmodel/homePage"

describe('US005' ,()=>{

it('TC_001',()=>{
  
    const hb=new HomePage();
cy.visit('')
 
  hb.aboutUs().click();

  hb.aboutUs().should('be.visible');


})

})