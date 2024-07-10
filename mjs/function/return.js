function funcNoReturn() {
    console.log("function no return");
}
function funcReturnNumber() {
    return 10;
}
function funcReturnArr() {
    return ['a', 'b', 'c', 'd', 'e'];
}
funcNoReturn();
console.log(funcReturnNumber());
console.log(funcReturnArr());
