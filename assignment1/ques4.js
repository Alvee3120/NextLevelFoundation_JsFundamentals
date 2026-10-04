function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let mincost = 50;
  let perkmcost = 15;
  let waitingCharge = 2;
  let nightCharge = 0.2;

  let totalFare = 0;

  if (distance <= 2 && distance > 0) {
    totalFare = mincost;
  } else if (distance > 2) {
    totalFare = mincost + (distance - 2) * perkmcost;
  }

  if (isNight) {
    totalFare += nightCharge * totalFare;
  }

  if (waitingMinutes > 0) {
    totalFare += waitingMinutes * waitingCharge;
  }

  return totalFare;
}

console.log(getCngFare(1));
console.log(getCngFare(3));
console.log(getCngFare(5));
console.log(getCngFare(5, false , 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));
console.log(getCngFare(10));
