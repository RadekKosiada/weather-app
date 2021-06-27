function displayMonth(string) {
  let optionsForDate = { month: 'long' };
  
  const month = new Date(string).toLocaleDateString('en-US', optionsForDate);

  return month;
}

export default displayMonth;