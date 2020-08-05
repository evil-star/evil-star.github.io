<template>
	<div id="app">
		<nav-bar></nav-bar>
		<div id="nav">
			<!-- <router-link to="/">Home</router-link> | -->
			<!-- <router-link to="/about">About</router-link> -->
		</div>
		<router-view />
	</div>
</template>

<script>
import "reset-css";
import "@/assets/sass/main.sass";
import NavBar from "@/components/NavBar";

export default {
	data() {
		return {
			psOptions: {
				
			},
		};
	},
	components: {
		NavBar
	},
};
</script>
