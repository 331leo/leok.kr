import axios from 'axios';

const getProfilePic = async (applicationId) => {
  return await axios(
    `https://graph.facebook.com/v11.0/202781227024247/picture?redirect=0&height=5000&width=5000`
  ).then((response) => {
    const data = response.data;
    return data.data.url;
  });
};
export default getProfilePic;
