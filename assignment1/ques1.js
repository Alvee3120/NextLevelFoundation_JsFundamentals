function describeValue (str){

    let type = typeof(str)
    if(str){
        console.log(`"${type} | truthy"`); 
    }else console.log(`"${type} | falsy"`); 
    
}

describeValue(null);