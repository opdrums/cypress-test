describe('visit url', () => {
    
    it('open url', () => {
        cy.visit("https://demoqa.com/upload-download")
    });
    
    it('upload file', () => {
        const ruta='img.png'
        cy.get('[type="file"]').attachFile(ruta)
        cy.wait(2000)
        cy.get('#downloadButton').should('be.visible').click()
    });
    
});
