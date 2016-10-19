var grade = prompt("What was your test grade?");

grade = parseInt(grade);

if (grade >= 90){
    alert("A");
} else if (grade >= 80 && grade < 90) {
    alert("B");
} else if (grade >= 70 && grade < 80) {
    alert("C");
} else if (grade >= 65 && grade < 70) {
    alert("D");
} else if (grade <= 65) {
    alert("F");
} else{
    alert("Not a Valid Grade")
}
