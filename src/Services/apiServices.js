export const getAAPI = async (endpoint) => {
  try {
    const url = new URL(`https://dnc-react-api.vercel.app/files/${endpoint}`);
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Catch Eror: ", e);
  }
};
