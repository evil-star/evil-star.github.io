<template>
	<div id="app">
		<NavBar></NavBar>
		<div id="main-scroll" ref="mainSroll">
			<!-- <div id="nav">
				<router-link to="/">Home</router-link> |
				<router-link to="/about">About</router-link>
			</div> -->
			<div ref="skewScroll">
				<router-view />
				<Footer></Footer>
			</div>
		</div>
	</div>
</template>

<script>
import "reset-css";
import "@/assets/sass/main.sass";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { skewScroll } from "@/mixins/skewScroll.js";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

Scrollbar.use(OverscrollPlugin);

export default {
	mixins: [skewScroll],
	data() {
		return {};
	},
	components: {
		NavBar, Footer
	},
	methods: {
		onPageScroll(status) {
			this.scrollTop = status.offset.y;
		},
	},
	mounted() {
		const scrollbar = Scrollbar.init(this.$refs.mainSroll, {
			plugins: {
				overscroll: {
					effecy: "bounce",
				},
			},
		});

		// On page scroll
		scrollbar.addListener((status) => {
			window.dispatchEvent(new Event("scroll"));
			this.$store.commit("changePageScroll", status);
		});

		this.skewScroll(this.$refs.skewScroll);
	},
	destroy() {
		Scrollbar.destroyAll();
	},
};
</script>
