import { defineConfig as defineTestConfig, mergeConfig } from 'vitest/config'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default mergeConfig(
  defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@app': '/src/app',
        '@entities': '/src/entities',
        '@features': '/src/features',
        '@widgets': '/src/widgets',
        '@pages': '/src/pages',
        '@shared': '/src/shared',
      },
    },
  }),
  defineTestConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      coverage: {
        reportsDirectory: './.coverage',
        reporter: ['lcov', 'json', 'json-summary'],
      },
    },
  }),
)
