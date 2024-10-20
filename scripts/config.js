//urls
// config.js
export const LOGIN_URL = "https://wom-chatgame.azurewebsites.net/user/login";
export const SELECT_URL = "https://wom-chatgame.azurewebsites.net/user/user/select";
export const UPDATE_COLOR = "https://wom-chatgame.azurewebsites.net/user/updateColor"
export const REGISTER_URL = `https://wom-chatgame.azurewebsites.net/user/register`;
export const ROOM_URL = `/room`;
export const APPNAME = `Pixels`;
export const SOCKET_URL = `wss://wom-websocket.azurewebsites.net/?token=`

//Getters
export function getUsername() {
  return localStorage.getItem("username") || "guest";
}

export function getHex() {
  return localStorage.getItem('hex') ? `${localStorage.getItem('hex')}` : "#0000ff";
}

export function getWindow() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}
