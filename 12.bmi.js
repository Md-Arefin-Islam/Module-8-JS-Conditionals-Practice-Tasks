// Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).

const weight = 74;
const cm = 164;
const m = cm/100;
const height = m;
const bmi = weight / (height*height);
if (bmi>=30)
    console.log('obese, bmi is:', bmi);
else if (bmi>=25)
    console.log('overweight, bmi is:', bmi);
else if (bmi>=18.5)
    console.log('normal weight, bmi is:', bmi)
else console.log('underweight, bmi is:', bmi);