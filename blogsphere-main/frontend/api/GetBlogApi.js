import axios from "axios";
const serverUrl = process.env.NEXT_PUBLIC_SERVER;

const getBlogUrl = "api/blog/getblogusingid";

const GetBlogApi = async (data) => {
  const { blogId, token } = data;
  return await axios
    .post(
      `${serverUrl}${getBlogUrl}`,
      {
        blogId,
      },
      {
        headers: { Authorization: "Bearer " + token },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      const message = err.response ? err.response.data.message : err.message;
      return { success: false, message: message };
    });
};
export default GetBlogApi;
