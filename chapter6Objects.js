let offer="none";
let time=1000;
const cafe={
    name:"whiteS",
    seatingCapacity:100,
    hasspecialOffer:true,
    drinks:[
        "chocolate",
        "coca-cola",
        "coffee",
        "tea",
    ],
    breakfastOffer:"free croassant with coffee",
    lunchOffer:"free drink with cheap sandwich",
    dinnerOffer:"sorry no offer",
};
if (time < 1100)
{offer = cafe.breakfastOffer;
    console.log(offer);}
    else 
    if (time < 1500)
{offer = cafe.lunchOffer;
    console.log(offer);}