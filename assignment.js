/**======== Assignment 1 =========*/
function feetToMile(feet) {
    if (feet < 0) {
        return "Please enter a positive value";
    };
    var mile = feet / 5280;
    return mile.toFixed(3);
}
// var result = feetToMile();
// console.log(result);

/**======== Assignment 2 =========*/
function woodCalculator(chair, table, bed) {
    if ((chair < 0 || table < 0 || bed < 0)) {
        return "Please enter a positive value.";
    };
    var totalChair = chair * 1;
    var totalTable = table * 3;
    var totalBed = bed * 5;
    var totalElement = totalChair + totalTable + totalBed;
    return totalElement;
}
// var result = woodCalculator(5, 5, 3); // Enter three value
// console.log(result);

/**======== Assignment 3 =========*/
function brickCalculator(numberOfFloor) {
    if (numberOfFloor < 0) {
        return "Enter a positive value.";
    } else if (numberOfFloor <= 10) {
        var totalBrick = numberOfFloor * 15 * 1000;
    } else if (numberOfFloor <= 20) {
        var totalBrick = ((numberOfFloor - 10) * 12 * 1000) + (10 * 15 * 1000);
    } else if (numberOfFloor > 20) {
        var totalBrick = ((numberOfFloor - 20) * 10 * 1000) + (10 * 12 * 1000) + (10 * 15 * 1000);
    }
    return totalBrick;
}
// var result = brickCalculator();
// console.log(result);

/**======== Assignment 4 =========*/
function tinyFriend(names) {
    var tinyName = names[0];

    for (var i = 0; i < names.length; i++) {
        var actualName = names[i];
        if (actualName.length < tinyName.length) {
            tinyName = actualName;
        }
    }
    return tinyName;
}
// var result = tinyFriend(["Rubel Vai", "Sujan", "Hridoy", "Antim", "Opu", "Tuhin"]);
// console.log(result);