import storage from '@react-native-firebase/storage';
import DeviceInfo from 'react-native-device-info';

export const getImage = async filePath => {
  try {
    const url = await storage().ref(filePath).getDownloadURL();
    return url;
  } catch (error) {
    console.log('Error getting image:c', error);
  }
};

export const getDeviceId = () => {
  try {
    const uniqueId = DeviceInfo.getUniqueId();
    return uniqueId;
  } catch (error) {
    console.log('Error getting deviceId:c', error);
    throw error;
  }
};
