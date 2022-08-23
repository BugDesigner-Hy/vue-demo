<template>
	<div class="absolute top-5 right-5 flex justify-center items-center text-lg">
		<div
			class="mx-2 cursor-pointer text-gray-500 hover:text-gray-700"
			@click="toggleDark()"
		>
			<i-mdi:theme-light-dark />
		</div>
		<router-link
			class="mx-2 cursor-pointer text-gray-500 hover:text-gray-700"
			to="/"
		>
			<i-mdi:home />
		</router-link>
	</div>
	<n-message-provider>
		<router-view />
	</n-message-provider>
</template>

<script setup lang="ts">
import { NMessageProvider } from 'naive-ui'
const { toggleDark } = useDarks()
</script>
