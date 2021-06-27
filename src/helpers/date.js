function displayTime(string) {
  const timeString = string.split(' ')[1];
  const hoursMinutes = timeString.slice(0, 5);
  return hoursMinutes;
}

export default displayTime;