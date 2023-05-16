/// <reference types="cypress" /> 

import HomePage from "../../support/pageObjectmodel/homePage";
import sellShareTradePage from "../../support/pageObjectmodel/sellShareTradePage"

describe('US019',()=>{
  
    const sellTrade=new HomePage();

    it('TC_001',()=>{

  cy.visit('')

   sellTrade.sellTradePageButton().scrollIntoView().click({force:true})

   sellTrade.sellTradePageButton().should('be.visible');


    })
})