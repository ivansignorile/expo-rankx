import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const save = async (key:string,value:string) => {
  try {
    const isAstring = typeof value === 'string';
    return await AsyncStorage.setItem(key, isAstring? value : JSON.stringify(value));
  } catch (e) {
    console.log("error saving", e)
    // saving error
  }
};

export const load = async (key:string, parse?:boolean) => {
  try {
    const value = await AsyncStorage.getItem(key);
    
    if (value !== null) {
      return parse? JSON.parse(value) : value;
    }
  } catch (e) {
    // error reading value
  }
}

export const remove = async (key:string) => {
  try {
    return await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log("error removing", e)
    // saving error
  }
}

export const cleanHTML = (str:string) => {
  if (str) {
    return str.replace(/<[^>]+>/g, '');
  }
  return str;
}  

export default store;
