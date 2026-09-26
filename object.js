let user = {

    name : "alvee", // key : value and whole things is  a entity
    age : 25 , 
    address : "Noakhali"
};

console.log(user);

// delete any key value

delete user.address ;

console.log(user);

// add any key value 

user.address = "Dhaka" ; 
user.phone = 164 ;
console.log(user);

//modify any value 

user.address = {
        District : "Noakhali",
        SubDistrict: "Sadar", 
        PostCode : 3804
};

console.log(user);



console.log(Object.entries(user));
console.log(Object.keys(user));
