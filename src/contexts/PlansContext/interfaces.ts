export interface SelectedPlan {
  name: string;
  price: number;
}

export type Plan = {
  name: string;
  price: number;
  description: string[];
  age: number;
};

export interface PlansData {
  list: Plan[];
}

export interface PlansContextProps {
  getPlans: () => Promise<any>;
  plansData: PlansData | undefined;
  selectedPlan: SelectedPlan | undefined;
  setSelectedPlan: React.Dispatch<
    React.SetStateAction<SelectedPlan | undefined>
  >;
}
