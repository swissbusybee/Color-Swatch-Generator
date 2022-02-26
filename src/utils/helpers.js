export function getColorByBackgroundColor(backgroundColor) {
  if (!backgroundColor) {
    return "";
  }
  return parseInt(backgroundColor.replace("#", ""), 16) > 0xffffff / 2
    ? "#000"
    : "#fff";
}

export const httpGet = async (searchInput) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${searchInput}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`,
      },
    }
  );

  if (response.ok) {
    return response.json();
  } else {
    const error = response.status;
    console.log(error);
    return Promise.reject(error);
  }
};
