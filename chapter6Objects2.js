let offer = "none";
let time = 1000;

const cafe = {
  name: "Whitesheep",
  seatingCapacity: 100,
  hasSpecialOffers: true,
  drinks: [
    "Cappucino",
    "Latte",
    "Filter Coffee",
    "Tea",
    "Hot Chocolate"
  ],
  breakfastOffer: "Free croissant with coffee.",
  lunchOffer: "Free drink with surprisingly priced sandwich.",
  noOffer: "Sorry no offer."
}

if (time < 1100){
  offer = cafe.breakfastOffer;
  console.log(offer);
} else if (time < 1500){
  offer = cafe.lunchOffer;
  console.log(offer);
} else {
  offer = cafe.noOffer;
  console.log(offer);
}