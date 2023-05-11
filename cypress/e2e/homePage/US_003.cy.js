/// <reference types="cypress" />

import HomePage from "../../support/pageObjectmodel/homePage"


describe('US_003',()=>{
   const hPage=new HomePage()
    it('TC001',()=>{
        cy.visit('')

    
     hPage.blog().click()
      
     hPage.blog().should("be.visible")

    })
})