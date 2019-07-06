import '@/assets/styles.css';

<template>
	<div id="app" class="container mx-auto">
		<Navigation/>
		<HelloComponent/>
	</div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend ({

});
</script>

<style>

	#app{
		font-family: 'Open Sans', sans-serif;
		 -webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>