import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  Camera,
  CameraDevice,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function MainStack(): React.JSX.Element {
  const device: CameraDevice = useCameraDevice('back')!;
  const {hasPermission} = useCameraPermission();

  // if (!hasPermission) return <PermissionsPage />
  // if (device == null) return <NoCameraDeviceError />

  return <Camera style={styles.container} device={device} isActive={true} />;
}
