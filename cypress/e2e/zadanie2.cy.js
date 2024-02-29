describe('User can visit GoIT page', () => {
    beforeEach('go to page', () => {
        cy.visit('https://www.edu.goit.global/account/login');
    });

//Pierwszy test
    it('successfully login to the GoIT page', () => {
        cy.logInUser('user888@gmail.com', '1234567890');
        cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible");
        cy.get('button[class="next-7afvtf e1phyiqy6"]').click().wait(3000);
        cy.contains('Log out').click();
    });
});