import { usePlansContext } from '../contexts/PlansContext/Context';
import { useUserContext } from '../contexts/UserContext/Context';

export const useResume = () => {
  const { userData } = useUserContext();
  const { selectedPlan } = usePlansContext();

  return {
    userData,
    selectedPlan,
  };
};
