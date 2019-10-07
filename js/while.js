// double number while loop
var first = 2;
while (first < 65537){
    console.log(first);
    first *= 2;
}

// ice cream while loop
var allCones = Math.floor(Math.random() * 50) + 50;
var buy;
console.log("Starting with " + allCones);
do{
    buy = Math.floor(Math.random() * 5) + 1;
    if(allCones < buy){
        console.log("Cannot sell you " + buy + " cones I only have " + allCones + "...")
    }
    else {
        console.log(buy + " cones sold...");
        allCones -= buy;
        console.log(allCones + " cones left.");
    }
} while(allCones > 0);
console.log("Yay! I sold them all!");
