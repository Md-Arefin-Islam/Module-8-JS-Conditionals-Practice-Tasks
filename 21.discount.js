// Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

const totalCart = 2000;
const isMember = false;
if (totalCart>=1000 && isMember) {
    const discountPercentage = 20;
    const discountAmount = totalCart*discountPercentage/100;
    const payment = totalCart - discountAmount;
    console.log("Payment:", payment);
} else if (totalCart>=1000) {
      const discountPercentage = 10;
    const discountAmount = totalCart*discountPercentage/100;
    const payment = totalCart - discountAmount;
    console.log("Payment:", payment);
} else {
console.log("No Discount, Payment:", totalCart);
}