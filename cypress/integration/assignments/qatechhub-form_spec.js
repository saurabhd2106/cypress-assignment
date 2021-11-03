it.only('QA Tech Hub Form Elements', function() {
        
    cy.visit("https://test.qatechhub.com/form-elements/");

    cy.get('#wpforms-49-field_1').type("Saurabh");

    cy.get('#wpforms-49-field_1-last').type("Dhingra");

    cy.get("#wpforms-49-field_2").type("saurabh@qatechhub.com");

    cy.get('#wpforms-49-field_4').type("9560666952");

    cy.xpath('//input[@value="Male"]').click();

    cy.get("#wpforms-49-field_5").select("Cypress");

    cy.get("#wpforms-submit-49").click();

    cy.get("#wpforms-confirmation-49").should("contain.text", "c");

  })