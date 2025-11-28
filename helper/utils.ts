export const getExperienceYears = () => {
  const startDate = new Date(2017, 8, 1); // September 2017
  const currentDate = new Date();
  const totalMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());
  const years = totalMonths / 12;
  const fullYears = Math.floor(years);
  const decimal = years - fullYears;

  if (decimal > 0.75) {
    return `${fullYears + 1}+`;
  } else if (decimal > 0.25) {
    return `${fullYears}.5+`;
  } else {
    return `${fullYears}+`;
  }
};
