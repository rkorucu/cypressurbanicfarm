class HomePage{
    
    
  getClickLoginButton(){
    return  cy.get('//a[contains(text(),"Login")]')
    }
}