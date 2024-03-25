// store
import { create } from "zustand";

type State = {
  bears: string;
};

type Action = {
  increaseBear: (by: string) => void;
};

export const useStore = create<State & Action>()((set) => ({
  bears: "",
  increaseBear: (by) => set(() => ({ bears: by })),
}));
