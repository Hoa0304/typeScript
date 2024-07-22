class Product {
  id: number;
  name: string;
  state: string;

  constructor(id: number, name: string, state: string) {
    this.id = id;
    this.name = name;
    this.state = state;
  }
}

let productObj1 = new Product(1,"Product 1","active");
console.log(productObj1); 