/// <reference types="cypress"/>

import HomePage from "../../support/pageObjectmodel/homePage"

describe('US0013',()=>{
    const hb= new HomePage();
    it('TC_001',()=>{

cy.visit('')
   hb.registerNowButton().scrollIntoView().click({force:true});
  
   
   hb.registerNowButton().should('be.visible');
   
        
    })
})