import axios from 'axios';

export const request_getAppVersion = async () => {
  try {
    const result = await axios.get('/api/app/func/appVersion');
    return result.data.appVersion as string;
  } catch (e: any) {
    console.log('checkVersion ERROR', e);
    return null;
  }
};
