// cypress/integration/form_test.spec.js

describe('Checking the working of the form', () => {

    beforeEach(() => {
      cy.visit('completingtheproject.html'); 
    });
  
    it('Checking if Form submission adds a new post to the Posts div', () => {
      // Set values for the form inputs
      cy.get('#postInput').type('New Post');

      // Stub the file upload using a Blob
      cy.get('#imageInput').then(input => {
        const blob = new Blob([""], { type: "image/png" });
        const testFile = new File([blob], "image.png");
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(testFile);
        input[0].files = dataTransfer.files;
        cy.wrap(input).trigger('change', { force: true });
      });
      
      cy.get('.submit-button').click();
  
      // Check if post is added
      cy.get('#posts .post').should('have.length', 5)
        .eq(4)
        .within(() => {
          cy.get('h3').should('have.text', 'You');
          cy.get('p').should('have.text', 'New Post');
        });
    });
});
