import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";


export const fetchArticlesWithQuery = async searchQuery => {
    const response = await axios.get(`/search?query=${searchQuery}`);
    // console.log("response:", response.data.hits);
    return response.data.hits;
};

// export default fetchArticlesWithQuery;
