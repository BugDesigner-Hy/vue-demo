<template>
	<div class="absolute top-3 right-3 cursor-pointer" @click="toggleDark()">
		<i-mdi:theme-light-dark />
	</div>
	<n-message-provider>
		<router-view />
	</n-message-provider>
</template>

<script setup lang="ts">
import { NMessageProvider } from 'naive-ui'
const { toggleDark } = useDarks()
</script>
