import axios from "axios";

const API_KEY = "6625596704457d4aaf9e8427";

export const apiGet = async () => {
  const { data } = await axios.get(`https://${API_KEY}.mockapi.io/contact`);
  return data;
};

export const apiPost = async (newContact) => {
  const { data } = await axios.post(
    `https://${API_KEY}.mockapi.io/contact`,
    newContact
  );
  return data;
};

export const apiDelete = async (contactId) => {
  const { data } = await axios.delete(
    `https://${API_KEY}.mockapi.io/contact/${contactId}`
  );
  return data;
};
