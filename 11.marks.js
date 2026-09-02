// Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.

const marks = 5;
if (marks == 100 && marks >=80)
    console.log('A+');
else if (marks >= 70)
    console.log('A');
else if (marks >= 60)
    console.log('B');
else if (marks >= 40)
    console.log('C');
else console.log('F');