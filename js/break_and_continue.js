// number skip break continue loop
do{
    var skip = prompt("Please enter a number between 1-50: ");
    console.log("Number to skip is: " + skip + "\n");
    for(var i = 1; i < 51; i += 2){
        if(skip < 1 || skip > 50 || skip % 2 === 0){
            console.log("Error, not an odd number. Please input odd number.");
            break;
        }
        if (i == skip){
        console.log("Yikes! Skipping number: " + skip);
        }
        else{
        console.log("Here is an odd number: " + i);
        }
    }
}while(skip < 1 || skip > 50 || skip % 2 === 0);
