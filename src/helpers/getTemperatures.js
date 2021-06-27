import displayTemp from "./temp";

function getTemperatures(id, array) {

  const selectedDate = array[id].dt_txt.split(" ")[0];

  let allDaysTemperatures = [];

  array.forEach((entry) => {
    //pushes only temperatures for the selected day
    if (entry.dt_txt.split(" ")[0] === selectedDate) {
      allDaysTemperatures.push(entry.main.temp);
    }
  });

  allDaysTemperatures.sort(function (a, b) {
    return a - b;
  });

  const lowestTemp = displayTemp(allDaysTemperatures[0]);
  const highestTemp = displayTemp(
    allDaysTemperatures[allDaysTemperatures.length - 1]
  );

  return [lowestTemp, highestTemp];
}

export default getTemperatures;
