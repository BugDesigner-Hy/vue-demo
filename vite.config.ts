import { resolve } from 'path'
import Tov from './presets/tov'
import { defineConfig } from 'vite'

export default defineConfig({
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`,
		},
	},
	plugins: [Tov()],
	server: {
		proxy: {
			'/colors.json': {
				target: 'http://zhongguose.com/colors.json',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/colors.json/, ''),
			},
		},
	},
})
