<template>
	<section>
		<p>模板语法</p>
		<div>{{ name }}</div>
		<p>v-on</p>
		<n-space>
			<div class="text-center w-50px border border-black">{{ count }}</div>
			<n-button @click="inc(2)">+</n-button>
			<n-button @click="dec(2)">-</n-button>
			<n-button type="info" @click="doThis">click it!</n-button>
			<n-button type="info" @click="doThat('1', $event)"
				>click it again!</n-button
			>
			<n-button type="info" @click="(event) => doThat('2', event)">
				click it again2!
			</n-button>
			<n-button type="info" @[eventName]="(event) => doThat('2', event)">
				click it again3!
			</n-button>
		</n-space>
	</section>
</template>

<script setup lang="ts">
let name = 'haiyang'
let { count, inc, dec } = useCounter()
function doThis(event: Event) {
	const target = event.target as HTMLButtonElement
	console.log(`innerText`, target.innerText)
	console.log('target :>> ', target)
}

function doThat(id: string, event: Event) {
	const target = event.target as HTMLButtonElement
	console.log(`innerText`, target.innerText)
	console.log(`id->`, id, `$event->`, event)
}

let eventName = 'click'
</script>

<style scoped></style>
