class HomePage {
  logo() {
    return cy.get('.Navbar_textLink__f6_Al.cursor-pointer');
  }
  getClickLoginButton() {
    return cy.get('//a[contains(text(),"Login")]');
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

  sellYourProduce() {
    return cy.get(':nth-child(2) > .section-2_shopButton__17T04');
  }

  sell() {
    return cy.get('.section-4_buttonGroup__1OCxL > :nth-child(1)');
  }

  share() {
    return cy.get('.section-4_buttonGroup__1OCxL > :nth-child(2)');
  }

  trade() {
    return cy.get('.section-4_buttonGroup__1OCxL > :nth-child(3)');
  }
}

export default HomePage;
