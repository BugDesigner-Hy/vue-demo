<template>
	<div class="bg">
		<div class="flex basis-4/8">color-list</div>
		<div class="basis-1/8 flex flex-col">
			<div>color-cmyk</div>
			<div>color-rgb</div>
		</div>
		<div class="basis-3/8 flex flex-row">
			<div class="basis-1/2">中国色</div>
			<div class="basis-1/2">CHINESE COLORS</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRequest } from 'vue-request'

onMounted(() => {
	const { data } = useRequest({
		url: '/colors.json',
		method: 'get',
	})

	console.log(data)
})
</script>

<style>
.bg {
	@apply w-screen h-screen flex flex-row justify-center;
	background: url('/color/texture.png');
}
</style>
