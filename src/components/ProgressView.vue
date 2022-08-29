<template>
	<svg :style="initStyle" style="transform: rotate(-90deg)">
		<circle
			class="stroke-gray-400 fill-transparent stroke-4 circle"
			:cx="cx"
			:cy="cy"
			:r="r"
			:stroke-dasharray="dashArray"
			:stroke-dashoffset="offset"
		></circle>
	</svg>
</template>

<script setup lang="ts">
const props = defineProps({
	w: {
		type: Number,
		required: false,
		default: 100,
	},
	h: {
		type: Number,
		required: false,
		default: 100,
	},
	progress: {
		type: Number,
		required: false,
		default: 0,
	},
	maxProgress: {
		type: Number,
		required: false,
		default: 100,
	},
	showProcess: {
		type: Boolean,
		required: false,
		default: true,
	},
	color: {
		type: String,
		required: false,
		default: '',
	},
})

let { w, h, progress, maxProgress } = toRefs(props)

let initStyle = reactive({
	width: w,
	height: h,
})

let cx = Math.round(w.value / 2)
let cy = Math.round(h.value / 2)
let r = cy - 2
//周长
let dashArray = Math.floor(2 * Math.PI * r)

let percent = progress.value / maxProgress.value
let offset = progress.value ? calCircleLength() : dashArray

console.log('percent :>> ', percent)
console.log(`output->dashArray`, dashArray)

function calCircleLength() {
	return dashArray * (1 - percent)
}
</script>

<style scoped>
.circle {
	transition: all 2s ease-in-out;
}
</style>
