export const processServerResponse = (res) => {
  console.log(res);
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};
