import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace <repo-name> with the name of your GitHub repository
export default defineConfig({
  plugins: [react()],
  base: '/my-new-task2/', // Example: '/my-react-vite-app/'
});

