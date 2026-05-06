const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");

/**
 * Redirects the user to a given path after a delay.
 * @param {number} time - Delay in milliseconds before redirect.
 * @param {string} path - Path to redirect to. example: pages/profile.html.
 */
export function redirectTimer(time, path) {
  setTimeout(() => {
    window.location.href = `${BASE_PATH}/${path}`;
  }, time);
}
