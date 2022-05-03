describe(' field form', () => {
    
    it('url', () => {
        cy.visit("https://demoqa.com/text-box")
    });

    it('field form', () => {
        cy.get('#userName').should('be.visible').should('be.enabled').type("algo")
        cy.get('#userEmail').should('be.visible').should('be.enabled').type("asdasd")
        cy.get('#currentAddress').should('be.visible').should('be.enabled').type("ASDssssss")
        cy.get('#permanentAddress').should('be.visible').should('be.enabled').type("ahkujs h")
    });
    
    it('click button', () => {
        cy.get("#submit").should("have.text", "Submit").click()
    });
    
});
