function showStudentInfo(name, ...course) {
    return "Tôi là : " + name + course.join(" ,");
}
console.log(showStudentInfo("Hoa ", "ts", "js"));
