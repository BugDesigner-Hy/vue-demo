import Typography from 'windicss/plugin/typography'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
	darkMode: 'class',
	attributify: false, // 属性化css，默认关闭
	plugins: [Typography()],
	theme: {
		screens: {
			iphone: {
				max: '400px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['Microsoft YaHei', '微软雅黑', 'Helvetica', 'lixukexinshu'],
			},
		},
		animation: {
			loader: 'loader 2s linear infinite',
			pan: 'pan 2s infinite',
		},
		keyframes: {
			loader: {
				'0%': {
					// left:'10%',
					width: '10%',
					transform: 'rotate(0deg)',
				},
				// '10%': {
				// 	// left: '0%',
				// 	// transform: 'rotate(0)',
				// },
				'20%': {
					width: '0',
					left: '20%',
				},
				// '30%': {
				// 	width: '25%',
				// },
				'50%': {
					width: '35%',
					left: '10%',
				},
				'70%': {
					width: '30%',
					left: '18%',
					transform: 'rotate(240deg)',
				},
				'90%': {
					width: '30%',
					left: '10%',
				},
				'100%': {
					width: '0',
					left: '25%',
					transform: 'rotate(360deg)',
				},
			},
			pan: {
				'0%': {
					transform: 'rotate(0deg)',
					'transform-origin': 'top right',
				},
				'10%': {
					transform: 'rotate(-2deg)',
					'transform-origin': 'top right',
				},
				'50%': {
					transform: 'rotate(15deg)',
				},
				'100%': {
					transform: 'rotate(0deg)',
				},
			},
		},
	},
})
