export const fetchWrapper = async (url, options) => {
  var options = options || {};

  return await fetch(url, options).then(response => response.json());
};
