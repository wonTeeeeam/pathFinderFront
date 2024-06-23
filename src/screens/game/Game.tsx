import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Camera,
  CameraDevice,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import PermissionPage from '../permission/Permission';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function MainStack(props): React.JSX.Element {
  const device: CameraDevice = useCameraDevice('back')!;
  const {hasPermission} = useCameraPermission();
  // if (device === null || !hasPermission) {
  //   return <PermissionPage />;
  // }

  return <Camera style={styles.container} device={device} isActive={true} />;
}
