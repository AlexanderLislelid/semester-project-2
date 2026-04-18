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
