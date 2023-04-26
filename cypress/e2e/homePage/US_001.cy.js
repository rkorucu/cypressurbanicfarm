/// <reference types="Cypress" />
import HomePage from '../../support/pageObjectmodel/HomePage'

describe('My First Test Suite', ()=> 
{

it('TC001',() =>{

const homepage=new HomePage()

cy.visit(Cypress.env('url'))

cy.url().should('equal','https://test.urbanicfarm.com/')

})
})