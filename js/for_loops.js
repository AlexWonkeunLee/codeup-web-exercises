// multiplication table for loop
var multi = 7;
for(var i = 1; i < 11; i++){
    console.log(multi + " x " + i + " = " + (multi * i));
}

//even odd checker for loop
var check;
for(var j = 0; j < 10; j++){
    check = Math.floor(Math.random() * 180) + 20;
    if(check % 2 == 0){
        console.log(check + " is even");
    }
    else{
        console.log(check + " is odd");
    }
}

// repeated number for loop
var repeat;
for(var k = 1; k < 10; k++){
    repeat = "";
    for(var l = 0; l < k; l++){
        repeat += k;
    }
    console.log(repeat);
}

// subtracting for loop
for(var m = 100; m > 0; m -= 5){
    console.log(m);
}
