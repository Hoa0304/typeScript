console.log("Starting");
let free : boolean = false;
free = true
let num: number = 12;
console.log(num);

console.log(free);

let str: string = "Hello World";

str = `hi: ${num}, mo ${free}`;

console.log(str);

let arr: number[] = [1, 2, 3];
console.log(arr);

let arr2: Array<number> = [4, 5, 6];
console.log(arr2);

let obj: { name: string, age: number } = { name: "Hoa", age: 18 };
console.log(obj);

let tuple: [string, number, boolean] = ["Hello", 10, true];
console.log(tuple);

let fn: (a: number, b: number) => number = (x: number, y: number) => x + y;
console.log(fn(5, 3));

let unionType: string | number = "Hello";
console.log(unionType);

let voidType: void = undefined;
console.log(voidType);

let neverType: never = (() => { throw new Error("Never reached") })();
console.log("Đố anh thấy em");