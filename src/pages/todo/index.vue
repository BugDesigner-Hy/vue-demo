<template>
	<div class="flex flex-col justify-center items-center w-screen h-screen">
		<h1 class="mb-5 flex items-center">
			MINI TODO <i-ph:number-circle-eight-light class="text-base ml-2" />
		</h1>
		<div class="w-60 h-100">
			<div class="flex justify-around border-b-1 pb-1">
				<input
					v-model="todoStore.newContent"
					type="text"
					placeholder="type something"
					class="outline-none w-220px pl-4 bg-transparent"
					@keyup.enter="add"
				/>
				<button class="flex items-center ml-auto" @click="add">
					<i-ri:add-fill />
				</button>
			</div>
			<todoItem :items="todoStore.items"></todoItem>
		</div>
	</div>
</template>

<script setup lang="ts">
import useTodoStore from '~/stores/useTodoStore'
import { useMessage } from 'naive-ui'
const todoStore = useTodoStore()

const message = useMessage()

function add() {
	if (todoStore.newContent == '') {
		return
	}
	if (todoStore.items.length >= 8) {
		message.warning("oops! you can't add more", {
			showIcon: false,
		})
	}
	todoStore.add(todoStore.newContent)
	todoStore.newContent = ''
}
</script>

<style></style>
