const getDataFromApi = async (ingredients) => {
  try {
    const appId = "404fc87f";
    const appKey = " 423f9454b64fba05f020132c21a0a736	";
    const url = `https://api.edamam.com/search?q=${ingredients}&app_id=${appId}&app_key=${appKey}`;
 
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; 
  }
 };
 
 export default getDataFromApi;
 