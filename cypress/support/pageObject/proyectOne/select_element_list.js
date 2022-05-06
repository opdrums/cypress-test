class SelectElement{

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