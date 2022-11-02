<template>
	<div class="bg" :style="{ '--color': curColor.hex }">
		<transition>
			<div class="colorContent">
				<div
					v-for="(color, index) in colorList"
					:key="index"
					class="w-20 text-white"
					@click="getCurColor(color)"
				>
					<div class="h-3" :class="`bg-[${color.hex}]`"></div>
					<div class="flex flex-row justify-around h-40">
						<div class="flex flex-col">
							<div v-for="(item, index) in color.CMYK" :key="index">
								<n-progress
									class="mt-2"
									type="circle"
									:percentage="item"
									:offset-degree="180"
									:show-indicator="false"
									color="#fff"
									rail-color="#bdbec0"
									:stroke-width="30"
									style="width: 25px; height: 25px"
								>
								</n-progress>
							</div>
						</div>
						<div
							class="write-vertical-right pt-2 text-xl"
							:class="`text-[${color.hex}]`"
						>
							{{ color.name }}
						</div>
					</div>
					<div class="flex flex-row justify-around">
						<div class="write-vertical-right hover:text-gray-100">
							{{ color.hex }}
						</div>
						<div class="w-1px bg-light-100"></div>
						<div class="write-vertical-right truncate hover:text-gray-100">
							{{ color.pinyin.toUpperCase() }}
						</div>
					</div>
				</div>
			</div>
		</transition>
		<div class="basis-1/8 flex flex-col">
			<div class="flex flex-col justify-center items-center pt-20 divide-y-1">
				<div v-for="(item, index) in curColor.CMYK" :key="index">
					<div class="text-lg text-white pl-1">{{ CMYK[index] }}</div>
					<n-progress
						style="width: 60px; height: 60px"
						type="circle"
						:percentage="item"
						:offset-degree="180"
						:color="CMYK_COLOR[index]"
						:rail-color="changeColor(CMYK_COLOR[index], { alpha: 0.2 })"
					>
						<span
							style="text-align: center"
							class="text-2xl"
							:class="`text-[${CMYK_COLOR[index]}]`"
						>
							<n-number-animation :to="item" />
						</span>
					</n-progress>
				</div>
			</div>
			<div class="flex flex-col justify-center items-center">
				<div
					v-for="(item, index) in curColor.RGB"
					:key="index"
					class="border-t border-white text-white w-60px"
				>
					<div class="text-white text-lg">{{ RGB[index] }}</div>
					<div class="text-center text-2xl">
						<n-number-animation :to="item" />
					</div>
				</div>
			</div>
		</div>
		<div class="basis-3/8 flex flex-row">
			<transition name="slide">
				<div
					class="basis-1/2 flex flex-col justify-start items-center pt-20 text-white"
				>
					<div class="colorName text-9xl">{{ curColor.name }}</div>
					<div class="text-2xl pt-5">{{ curColor.pinyin.toUpperCase() }}</div>
				</div>
			</transition>
			<div class="basis-1/2 flex flex-col justify-start items-start">
				<img src="/color/flower.png" class="pt-20" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import { useRequest } from 'vue-request'
import { ColorItem } from '~/types/ColorItem'
import { changeColor } from 'seemly'
import { colorJson } from '~/api/colorJson'
const { copy } = useClipboard()

const CMYK: string[] = ['C', 'M', 'Y', 'K']
const RGB: string[] = ['R', 'G', 'B']
const CMYK_COLOR: string[] = ['#0093D3', '#CC006B', '#FFF10C', '#333']

// const { data: colorJson } = useRequest<ColorItem[]>({
//     url: '/colors.json',
//     method: 'get',
// })

let colorList = colorJson
let search = ref('')
if (search.value) {
	colorList = colorJson.filter((i) => {
		return i.name.indexOf(search.value) == 1
	})
}

console.log(`output->colorJson`, colorList)

let curColor = ref<ColorItem>({
	CMYK: [0, 0, 0, 0],
	RGB: [255, 255, 255],
	name: '中国色',
	hex: '#ddd',
	pinyin: 'zhongguose',
})

// function getCurColor(color: ColorItem) {
// 	curColor.value = color
// 	copy(color.hex)
// }

let getCurColor = (color: ColorItem): void => {
	curColor.value = color
	copy(color.hex)
}
</script>

<style>
.bg {
	@apply w-screen h-screen flex flex-row justify-center;
	background: url('/color/texture.png');
}

.bg::after {
	content: '';
	/* background-color: var(--color); */
	@apply transition-colors duration-[2s] opacity-90 inset-0 absolute -z-1 bg-[var(--color)];
}

.colorContent {
	@apply basis-4/8 grid grid-cols-5 gap-2 pl-80 pt-20 h-screen overflow-y-auto scroll-smooth;
}

.colorContent::-webkit-scrollbar {
	display: none;
}

.colorName {
	font-family: 'lixukexinshu';
	@apply write-vertical-right text-center transition: all 1s ease-in-out;
}

.flower {
	background: url('/color/flower.png');
}

.slide-fade-enter-active {
	transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
	transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	transform: translateX(20px);
	opacity: 0;
}
</style>
