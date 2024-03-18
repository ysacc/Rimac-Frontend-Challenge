import { PlansContextProps } from "./interfaces";

export const defaultContextValue: PlansContextProps = {
  getPlans: async () => undefined,
  plansData: { list: [] },
  selectedPlan: undefined,
  setSelectedPlan: () => undefined,
};
