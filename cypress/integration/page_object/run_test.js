import Instance from '../../support/pageObject/proyectOne/login'
import SelectElement from '../../support/pageObject/proyectOne/select_element_list'

describe('run test', () => {
    
    const loginNewApp = new Instance()
    const select = new SelectElement()
   
    loginNewApp.visitUrl()

    it('login  user', () => {
        loginNewApp.loginPassenger( "algo","algo","test@gmail.com", "weroiuwer", "algo de direccion")
    });
  
    it.only('select gender option', () => {
        select.optList(0, "others", 3)
    });

    it('select hobbies option', () => {
        select.optList(1, "Sports", 4)
    }); 
    
    it('upload file', () => {
       loginNewApp.downloadFile() 
    });
});
