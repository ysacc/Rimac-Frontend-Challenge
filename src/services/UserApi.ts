import { BASE_URL } from '../utils/constants';

export const fetchUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/user.json`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
