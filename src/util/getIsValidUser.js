import axios from "axios";
const SERVER_API_URL = "https://moneyfulpublicpolicy.co.kr";

async function getIsValidUser(accessToken) {
  try {
    const response = await axios.get(`${SERVER_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
}
export default getIsValidUser;
