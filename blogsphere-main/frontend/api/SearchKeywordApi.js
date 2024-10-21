import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const getBlogUrl = "api/blog/search";

const SearchKeywordApi = async (data) => {
  const { keyword } = data;
  return await axios
    .post(`${serverUrl}${getBlogUrl}`, {
      keyword,
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default SearchKeywordApi;
