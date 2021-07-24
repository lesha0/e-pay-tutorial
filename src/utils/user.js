import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUser = async () => {
  try {
    const value = await AsyncStorage.getItem("user");
    if (value !== null) {
      // We have data!!
      let user = JSON.parse(value);
      return user;
    } else {
      return null;
    }
  } catch (error) {
    // Error retrieving data
    console.log(error);
    return null;
  }
};

export const setUser = async (user) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    // saving error
    console.log(error);
  }
};

export const clearUser = async () => {
  try {
    await AsyncStorage.removeItem("user");
  } catch (error) {
    //  error
    console.log(error);
  }
};
