/// <reference types="Cypress" />
import HomePage from '../../support/pageObjectmodel/HomePage'

describe('My First Test Suite', ()=> 
{

it('My FirstTest case',() =>{

const homepage=new HomePage()

cy.visit(Cypress.env('url'))

homepage.getClickLoginButton().click()



})
})