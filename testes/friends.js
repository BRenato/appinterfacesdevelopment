var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Gates",
        number: "912198238",
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve: {
        firstName: "Steve",
        lastName: "Jobs",
        number: "912198238",
        address: ['Ali e aculá','Cenassa','Cn','69696']
    }
};

var list = function(obj){
    for(var cenas in obj){
        console.log(cenas);
    }
}

var search = function(name){
    friends.forEach(function (cenas){
        if(cenas.firstName === name){
            console.log(cenas);
            return cenas;
        }
    });
}

search("Bill");