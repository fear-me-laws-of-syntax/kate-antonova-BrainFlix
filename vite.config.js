

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
// });


import path from 'path';
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: {
    //   '@styles': path.resolve(__dirname, "src/styles"),
    //   '@utils': path.resolve(__dirname, "src/utils")
    // }
  }
});