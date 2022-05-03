class Instance{
    
    visitUrl(){
        before(()=>{
            cy.visit("https://demoqa.com/automation-practice-form")
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false
            })
        })    
    }

    loginPassenger(firts_name, second_name, email, number, address){
            cy.text_visible('#firstName', firts_name)
            cy.text_visible('#lastName', second_name)
            cy.text_visible('#userNumber', number)
            cy.text_visible('#currentAddress', address).then(() => {
                cy.text_visible('#userEmail', email)
            })
            //cy.get('#firstName').should('be.visible').should('be.enabled').type(firts_name)
            //cy.get('#lastName').should('be.visible').should('be.enabled').type(second_name)
            //cy.get('#userEmail').should('be.visible').should('be.enabled').type(email)
            //cy.get('#userNumber').should('be.visible').should('be.enabled').type(number).then(() => {
            //cy.get('#currentAddress').should('be.visible').type(address)
        //})
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