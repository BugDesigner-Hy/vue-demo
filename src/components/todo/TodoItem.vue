<template>
	<div ref="target" class="ml-3 mt-3 flex justify-center items-center">
		<div class="w-60">
			<TransitionGroup name="fade" tag="div">
				<div
					v-for="item in props.items"
					:key="item.id"
					class="flex items-center cursor-pointer my-1 h-7"
				>
					<div class="flex items-center">
						<i-mdi:emoticon-wink-outline class="mr-1" />
						{{ showContent(item.content) }}
					</div>
					<div class="ml-auto">
						<i-mdi:minus
							v-show="!isOutside"
							@click.prevent="todoStore.remove(item.id)"
						/>
					</div>
				</div>
			</TransitionGroup>
		</div>
	</div>
</template>

<script setup lang="ts">
import useTodoStore, { TodoItem } from '~/stores/useTodoStore'
const props = defineProps<{
	items: TodoItem[]
}>()

const todoStore = useTodoStore()

const CONTENT_MAX_LENGTH: number = 10

function showContent(content: string) {
	if (content.length > CONTENT_MAX_LENGTH) {
		return content.slice(0, CONTENT_MAX_LENGTH) + '...'
	}
	return content
}

const target = ref(null)

const { isOutside } = useMouseInElement(target)

// watch(isOutside, (newValue, _) => {
// 	if (newValue) {
// 		contentDetail.value = ''

// 	}
// })

// let atClick = ref(false)
// let contentDetail = ref('')
// function showContentDetail(id: number) {
// 	let item = todoStore.findOne(id)
// 	contentDetail.value = item.content
// 	atClick.value = true
// }

// watchEffect(()=>{
// 	if(isOutside.value){
// 		contentDetail.value = ''
// 	}
// })
</script>

<style>
/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
	transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
	transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
	position: absolute;
}
</style>
