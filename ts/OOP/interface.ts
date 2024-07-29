type Person = {
    name: string;
    age: number;
};

type Employee = Person & {
    job: string;
};

interface Employees extends Person {
    job: string;
}
type men = number | string;