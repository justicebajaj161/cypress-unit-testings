describe("IDs of elements inside the header section are updated correctly", () => {

    beforeEach(() => {
      cy.visit('idclass.html'); // Replace with the correct path
    });
  
    it("The id of first header is 'main-header'", () => {
      cy.get('header').first().should('have.id', 'main-header');
    });
  
    it("The id of paragraph tag inside the first header is 'about-site'", () => {
      cy.get('header').first().find('div > p').eq(1).should('have.id', 'about-site');
    });
  
    it("The id of parent element of the last image of header is 'header-image-container'", () => {
      cy.get('header').first().find('img').last().parent().should('have.id', 'header-image-container');
    });
  });
  
  describe("IDs of elements inside the main section are updated correctly", () => {
  
    beforeEach(() => {
      cy.visit('idclass.html'); // Replace with the correct path
    });
  
    it("The id of Second Header is 'blog-header'", () => {
      cy.get('header').eq(1).should('have.id', 'blog-header');
    });
  
    it("The id of article is 'blog-content'", () => {
      cy.get('article').should('have.id', 'blog-content');
    });
  
    it("The id of the div tag containing the image is 'blog-image-container'", () => {
      cy.get('article > div').should('have.id', 'blog-image-container');
    });
  });
  
  describe("Styling of the required elements done correctly", () => {
    function rgbToColorName(rgb) {
        const colorMap = {
          'rgb(47, 79, 79)': 'darkslategrey',
          'rgb(128, 128, 128)': 'grey'
          // Add other color mappings as needed
        };
      
        return colorMap[rgb] || rgb;
      }
    beforeEach(() => {
      cy.visit('idclass.html'); // Replace with the correct path
    });
  
    it("The paragraph tag inside the first header has color grey", () => {
     
      cy.get('#about-site').each(($el) => {
        const color = $el.css('color');
        expect(rgbToColorName(color)).to.equal('grey');
      });
    });
  
    it("The headings inside <article> has a class = 'h-style'", () => {
      cy.get('h4').each(($el) => {
        expect($el).to.have.class('h-style');
      });
    });

  
  
    it("The headings with the classname 'h-style' have darkslategrey color", () => {
        cy.get('h4.h-style').each(($el) => {
            const color = $el.css('color');
            expect(rgbToColorName(color)).to.equal('darkslategrey');
          });
    });
  });
  