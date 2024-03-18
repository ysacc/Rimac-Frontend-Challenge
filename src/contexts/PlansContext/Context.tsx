import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { PlansContextProps, PlansData, SelectedPlan } from './interfaces';
import { defaultContextValue } from './defaultState';
import { fetchPlans } from '../../services/PlansApi';

export const PlansContext =
  createContext<PlansContextProps>(defaultContextValue);

export const PlansProvider = (props: PropsWithChildren) => {
  const [plansData, setPlansData] = useState<PlansData>();
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlan>();

  const getPlans = async () => {
    const data = await fetchPlans();
    setPlansData(data);
    return data;
  };

  const store = useMemo<PlansContextProps>(
    () => ({
      getPlans,
      plansData,
      selectedPlan,
      setSelectedPlan,
    }),
    [getPlans, plansData, selectedPlan, setSelectedPlan]
  );

  return (
    <PlansContext.Provider value={store}>
      {props.children}
    </PlansContext.Provider>
  );
};

export const usePlansContext = () => useContext(PlansContext);
