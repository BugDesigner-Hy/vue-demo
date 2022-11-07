<template>
	<div class="wrap">
		<div class="header">
			<div class="avatar">
				<img class="rounded-1" src="/avatar/avatar.jpeg" />
			</div>
			<div class="brief" :class="`text-[${contentColor}]`">
				<div class="name">HaiYang</div>
				<div class="job">IT</div>
			</div>
		</div>
		<div class="divide w-auto h-2px border border-[#fafee4]"></div>

		<div class="menu">
			<div v-for="menu in menus" :key="menu.id" class="menu-item">
				<i-mdi:alarm-check class="menu-item-icon" />
				<div class="menu-item-name">{{ menu.name }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// const bgColor = ref('teal')
const contentColor = ref('#fafee4')

type MENU = {
	id: number
	name: string
}

const menus = reactive<MENU[]>([
	{
		id: 1,
		name: 'menu-1',
	},
	{
		id: 2,
		name: 'menu-2',
	},
	{
		id: 3,
		name: 'menu-3',
	},
	{
		id: 4,
		name: 'menu-4',
	},
	{
		id: 5,
		name: 'menu-5',
	},
])
</script>

<style scoped>
.wrap {
	@apply h-screen w-80px duration-250 ease-in-out overflow-hidden p-8px rounded-md bg-[teal];
	&:hover {
		@apply w-200px;
	}

	.header {
		@apply mb-2 flex overflow-hidden;

		.avatar {
			@apply flex-grow-0 w-64px overflow-hidden;
		}

		.brief {
			@apply flex flex-1 flex-col justify-center items-center overflow-hidden;
		}
	}
}

.menu {
	@apply flex flex-col;
}
.menu-item {
	@apply flex flex-row justify-center items-center overflow-hidden mt-3 h-40px rounded-md duration-150 ease-in-out;

	&:hover {
		@apply bg-gray-400;
	}

	.menu-item-icon {
		@apply w-68px flex-grow-0 text-2xl text-center text-[#fafee4] overflow-auto;
	}

	.menu-item-name {
		@apply flex-1 text-xl overflow-auto text-[#fafee4] overflow-hidden;
	}
}
</style>
