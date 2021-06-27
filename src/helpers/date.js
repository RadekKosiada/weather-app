function displayDate(string) {
  let optionsForDate = {month: 'long', day: 'numeric' };
  
  const date = new Date(string).toLocaleDateString('en-GB', optionsForDate);

  return date;
}

export default displayDate;