var student = []

var addCommand;

while(addCommand != "quit")
{
    addCommand = prompt("Enter command");
    if (addCommand === "add"){
        var addName = prompt("Enter student name to add in the roaster:");
        student.push(addName);
    } else if (addCommand === "remove"){
        var removeName = prompt("Enter student name to remove from the roaster:");
        var index = student.indexOf(removeName);
        student.splice(index, 1);
    } else if (addCommand === "display"){
        alert(student);
    } else if (addCommand === "quit"){
            break;
        }
    } 

alert("Thanks for using the Web App! Please refresh the page to start over")
