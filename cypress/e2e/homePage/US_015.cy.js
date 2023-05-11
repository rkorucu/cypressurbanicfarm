/// <reference types="cypress"/>

import HomePage from "../../support/pageObjectmodel/homePage"

describe('US0015',()=>{

const hb=new HomePage()
    it('TC_001',()=>{
cy.visit('')
 
hb.goFunderButton().scrollIntoView().click({force:true});
 
hb.goFunderButton().should('be.visible');
    })
})