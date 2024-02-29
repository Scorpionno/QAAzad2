describe('User can visit GoIT page', () => {
    beforeEach('go to page', () => {
        cy.visit('https://www.edu.goit.global/account/login');
    });
//TEST 2
    it('successfully login to the GoIT page', () => {
        cy.logInUser('user888@gmail.com', '1234567890');
        cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible");
        cy.get('button[class="next-7afvtf e1phyiqy6"]').click().wait(5000);
        cy.contains('Log out').click().wait(5000);
    })
 //TEST 1
    it('successfully login to the GoIT page second test', () => {
      cy.logInUser('testowyqa@qa.team', 'QA!automation-1').wait(5000);
      cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible");
      cy.get('button[class="next-7afvtf e1phyiqy6"]').click();
      cy.contains('Log out').click().wait(5000);
    })
  });