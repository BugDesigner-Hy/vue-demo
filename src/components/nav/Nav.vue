<template>
	<div class="absolute top-5 right-5 flex justify-center items-center text-lg">
		<a class="item" href="https://github.com/BugDesigner-Hy/vue-demo">
			<i-iconoir:github />
		</a>
		<div class="item" @click="toggleDark()">
			<i-ic:outline-light-mode v-if="!isDark" />
			<i-ic:outline-dark-mode v-else />
		</div>
		<router-link class="item" to="/">
			<i-iconoir:home />
		</router-link>
	</div>
</template>

<script setup lang="ts">
const { isDark, toggleDark } = useDarks()
</script>

<style scoped>
.item {
	@apply mx-2 cursor-pointer text-gray-500;
}

.item:hover {
	@apply text-gray-700 dark: text-light-200;
}
</style>
