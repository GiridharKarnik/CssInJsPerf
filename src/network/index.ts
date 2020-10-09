const postMeasurements = async (data: { [key: string]: any }) => {
  return await fetch("http://localhost:4500/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export default postMeasurements;
