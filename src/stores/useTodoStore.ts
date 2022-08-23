export type TodoItem = {
	id: number
	content: string
}

export default defineStore('todo', () => {
	let newContent = ref('')

	let items = reactive<TodoItem[]>([])

	function add(newContent: string) {
		if (items.length >= 8) {
			return
		}
		items.push({
			id: generateId(),
			content: newContent,
		} as TodoItem)
	}

	function remove(id: number) {
		let index = useArrayFindIndex(items, (i) => i.id == id)
		items.splice(index.value, 1)
	}

	function findOne(id: number): TodoItem {
		let index = useArrayFindIndex(items, (i) => i.id == id)
		return items.at(index.value) as TodoItem
	}

	return { newContent, items, add, remove, findOne }
})

let idCount: number = 1

function generateId(): number {
	return idCount++
}
