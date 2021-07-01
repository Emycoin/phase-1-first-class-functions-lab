// Code your solution in this file!
const returnFirstTwoDrivers = function(driverArr){
    return [driverArr[0], driverArr [1]];
}
const returnLastTwoDrivers = function(driverArr){
    const i = driverArr.length;
    return [driverArr[i-2], driverArr[i-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number){
    let finalFare = function(fare) {
        return fare * number;
    }
    return finalFare;
}


const fareDoubler = function(fare){
   let finalFare = createFareMultiplier(2);
//  let finalFare = createFareMutiplier(2);
//  === IS EQUAL TO (IDENTICAL)
//    let finalFare = function(fare) {
//     return fare * 2
//    } 
    // === IS EQUAL TO (IDENTICAL)
    // function finalFare(fare) {
    //     return fare*2
    // }
   let mostFinalFare = finalFare(fare);


    return mostFinalFare;
}

const fareTripler = function(fare){
    let finalFare = createFareMultiplier(3);
    finalFare(fare);
    let mostFinalFare = finalFare(fare);
    return mostFinalFare;
}
function selectDifferentDrivers(drivers, returnFunc){
    let theDriver = returnFunc(drivers);
    return theDriver;

}




