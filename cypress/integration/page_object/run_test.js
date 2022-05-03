import Instance from '../../support/pageObject/proyectOne/login'
import SelectElement from '../../support/pageObject/proyectOne/select_element_list'

describe('run test', () => {
    
    const loginNewApp = new Instance()
    const select = new SelectElement()
   
    loginNewApp.visitUrl()

    it.only('open url', () => {
        loginNewApp.loginPassenger("test", "algo","test@gmail.com", "weroiuwer", "algo de direccion")
    });

    it('select gender option', () => {
        select.list(0, "other", 4)
    });

    it('select hobbies option', () => {
        select.list(1, "Sports", 4)
    });
    
    it.only('upload file', () => {
       loginNewApp.downloadFile() 
    });
});
