import Instance from '../../support/pageObject/proyectOne/login'
import SelectElement from '../../support/pageObject/proyectOne/select_element_list'

describe('run test', () => {
    
    const loginNewApp = new Instance()
    const select = new SelectElement()
   
    loginNewApp.visitUrl()

    it('open url', () => {
        loginNewApp.loginPassenger("test", "algo","test@gmail.com", "weroiuwer", "algo de direccion")
    });

    it.only('select gender option', () => {
        select.optList(0, "other", 20)
    });

    it('select hobbies option', () => {
        select.optList(1, "Sports", 4)
    }); 
    
    it('upload file', () => {
       loginNewApp.downloadFile() 
    });
});
