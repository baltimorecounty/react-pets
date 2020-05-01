export const ReturnFormattedDate = (date) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("en-US", options);
};
