// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let newarray = []
    newarray.push(drivers[0],drivers[1])
    return newarray
}
const returnLastTwoDrivers = function(drivers){
    let newarray = []
    newarray.push(drivers[drivers.length- 2],(drivers[drivers.length - 1]))
    return newarray
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(ride){
    return total = (fare) => {
        return ride * fare
        
    }
}

function fareDoubler(createFareMultiplier) {
    const double = createFareMultiplier * 2
    return double
}
function fareTripler(createFareMultiplier) {
    const double = createFareMultiplier * 3
    return double
}

function selectDifferentDrivers(drivers, fun){
    if(fun === returnLastTwoDrivers){
       return fun(drivers)
    }
    else if (fun === returnFirstTwoDrivers ) {
        return fun(drivers)
    }

}




