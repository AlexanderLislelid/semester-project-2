function loginSuccessToast() {
  return `<div
      id="success-toast"
      class="p-6 fixed top-2.5 left-1/2 -translate-x-1/2 border border-green-500/50 rounded-md gap-2 shadow-md bg-green-100 hidden "
    >
      <i class="fa-solid fa-circle-check text-3xl text-green-500"></i>
      <div class="text-nowrap">
        <p class="text-xl">Login Successful</p>
        <p class="text-sm">Redirecting...</p>
      </div>
    </div>`;
}

function registerSuccessToast() {
  return `<div
      id="success-toast-register"
      class="p-6 fixed top-2.5 left-1/2 -translate-x-1/2 border border-green-500/50 rounded-md gap-2 shadow-md bg-green-100 hidden "
    >
      <i class="fa-solid fa-circle-check text-3xl text-green-500"></i>
      <div class="text-nowrap">
        <p class="text-xl">Register Successful</p>
        <p class="text-sm">Redirecting to Login page</p>
      </div>
    </div>`;
}

export function showSuccessToastLogin() {
  const container = document.createElement("div");

  container.innerHTML = loginSuccessToast();
  document.body.append(container);

  const toast = document.getElementById("success-toast");
  toast.classList.remove("hidden");
  toast.classList.add("flex");
  setTimeout(() => {
    container.remove();
  }, 2000);
}

export function showSuccessToastRegister() {
  const container = document.createElement("div");

  container.innerHTML = registerSuccessToast();
  document.body.append(container);

  const toast = document.getElementById("success-toast-register");
  toast.classList.remove("hidden");
  toast.classList.add("flex");
  setTimeout(() => {
    container.remove();
  }, 2000);
}
