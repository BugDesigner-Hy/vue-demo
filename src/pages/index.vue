<script setup lang="ts">
import { projects } from '~/api/project'
</script>

<template>
	<div class="text-3xl font-bold mx-auto text-center pl-20 pr-40 mt-25 mb-5">
		Projects
	</div>
	<div class="grid grid-cols-2 gap-2 place-items-center w-120 mx-auto">
		<div
			v-for="(project, index) in projects"
			:key="index"
			class="item text-lg text-gray-500 pt-3 pb-3"
		>
			<router-link :to="project.link" class="flex items-center h-10">
				<div class="icon pl-1 mt-2 text-2xl text-gray-400">
					<i-mdi:format-list-bulleted />
				</div>
				<div class="ml-3">
					<div class="title text-xl text-gray-400">{{ project.name }}</div>
					<div class="brief text-sm text-gray-300">{{ project.brief }}</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<style scoped>
.item {
	@apply w-60;
}

.item:hover {
	@apply bg-gray-50 dark: bg-inherit transition duration-500 ease-in-out;

	.icon {
		@apply text-gray-500 dark: text-light-200;
	}

	.title {
		@apply text-gray-600 dark: text-light-200;
	}

	.brief {
		@apply text-gray-400 dark: text-light-200;
	}
}
</style>
