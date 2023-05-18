/// <reference types="cypress" />

import HomePage from "../../support/pageObjectmodel/homePage"

describe('US023',()=>{
    const hb=new HomePage()


    it('TC001',()=>{
 
        cy.visit('')
        hb.termsService().scrollIntoView().click()
        hb.termsService().should('be.visible')

    })
})