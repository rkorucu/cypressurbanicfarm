/// <reference types="cypress"/>

import HomePage from "../../support/pageObjectmodel/homePage"

describe('Us017',()=>{

    const hb=new HomePage()
    it('TC_001',()=>{

   cy.visit('')
 
  hb.discoverLocalSeller().scrollIntoView().click({force:true});
  hb.discoverLocalSeller().should('be.visible')
      


    })
})