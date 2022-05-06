// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("text_visible",(selector, text)=>{
    cy.get(selector).should('be.visible').should('be.enabled').type(text)
})

Cypress.Commands.add("click_button",(selector) =>{
    cy.get(selector).should('be.enabled').click()
})

Cypress.Commands.add("clear_field", (selector) =>{
    cy.get(selector).should('be.enabled').clear()
})

Cypress.Commands.add("elemen_list", (selector, name, number) =>{
    cy.get(selector).find('div').each(($elm, index) =>{
        if($elm.text().toUpperCase() == name.toUpperCase()){
            cy.get(selector).contains($elm.text()).click()
            return false
        }else if(index == number){
            cy.get(selector).find('div').eq(index).click()
            return false
        }else{
            cy.log("Not found")
        }
    })
})