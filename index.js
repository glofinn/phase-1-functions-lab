// Code your solution in this file!
function distanceFromHqInBlocks(value) {
  if (value >= 42) {
    return value - 42;
  } else if (value <= 42) {
    return 42 - value;
  }
  //   const distance = value - 42;
  //   return distance;
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264;
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination) {
  if (start <= destination) {
    return (destination - start) * 264;
  } else if (start >= destination) {
    return (start - destination) * 264;
  }
}
distanceTravelledInFeet();

function calculatesFarePrice(start, destination) {
  const price = distanceTravelledInFeet(start, destination) - 400;
  if (distanceTravelledInFeet(start, destination) < 400) {
    console.log("hi");
    return price * 0;
  }
  if (
    distanceTravelledInFeet(start, destination) > 2000 &&
    distanceTravelledInFeet(start, destination) < 2500
  ) {
    return 25;
  } else if (distanceTravelledInFeet(start, destination) > 2500) {
    return "cannot travel that far";
  }

  return price * 0.02;
}

calculatesFarePrice();
