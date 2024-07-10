function userInfo01(name: string, age: number): string {
    return `Name: ${name}, Age: ${age}`;
}

let userInfo02 = function(name: string, age: number): string {
    return `Name: ${name}, Age: ${age}`;
}

let userInfo03 : (name: string, age: number)=> string = 
    function(pname,age){
        return `Name: ${pname}, Age: ${age}`;
    }
