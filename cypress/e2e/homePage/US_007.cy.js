///<reference types="cypress"/> 

import HomePage from "../../support/pageObjectmodel/homePage"

describe('US-007',()=>{

it('TC_001',()=>{
 

    const hb=new HomePage()
    cy.visit('')
    hb.login().click()
    hb.login().should('be.visible')





})

})