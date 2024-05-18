import {create} from 'zustand';
import {User} from '../types/user';

// example
const useUserStore = create(set => ({
  name: '',
  age: 0,
  getUserInfo: () => set((state: {userInfo: User}) => state.userInfo),
}));

export default useUserStore;
