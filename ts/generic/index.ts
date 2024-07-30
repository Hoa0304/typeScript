interface List<T> {
    length: number;
    [index: number]: T;
}

const list: List<number> = [1, 2, 3];

interface Student {
    id: number;
    name: string;
    age: number;
}

type StudentKeys = keyof Student; // "id" | "name" | "age"

console.log(typeof 124); // Output: 'number'
console.log(typeof "Hello, World!"); // Output: 'string'
console.log(typeof window !== 'undefined'); // Output: true (true nếu đang ở trong browser)

type MappedTypes = {
    [Key in keyof Student]: number;
}

function identity<T>(arg: T): T {
    return arg;
}
  
let output = identity<string>("myString"); // output is of type 'string'
let output2 = identity(100); // output2 is of type 'number', TypeScript can infer the type
//Generic Classes
class DataStorage<T> {
    private data: T[] = [];
  
    addItem(item: T): void {
      this.data.push(item);
    }
  
    removeItem(item: T): void {
      this.data.splice(this.data.indexOf(item), 1);
    }
  
    getItems(): T[] {
      return this.data;
    }
}
  
let stringStorage = new DataStorage<string>();
stringStorage.addItem("Data1");
stringStorage.addItem("Data2");
let stringItems = stringStorage.getItems();
  
let numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
let numberItems = numberStorage.getItems();

//Generic Constraints
interface Lengthwise {
    length: number;
}
  
function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // Now we know it has a .length property
    return arg;
}
  
loggingIdentity([1, 2, 3]); // OK
// loggingIdentity(10); // Error, number doesn't have a .length property