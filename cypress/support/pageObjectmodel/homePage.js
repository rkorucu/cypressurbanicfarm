
class HomePage {
  logo() {
    return cy.get('.Navbar_textLink__f6_Al.cursor-pointer');
  }
  getClickLoginButton(){
    return  cy.get('//a[contains(text(),"Login")]')
    }
  supportLocalFood() {
    return cy.get('.text-white');
  }

  blog() {
    return cy.get(
      '.Navbar_linkContainer__2jWIM > [href="https://urbanicfarm.com/blog/"]'
    );
  }

  explore() {
    return cy.get('.Navbar_linkContainer__2jWIM > [href="/explore"]');
  }

  about() {
    return cy.get('.Navbar_linkContainer__2jWIM > [href="/about"]');
  }

  contactUs() {
    return cy.get('.Navbar_linkContainer__2jWIM > [href="/contact-us"]');
  }

  login() {
    return cy.get('.Navbar_linkContainer__2jWIM > [href="/auth/login"]');
  }

  register() {
    return cy.get('.mr-2');
  }

  aboutUs(){
   return  cy.get(':nth-child(3) > .Footer_listCon__29kxp > :nth-child(1) > a');
  }
  getFreshProduce(){
    return cy.get(':nth-child(1) > .section-2_shopButton__17T04');
  }
  bakwardRegistButton(){
    return cy.get('.Section11_shopButton__WbZY9');
  }
  registerNowButton(){
    return cy.get('.section-5_btn__2qFR0 > button')
  }
  goFunderButton(){
    return cy.get('button[class="section-9_gofunderButton__32gaj"]');
  }

}
export default HomePage;

