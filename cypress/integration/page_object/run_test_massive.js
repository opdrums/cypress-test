
import Instance from '../../support/pageObject/proyectOne/login'

describe('massive_test', () => {
    const loginNewApp = new Instance()

    it('test', () => {
        cy.fixture("example").then(elmData => {
            elmData.forEach(data =>{
                loginNewApp.visitUrlTwo()
                const firts_name = data.strinFirtsName
                const second_name= data.strinSeconName
                const phone_user = data.strinPhone
                const address_ad = data.strinAddress
                const user_email = data.strinEmail                    
                loginNewApp.loginPassenger(firts_name, second_name,phone_user, address_ad, user_email)
            })
        })
    });
});
