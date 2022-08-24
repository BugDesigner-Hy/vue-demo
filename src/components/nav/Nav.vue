<template>
	<div class="absolute top-5 right-5 flex justify-center items-center text-lg">
		<div class="item" @click="toggleDark()">
			<i-mdi:theme-light-dark />
		</div>
		<router-link class="item" to="/">
			<i-mdi:home />
		</router-link>
	</div>
</template>

<script setup lang="ts">
const { toggleDark } = useDarks()
</script>

<style scoped>
.item {
	@apply mx-2 cursor-pointer text-gray-500;
}
.item:hover {
	@apply text-gray-700 dark:text-light-200;
}
</style>
