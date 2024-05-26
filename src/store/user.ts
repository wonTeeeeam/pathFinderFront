import {create} from 'zustand';

// 사용자 정보 타입 정의
interface UserInfo {
  name: string;
  email: string;
}

// Zustand 스토어의 상태와 액션 타입 정의
interface UserState {
  userInfo: UserInfo;
  setUserInfo: (newUserInfo: UserInfo) => void;
  clearUserInfo: () => void;
}

// Zustand 스토어 생성
const useUserStore = create<UserState>(set => ({
  userInfo: {
    name: '',
    email: '',
  },
  setUserInfo: newUserInfo => set({userInfo: newUserInfo}),
  clearUserInfo: () => set({userInfo: {name: '', email: ''}}),
}));

export default useUserStore;
