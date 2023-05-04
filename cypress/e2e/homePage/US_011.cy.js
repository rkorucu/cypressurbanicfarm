/// <reference types="cypress"/>

import HomePage from "../../support/pageObjectmodel/homePage"

describe('US_011',()=>{
const hb=new HomePage();
    it('TC_001',()=>{

    cy.visit('')
 
    hb.bakwardRegistButton().scrollIntoView().click({force :true})

      hb.bakwardRegistButton().should('be.visible')
    })
}) 