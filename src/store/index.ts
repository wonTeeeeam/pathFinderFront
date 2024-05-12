import {create} from 'zustand';

// example
const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
  updateBears: newBears => set({bears: newBears}),
}));
