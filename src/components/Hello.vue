<template>
	<div>
		<div>Hello {{ name }}{{ exclamationMarks }}</div>
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="decrement">-</button>
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="increment">+</button>
	</div>
</template>

<script lang="ts">

import Vue from "vue";

export default Vue.extend({
	props: ['name', 'initialEnthusiasm'],
	data() {
			return {
				enthusiasm: this.initialEnthusiasm,
			}
		},
		methods: {
			increment() { this.enthusiasm++; },
			decrement() {
				if (this.enthusiasm > 1) {
					this.enthusiasm--;
				}
			},
		},
		computed: {
			exclamationMarks(): string {
				return Array(this.enthusiasm + 1).join('+');
			}
		}
});
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

	.container {
		width: 80%;
		margin: 0 50%;
		border: 1.5px solid #808080;
	}
	
</style>