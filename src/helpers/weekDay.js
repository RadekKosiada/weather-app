function displayWeekDay(string) {
  let optionsForDate = { weekday: 'long' };
  
  const weekDay = new Date(string).toLocaleDateString('en-US', optionsForDate);

  return weekDay;
}

export default displayWeekDay;