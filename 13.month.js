// Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).

const month = 8;
if (month == 12 && month>8)
    console.log('this month is winter');
else if (month>4)
    console.log('this month is monsoon');
else console.log('this month is summer');