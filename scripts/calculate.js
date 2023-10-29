let originalRoomCost = 0;
let discountAmount = 0;
let discountedRoomCost = 0;
let taxAmount = 0;
let totalCost = 0;
const TAX_RATE = 0.12;

function isPeak(checkInDate) {
    const JUNE = 5
    const AUGUST = 7
    const m = checkInDate.getMonth()
    return m >= JUNE && m <= AUGUST;
}


function getRate(roomType, checkInDate) {
    let rate = 150;
    const peak = isPeak(checkInDate)

    if (peak) {
        rate = 250;
    }
    if (roomType != "suite") {
        return rate;
    }
    if (peak) {
        rate = 350;
    }
    else {
        rate = 210
    }
    return rate;
}
function getDiscountRate(discountType){
    let discountPercent =0.0;

    if(discountType === "senior"){
        discountPercent = 0.10;
    }
    else if(discountType === "military"){
        discountPercent = 0.20;
    }
    return discountPercent;
}
function calculate(checkInDate,nights, roomType,adultsQuality, childrenQuality, discountType) {
    let baseRate = getRate(roomType,checkInDate);
    originalRoomCost = baseRate * nights;
    let discountPercent = getDiscountRate(discountType);
    discountAmount = originalRoomCost * discountAmount;
    discountedRoomCost = originalRoomCost-discountPercent;
    taxAmount = discountedRoomCost * TAX_RATE;
    totalCost = discountedRoomCost + taxAmount;

}
// calculate(new Date("2024-06-15"), 1, "queen", 1, 1, "senior")
// console.log(originalRoomCost, discountAmount, discountedRoomCost, taxAmount, totalCost)

// calculate(new Date(), 1, "suite", 1, 1, "senior")
// console.log(originalRoomCost, discountAmount, discountedRoomCost, taxAmount, totalCost)