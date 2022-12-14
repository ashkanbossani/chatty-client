export const host = "https://chatty-app-server.herokuapp.com";
// export const host = "http://localhost:5000";
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const avatarRoute = `${host}/api/auth/avatar`;
export const allUsersRoute = `${host}/api/auth/allusers`;
export const messagesRoute = `${host}/api/messages/addmsg`;
export const getAllMessagesRoute = `${host}/api/messages/getmsg`;