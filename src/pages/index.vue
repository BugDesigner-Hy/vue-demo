<script setup lang="ts">
import { projects } from '~/api/project'
</script>

<template>
	<div class="flex-col justify-center items-center w-60 mx-auto mt-20">
		<div class="text-3xl font-bold mb-5">Projects</div>
		<div
			v-for="(project, index) in projects"
			:key="index"
			class="pl-2 my-2 text-lg text-gray-500 hover:text-gray-700"
		>
			<router-link :to="project.link" class="flex items-center h-10">
				<div class="mt-2"><i-mdi:format-list-bulleted /></div>
				<div class="ml-2">{{ project.name }}</div>
			</router-link>
		</div>
	</div>
</template>
