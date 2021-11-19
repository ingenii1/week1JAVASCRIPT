const coffeeShop = {
    branch: "Allerton Rd, Liverpool",
    drinks: [
        "Cortado", 2.99,
        "Flat White", 2.75,
        "Americano", 2.50,
        "Filter Coffee", 1.50,
        "Tea", 1.50,
        "Sparkling Water", 1.50,
        "Still Water", 1,
        "Apple Juice", 1,
    ],
    food: [
        "2 slices Plain Toast(with butter)",1.50,
        "Eggs on Toast", 2.50,
        "Eggs and Beans on Toast", 3.50,
        "Vegan Sausage Roll", 2.99,
        "Hummus and Bread", 3.75,
    ],
drinksOrdered(){
    (this.drinks);
    return `Your drinks order is ${this.drinks[4]}:£${this.drinks[5]} and ${this.drinks[8]}:£${this.drinks[9]`}.
    },
foodOrdered(){
    this.food;
    return Your food order is ${this.food[0]}:£${this.food[1]} and ${this.food[8]}:£${this.food[9]}.
    },
total(){
    
    return Your total order comes to £ ${this.drinks[5]+ this.drinks[9]+ this.food[1]+ this.food[9]}`
}
}
console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());
console.log(coffeeShop.total());