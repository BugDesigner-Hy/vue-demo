<template>
	<div class="absolute top-3 right-3 cursor-pointer" @click="toggleDark()">
		<i-mdi:theme-light-dark />
	</div>
	<n-message-provider>
		<router-view />
	</n-message-provider>
</template>

<script setup lang="ts">
import { NMessageProvider, darkTheme } from 'naive-ui'
const { isDark, toggleDark } = useDarks()
</script>
