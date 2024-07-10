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