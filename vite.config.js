import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  plugins: [tailwindcss()],
  base: "/semester-project-2/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "pages/login.html"),
        register: resolve(__dirname, "pages/register.html"),
        profile: resolve(__dirname, "pages/profile.html"),
        "edit-profile": resolve(__dirname, "pages/edit-profile.html"),
        "single-listing": resolve(__dirname, "pages/single-listing.html"),
        "create-listing": resolve(__dirname, "pages/create-listing.html"),
        "edit-listing": resolve(__dirname, "pages/edit-listing.html"),
      },
    },
  },
};
