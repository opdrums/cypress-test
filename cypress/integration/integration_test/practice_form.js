

describe('asdasda', () => {
    beforeEach(() => {
        it('visit url', () => {
            cy.visit("https://demoqa.com/automation-practice-form")
        });
    })

            it('visit url', () => {
                cy.visit("https://demoqa.com/automation-practice-form")
            });
        
            it('field form', () => {
                cy.get('#firstName').should('be.visible').should('be.enabled').type("algo")
                cy.get('#lastName').should('be.visible').should('be.enabled').type("algo")
                cy.get('#userEmail').should('be.visible').should('be.enabled').type("algo")
                cy.get('#userNumber').should('be.visible').should('be.enabled').type("algo").then(() => {
                    cy.get('#currentAddress').should('be.visible').type("algo")
                })
            });
        
            it(' field subjects', () => {
                let number = 0
                cy.get('.subjects-auto-complete__value-container').should('be.visible').type("maths").each(($elm, index) => {
                    if(index == number){
                        cy.xpath('//*[@id="subjectsContainer"]/div[2]/div').find("div").eq(index).click({force: true})
                    }else{
                        cy.log("Not Found")
                    }
                })
            });
            
            it('click gender', () => {
                let name = "Female"
                let number = 6
        
                cy.get('#genterWrapper').find('div').each(($elm, index) =>{
                    if($elm.text().toUpperCase() == name.toUpperCase()){
                        cy.get('#genterWrapper').contains($elm.text()).click()
                    }else if(index == number){
                        cy.get('#genterWrapper').find('div').eq(index).click()
                    }else{
                        cy.log("Not found")
                    }
                })
            });
            
            it('click hobbies', () => {
                let name = "sdasportws"
                let number = 1
        
                cy.get('#hobbiesWrapper').find('div').each(($elm, index) =>{
                    if($elm.text().toUpperCase() == name.toUpperCase()){
                        cy.get('#hobbiesWrapper').contains($elm.text()).click()
                    }else if(index == number){
                        cy.get('#hobbiesWrapper').find('div').eq(index).click()
                    }else{
                        cy.log("Not found")
                    }
                })
            });
     
});

