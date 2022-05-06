class SelectElement{

    list(opt_list, string, number){
        var element = ['#genterWrapper','#hobbiesWrapper']
        element.forEach( function(value, index) {
            if(index == opt_list){
                cy.get(value).find('div').each(($elm, index) =>{
                    if($elm.text().toUpperCase() == string.toUpperCase()){
                        cy.get(value).contains($elm.text()).click()
                        return false
                    }else if(index == number){
                        cy.get(value).find('div').eq(index).click()
                        return false
                    }else{
                        cy.log("Not found")
                    }
                })
            }
        } )
    }

    optList(opt_list,string, indexList){
        var element = ['#genterWrapper','#hobbiesWrapper']
        element.forEach( function(value, index) {
            if(index == opt_list){
                cy.elemen_list(value, string, indexList)
                return false
            }
        })
    }
}

export default SelectElement;