import { useNavigate } from 'react-router-dom';
import { usePlansContext } from '../contexts/PlansContext/Context';

export const usePlanCard = () => {
  const navigate = useNavigate();
  const { setSelectedPlan } = usePlansContext();

  const handleSelectPlan = (name: string, price: number) => {
    setSelectedPlan({ name, price });
    navigate('/resume');
  };

  return {
    handleSelectPlan,
  };
};
