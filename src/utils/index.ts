import {Alert} from 'react-native';

export const alertConfirm = ({
  title = '',
  desc = '',
  okFunc = () => {},
  cancelFunc = null,
}: {
  title?: string;
  desc?: string;
  okFunc?: (...args: any[]) => void;
  cancelFunc?: ((...args: any[]) => void) | null;
}): Promise<boolean> => {
  if (cancelFunc) {
    return new Promise(resolve => {
      Alert.alert(title, desc, [
        {
          text: '확인',
          onPress: () => {
            okFunc();
            resolve(true);
          },
        },
        {
          text: '취소',
          onPress: () => {
            cancelFunc();
            resolve(false);
          },
        },
      ]);
    });
  }
  return new Promise(resolve => {
    Alert.alert(title, desc, [
      {
        text: '확인',
        onPress: () => {
          okFunc();
          resolve(true);
        },
      },
    ]);
  });
};
