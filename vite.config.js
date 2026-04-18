import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "login.html"),
        register: resolve(__dirname, "register.html"),
        profile: resolve(__dirname, "profile.html"),
        listing: resolve(__dirname, "listing.html"),
        create: resolve(__dirname, "create.html"),
      },
    },
  },
});
