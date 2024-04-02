var employee = {
    ename: "John Smith",
    job: "Programmer",
    age: 31,
    nameLength :  function() {
        console.log(this.ename.length)
    },
    report: function() {
        console.log("Name is: "+this.ename+", Job is: "+this.job+", Age is: "+this.age)
    },
    lastName: function() {
        console.log(this.name.split(" ")[1]);
    }
}

employee.nameLength()
employee.report()
employee.lastName()