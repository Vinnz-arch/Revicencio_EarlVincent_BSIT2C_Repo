function whatShallwear(temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear t-shirt");
    }
}

whatShallwear(50);
whatShallwear(80);
whatShallwear(60);