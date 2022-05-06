class Instance{
    
    visitUrl(){
        before(() =>{
            cy.visit("https://demoqa.com/automation-practice-form")
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })
        })
    }

    visitUrlTwo(){
        cy.visit("https://demoqa.com/automation-practice-form")
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    }

    loginPassenger(firts_name, second_name, email, number, address){
        cy.clear_field('#firstName')
        cy.text_visible('#firstName', firts_name)
        cy.clear_field('#lastName')
        cy.text_visible('#lastName', second_name)
        cy.clear_field('#userNumber')
        cy.text_visible('#userNumber', number)
        cy.clear_field('#currentAddress')
        cy.text_visible('#currentAddress', address)
        cy.clear_field('#userEmail')
        cy.text_visible('#userEmail', email)    
    }

    downloadFile(){
        const ruta='img.png'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(2000)
        cy.click_button('#uploadPicture')
        //cy.get('#downloadButton').should('be.visible').click()
    }
}

export default Instance;