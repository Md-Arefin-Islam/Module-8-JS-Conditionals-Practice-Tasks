// Using age and hasID, use nested if-else to check whether someone is eligible to vote.

const age = 20; 
const hasID = false;
if (age>=18)
    if (hasID) console.log('Eligible to Vote');
    else console.log('ID required');
else console.log('You must be 18+');