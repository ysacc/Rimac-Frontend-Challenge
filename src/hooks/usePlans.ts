import { useState } from 'react';
import { useUserContext } from '../contexts/UserContext/Context';
import { usePlansContext } from '../contexts/PlansContext/Context';
import { getAge } from '../utils/getAge';
import { Plan } from '../contexts/PlansContext/interfaces';

export const usePlans = () => {
  const { userData } = useUserContext();
  const { plansData } = usePlansContext();

  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [plansToShow, setPlansToShow] = useState<Plan[] | []>([]);

  const handleSelectedPerson = (person: string) => {
    setSelectedPerson(person);

    if (userData?.birthDay && plansData) {
      const age = getAge(userData.birthDay);
      const filteredPlans = plansData.list.filter(plan => plan.age < age);

      if (person === 'me') {
        setPlansToShow(filteredPlans);
      }

      if (person === 'someone-else') {
        const discountedPlans = filteredPlans.map(plan => ({
          ...plan,
          price: plan.price * 0.95,
        }));

        setPlansToShow(discountedPlans);
      }
    }
  };
  return { selectedPerson, handleSelectedPerson, plansToShow };
};
