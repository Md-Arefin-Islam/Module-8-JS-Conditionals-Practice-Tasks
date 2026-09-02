// Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login".

const isLoggedIn = false;
const isAdmin = false;
if (isLoggedIn)
    if (isAdmin) console.log('Admin Dashboard');
    else console.log('User Dashboard');
else console.log('Please Login');






// age 18 বা তার বেশি কিনা
// যদি না হয় → "Underage"
// যদি হয় → ভিতরে check করবে:
// hasTicket এবং isVIP দুটোই true → "VIP Entry"
// hasTicket true কিন্তু isVIP false → "Regular Entry"
// hasTicket false → "Ticket Required"

// const age = 20;
// const hasTicket = true;
// const isVIP = false;

// if (age>=18)
//     if (hasTicket && isVIP) console.log("VIP Entry");
//     else if (hasTicket) console.log("Regular Entry");
//     else console.log("Ticket Requied");
// else console.log("Underage");

