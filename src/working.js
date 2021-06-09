import axios from 'axios';

const working = async (url) => {
  try {
    const result = await axios.get(url);
    return result.status;
  } catch (error) {
    return error;
  }
};

export default working;
