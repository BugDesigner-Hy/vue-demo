<template>
	<div class="wrap">
		<div class="pan-loader w-200px h-200px">
			<div class="loader animate-loader"></div>
			<div class="pan-container animate-pan">
				<div class="pan"></div>
				<div class="handle"></div>
			</div>
			<div class="shadow"></div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
.wrap {
	@apply flex justify-center items-center h-screen w-screen;

	.pan-loader {
		/* @apply w-100px h-100px; */

		.loader {
			@apply relative w-45/100 h-45/100 top-1/10 left-0;
			border: 10px solid transparent;
			border-bottom: 10px solid #fdd835;
			border-radius: 50%;
		}

		.pan-container {
			@apply flex w-full;

			.pan {
				@apply w-6/10 h-20px rounded-b-r-20px rounded-b-l-20px;
				background: linear-gradient(#3949ab, #5c6bc0);
			}
			.handle {
				@apply w-4/10 h-10px bg-[#3949AB] rounded-10px;
				background: linear-gradient(#3949ab, #5c6bc0);
			}
		}

		.shadow {
			@apply relative bg-gray-200 w-3/10 h-8px top-15/100 left-15/100
			rounded-20px;
			animation: shadow 2s infinite;
		}
	}
}

@keyframes shadow {
	0% {
		width: 30%;
	}
	50% {
		width: 40%;
		left: 20px;
	}
	100% {
		width: 30%;
	}
}
</style>
