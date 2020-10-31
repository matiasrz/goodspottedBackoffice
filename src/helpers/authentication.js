/* global atob */
export const redirectIfNotLoggedIn = (props) => {
  const isLoggedIn = props.auth.loggedIn;
  if(!isLoggedIn)
    props.history.replace('/auth/login')

  return isLoggedIn;
}

export const redirectIfLoggedIn = (props) => {
  const isLoggedIn = props.auth.loggedIn;
  if(isLoggedIn)
    props.history.replace('/admin/prospects')

  return !isLoggedIn;
}

const nowAsUnixTime = () => {
  var date = new Date();
  return Math.round(date.getTime() / 1000);
}

const expirationFromToken = token => {
  token = token.split('.')[1];
  const tokenJSON = JSON.parse(atob(token));
  return tokenJSON.exp;
}

export const isJWTValid = token => {
  const now = nowAsUnixTime();
  const tokenExpiration = expirationFromToken(token);

  return tokenExpiration > now;
}
