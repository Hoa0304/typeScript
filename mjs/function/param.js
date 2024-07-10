function userInfo1(name, age) {
    return `Name: ${name}, Age: ${age}`;
}
function userInfo2(name = "CamHoa", age = 18) {
    return `Name: ${name}, Age: ${age}`;
}
//Tham so khuyet
function userInfo3(name, age) {
    if (age == null) {
        return `Name: ${name}`;
    }
    else {
        return `Name: ${name}, Age: ${age}`;
    }
}
console.log(userInfo1("CamHoa", 20));
console.log(userInfo2());
function totalLength(x, y) {
    return x.length + y.length;
}
console.log(totalLength("Hello", ["World", "TypeScript"]));
console.log(totalLength([1, "hmmm"], ["34"]));
