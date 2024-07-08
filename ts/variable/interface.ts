// Object

let object: any = { name: "Hoa", age: 18 };

console.log(object);

interface ObjectInterface {
    name: string;
    age: number;
    address?: string;
}

let objectInterface: ObjectInterface = { name: "Hoa", age: 20 };

objectInterface.address = "Hà Nội";
console.log(objectInterface);
//array

let mArray: number[] = [1, 2, 3];

console.log(mArray);

interface ArrayInterface {
    [index: number]: string;
}

let arrayInterface: ArrayInterface = ["Hello", "World", "TypeScript"];

console.log(arrayInterface);