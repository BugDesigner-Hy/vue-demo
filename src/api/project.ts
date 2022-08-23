export type Project = {
	id: number
	name: string
	link: string
	icon: string
}

export const projects: Array<Project> = [
	{
		id: 1,
		name: 'todo',
		link: '/todo',
		icon: 'i-mdi:format-list-bulleted',
	},
	{
		id: 2,
		name: 'color',
		link: '/color',
		icon: 'mdi:format-list-bulleted',
	},
	{
		id: 3,
		name: 'something',
		link: '/something',
		icon: 'mdi:format-list-bulleted',
	},
]
