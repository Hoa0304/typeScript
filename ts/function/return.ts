function funcNoReturn(): void {
    console.log("function no return");
}

function funcReturnNumber(): number {
    return 10;
}

function funcReturnArr(): string[] {
    return ['a', 'b', 'c', 'd', 'e'];
}

funcNoReturn();
console.log(funcReturnNumber());
console.log(funcReturnArr());

function fnn(x: string | number) {
    if ( typeof x === "string") {
        //so something
    } else if (typeof x === "number") {
        //do something else
    } else {
        x; // has type 'never'
    }
}

function fail(msg: string): never {
    throw new Error(msg);
}

fail("Something failed"); // This line will never execute, because 'fail' always throws an error