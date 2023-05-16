/// <reference types="cypress"   /> 
import HomePage from "../../support/pageObjectmodel/homePage"

describe('US021',()=>{
    const hb=new HomePage();

    it('TC_001',()=>{

        hb.contact().scrollIntoView().click({force:true})
        hb.contact().should('be.visible');
    })
})








