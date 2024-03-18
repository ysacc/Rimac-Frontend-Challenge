import { BASE_URL } from '../utils/constants';

export const fetchPlans = async () => {
  try {
    const response = await fetch(`${BASE_URL}/plans.json`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
