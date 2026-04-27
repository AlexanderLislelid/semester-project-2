export function saveToken(token) {
  localStorage.setItem("token", token);
}

export function loadToken() {
  return localStorage.getItem("token");
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function loadUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function removeUser() {
  localStorage.removeItem("user");
}

export function isLoggedIn() {
  if (loadUser() && loadToken()) {
    return true;
  } else {
    return false;
  }
}
