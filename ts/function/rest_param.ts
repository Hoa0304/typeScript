function showStudentInfo(name: string, ...course: string[]) : string{
    return "Tôi là : "+ name +course.join(" ,");
}

console.log(showStudentInfo("Hoa ","ts","js"))