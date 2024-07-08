// giúp chúng ta miêu tả 1 cách tường minh hơn
var STATUS;
(function (STATUS) {
    STATUS[STATUS["CREATED"] = 100] = "CREATED";
    STATUS[STATUS["PROCCESS"] = 101] = "PROCCESS";
    STATUS[STATUS["FINISH"] = 200] = "FINISH";
})(STATUS || (STATUS = {}));
;
var todoStatus = STATUS.CREATED;
console.log(todoStatus);
