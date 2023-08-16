describe('Margin of body tag has been updated correctly', () => {

  beforeEach(() => {
      cy.visit('csstesting.html'); // Replace with the correct path
  });

  it('<body> has a left-margin of 60px', () => {
      cy.get('body').should('have.css', 'margin-left', '60px');
  });

  it('<body> has a right-margin of 20px', () => {
      cy.get('body').should('have.css', 'margin-right', '20px');
  });
});

describe('Top margin of elements has been updated correctly', () => {

  beforeEach(() => {
      cy.visit('csstesting.html'); // Replace with the correct path
  });

  it('main-header has a top-margin of 60px', () => {
      cy.get('#main-header').should('have.css', 'margin-top', '60px');
  });

  it('header-image has a top-margin of 50px', () => {
      cy.get('#header-image').should('have.css', 'margin-top', '50px');
  });
});

describe('Bottom margin of elements has been updated correctly', () => {

  beforeEach(() => {
      cy.visit('csstesting.html'); // Replace with the correct path
  });

  it('Site-title has a bottom-margin of 0px', () => {
      cy.get('#site-title').should($el => {
          const marginBottom = $el.css('margin-bottom');
          expect(marginBottom === '0px' || marginBottom === '').to.be.true;
      });
  });
});
