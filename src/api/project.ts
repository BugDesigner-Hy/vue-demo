export type Project = {
	id: number
	name: string
	brief: string
	link: string
	icon: string
}

export const projects: Array<Project> = [
	{
		id: 1,
		name: 'todo-list',
		brief: '一个极简的待办列表',
		link: '/todo',
		icon: 'i-mdi:format-list-bulleted',
	},
	{
		id: 2,
		name: 'chinese-colors',
		brief: '中国色',
		link: '/color',
		icon: 'mdi:format-list-bulleted',
	},
	{
		id: 3,
		name: 'css-sidebar',
		brief: 'css练手-侧边栏',
		link: '/css/sidebar',
		icon: 'mdi:format-list-bulleted',
	},
	{
		id: 4,
		name: 'css-panLoader',
		brief: 'css练手-煎蛋',
		link: '/css/pan-loader',
		icon: 'mdi:format-list-bulleted',
	},
	{
		id: 5,
		name: 'vue-practice',
		brief: 'vue语法练习',
		link: '/vue/practice',
		icon: 'mdi:format-list-bulleted',
	},
]
