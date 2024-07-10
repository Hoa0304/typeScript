function userInfo1(name:string, age:number): string{
    return `Name: ${name}, Age: ${age}`;
}

function userInfo2(name:string= "CamHoa", age:number = 18): string{
    return `Name: ${name}, Age: ${age}`;
}

//Tham so khuyet
function userInfo3(name:string, age?:number): string{
    if(age == null){
        return `Name: ${name}`;
    }else {
        return `Name: ${name}, Age: ${age}`;
    }
    
}
console.log(userInfo1("CamHoa",20));
console.log(userInfo2());