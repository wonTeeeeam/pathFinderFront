import {Platform} from 'react-native';
import {useEffect} from 'react';
// import CodePush from 'react-native-code-push';
import axios from 'axios';
import {
  getBuildNumber,
  getDeviceId,
  getDeviceName,
  getSystemName,
  getSystemVersion,
  getUniqueId,
  getVersion,
} from 'react-native-device-info';
import {
  PERMISSIONS,
  RESULTS,
  check,
  openSettings,
  request,
} from 'react-native-permissions';
import useUserStore from '../store/user';
import {getData} from '../utils/asyncStorage';
import api from '../config';
import {alertConfirm} from '../utils';

// import {v4 as uuidv4} from 'uuid';

const useInitialSetting = () => {
  const setUserInfo = useUserStore(state => state.setUserInfo);

  const initialSettings = async () => {
    if (!__DEV__) {
      await checkVersion();
    }

    setDefaultAxios();
    await checkAndRequestPermissions();
    setUserInfo(await getData('userInfo'));
    //   await setCodePushVersion();
    //   await checkStorageSize();
  };

  useEffect(() => {
    initialSettings();
  }, []);

  const deviceInfo = async () => {
    const [
      uniqueId,
      deviceId,
      deviceName,
      OSname,
      OSversion,
      buildnumber,
      appVersion,
    ] = await Promise.all([
      getUniqueId(),
      getDeviceId(),
      getDeviceName(),
      getSystemName(),
      getSystemVersion(),
      getBuildNumber(),
      getVersion(),
    ]);

    return {
      uniqueId, // 68624ffe95734341
      deviceId: `${deviceName}@${deviceId}`, // iPad11
      OSname, // Android
      OSversion, // 11
      DeviceOS: `${OSname}@${OSversion}`,
      buildnumber, // 12
      appVersion, //  1.1.2
    };
  };

  // const getVersionInfo = async () => {
  //   const {buildnumber, appVersion} = await deviceInfo();
  //   const currentPackage = await getData('currentPackage');
  //   const codepushLabel = currentPackage
  //     ? JSON.parse(currentPackage).label
  //     : 'v0';

  //   return `${codepushLabel}_${appVersion}(${buildnumber})`;
  // };

  // const setCodePushVersion = async () => {
  //   const currentPackage = await CodePush.getUpdateMetadata();

  //   let codePushVersion = 'v0_0.0.0';
  //   if (currentPackage && Object.keys(currentPackage).length > 0) {
  //     const {appVersion, label} = currentPackage;
  //     await AsyncStorage.setItem(
  //       'currentPackage',
  //       JSON.stringify({label, appVersion}),
  //     );
  //     codePushVersion = `${label}_${appVersion}`;
  //   } else {
  //     await AsyncStorage.setItem(
  //       'currentPackage',
  //       JSON.stringify({
  //         label: 'v0',
  //         appVersion: '0.0.0',
  //       }),
  //     );
  //   }
  // };

  const checkVersion = async () => {
    //   const {appVersion} = await deviceInfo();
    //   const _installedVersion = Number(appVersion.match(/\d+/g)?.join('') || 0);
    //   console.log(`This PAMS version is ${appVersion}`);
    //   const releaseVersion = await request_getAppVersion();
    //   if (!releaseVersion) {
    //     return;
    //   }
    //   const _releaseVersion = Number(releaseVersion.match(/\d+/g)?.join('') || 0);
    //   if (_installedVersion < _releaseVersion) {
    //     await alertConfirm({
    //       desc: `새로운 버전이 출시 됬습니다. 업데이트를 진행해주세요. \n현재 버전: v${appVersion} \n업데이트 버전: v${releaseVersion}`,
    //     });
    //     if (Platform.OS === 'ios') {
    //     } else {
    //       await Linking.openURL(
    //         'https://play.google.com/store/apps',
    //       );
    //       // 안넣으면 openURL 끝까지 못기다림
    //       await new Promise(resolve => setTimeout(resolve, 1500));
    //     }
    //   }
  };

  const setDefaultAxios = () => {
    axios.defaults.baseURL = api;
    axios.defaults.withCredentials = true;
  };

  const checkAndRequestPermissions = async () => {
    let isGranted = await checkNecessaryPermissions();
    if (!isGranted) {
      isGranted = await requestNecessaryPermissions();
      if (!isGranted) {
        const result = await alertConfirm({
          title: '권한이 필요합니다.',
          desc: 'QR코드 스캔과 사용자 편의를 위해 카메라, 위치정보 접근 권한을 허용해주세요.',
        });
        result ? await openSettings() : null;
        return false;
      }
    }
    return true;
  };

  const checkIOSPermissions = async () => {
    const results = [];
    results.push(await check(PERMISSIONS.IOS.CAMERA));
    results.push(await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE));
    return results;
  };

  const checkAndroidPermissions = async () => {
    const results = [];
    results.push(await check(PERMISSIONS.ANDROID.CAMERA));
    results.push(await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION));
    return results;
  };

  const checkNecessaryPermissions = async () => {
    if (Platform.OS === 'ios') {
      return isEveryGranted(await checkIOSPermissions());
    } else if (Platform.OS === 'android') {
      return isEveryGranted(await checkAndroidPermissions());
    } else {
      return false;
    }
  };

  const requestIOSPermissions = async () => {
    const results = [];
    results.push(await request(PERMISSIONS.IOS.CAMERA));
    results.push(await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE));
    return results;
  };

  const requestAndroidPermissions = async () => {
    const results = [];
    results.push(await request(PERMISSIONS.ANDROID.CAMERA));
    results.push(await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION));
    return results;
  };

  const isEveryGranted = (checkedStatuses: string[]) => {
    return checkedStatuses.every(S => {
      return S === RESULTS.GRANTED || S === RESULTS.UNAVAILABLE;
    });
  };

  const requestNecessaryPermissions = async () => {
    if (Platform.OS === 'ios') {
      return isEveryGranted(await requestIOSPermissions());
    } else if (Platform.OS === 'android') {
      return isEveryGranted(await requestAndroidPermissions());
    } else {
      return false;
    }
  };
};

export default useInitialSetting;
