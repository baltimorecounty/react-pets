export const ConvertToFriendlyNames = (value) => {
  var newValue = "";
  switch (value) {
    case "Primary Breed":
      newValue = "Breed";
      break;
    case "Altered":
      newValue = "Spayed / Neutered";
      break;
    case "Primary Color":
      newValue = "Color";
      break;
    default:
      newValue = value;
  }
  return newValue;
};
