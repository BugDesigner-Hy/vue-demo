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
		name: 'color-pick',
		brief: '中国风颜色',
		link: '/color',
		icon: 'mdi:format-list-bulleted',
	},
	{
		id: 3,
		name: 'something',
		brief: '',
		link: '/something',
		icon: 'mdi:format-list-bulleted',
	},
]
