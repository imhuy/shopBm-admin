// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: "",
//   build: {
//     chunkSizeWarningLimit: 3000,
//   },
// });

import { defineConfig } from "vite";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [vercel()],
  base: "",
  build: {
    chunkSizeWarningLimit: 3000,
  },
});
