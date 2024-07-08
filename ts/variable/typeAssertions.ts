// chuyển đổi qua lại giữa các dữ liệu
let mValue: any = "    Trần Thị Cẩm Hoa   ";
//c1
let result = (<string>mValue).trim();
//c2
let total = (mValue as string).length;
console.log(result); // Trần Thị Cẩm Hoa