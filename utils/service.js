import { get, post, put, destroy, patch } from "./http";
import { load, remove } from "./store";

const returnCardColorFromName = (name) => {
    switch(name){
      case 'yellow-light':
        return '#fd0';
      case 'red':
        return '#e51f13';
      case 'green':
        return '#26ab8e';
      case 'magenta':
        return '#ce0058';
      case 'cyan':
        return '#059fdb';
      default:
        return '#059fdb';
    }
  
};

const retrieveJwt = async () => {
  return await load("authToken");
};

const refreshToken = async () => {
  const credentials = await load("authPayload", true);
  const response = await login(credentials);
  return response;
};

const login = async (params) => {
  const response = await post("login", params);
  return response;
};

const silentLogout = async () => {
  await remove("account");
  await remove("authToken");
  return {};
};

const logout = async () => {
  const token = await retrieveJwt();
  const response = await patch("logout", null, {
    headers: {
      token,
    },
  });
  await remove("account");
  await remove("authToken");

  return response || { data: null };
};

const register = async (params) => {
  const response = await post("account/registration", params);
  return response;
};

const getPackages = async () => {
  const token = await retrieveJwt();
  const response = await get("pacchettivendibili?ideseespt=34", {
    headers: {
      token,
    },
  });
  return response;
};

export {
  login,
  register,
  getPackages,
  refreshToken,
  logout,
  silentLogout,
  returnCardColorFromName,
};
