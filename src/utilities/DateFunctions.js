export const FormatDate = (date) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return (
    new Date(date)
      //Added this regex to handle ie11 error
      //https://stackoverflow.com/questions/21413757/tolocaledatestring-changes-in-ie11/26977768#26977768
      .toLocaleDateString("en-US", options)
      .replace(/[^ -~]/g, "")
  );
};
