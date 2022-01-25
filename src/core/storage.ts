import AsyncStorage from '@react-native-async-storage/async-storage';
import {keyStorage} from './contants';

export const saveStoreData = async (
  data: unknown,
  key: string = keyStorage.USER_AUTH_STORAGE,
) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getStoreData = async (
  key: string = keyStorage.USER_AUTH_STORAGE,
) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // saving error
  }
};

export const removeStoreData = async (
  key: string = keyStorage.USER_AUTH_STORAGE,
) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};
