<template>
	<div class="work-item" ref="workItem">
		<div class="work-item__media">
			<video
				loop
				muted
				preload="none"
				ref="video"
				v-observe-visibility="{
					callback: videoVisibility,
					once: true,
				}"
			>
				<source
					:src="require(`@/assets/video/${video}.mp4`)"
					type="video/mp4"
				/>
				<source
					:src="require(`@/assets/video/${video}.webm`)"
					type="video/webm"
				/>
			</video>
		</div>
		<div
			class="work-item__info"
			ref="info"
			:style="{ transform: translateY }"
		>
			<div class="work-item__title">{{ title }}</div>
			<div class="work-item__desc">{{ desc }}</div>
			<Button :href="url" target="_blank">Перейти</Button>
		</div>
	</div>
</template>

<script>
import VanillaTilt from "vanilla-tilt";
import percentageSeen from "@/helpers/percentageSeen.js";
import Button from "@/components/Button";

export default {
	name: "WorkItem",
	data() {
		return {
			tiltOptions: {
				max: 5,
				reverse: true,
				"full-page-listening": true,
			},
			isInfoVisible: false,
			translateY: "",
		};
	},
	props: ["title", "desc", "video", "url"],
	methods: {
		initTilt() {
			VanillaTilt.init(this.$refs.video, this.tiltOptions);
		},
		handler() {
			console.log("loaded");
		},
		videoVisibility(isVisible, entry) {
			if (isVisible) {
				this.$refs.video.play();
			}
		},
	},
	components: { Button },
	mounted() {
		this.initTilt();

		window.addEventListener(
			"scroll",
			this._.throttle(() => {
				const percent = percentageSeen(
					this.$refs.info,
					this.$store.state.page.scroll
				);
				const val = percent * 2;

				this.translateY = `translateY(${val}px)`;
			}, 200)
		);
	},
	destroy() {
		this.$refs.video.vanillaTilt.destroy();
	},
};
</script>

<style lang="sass">
.work-item
	display: flex
	&__media
		width: 70%
		flex-shrink: 0
		video
			max-width: 100%
			box-shadow: rgba(0, 0, 0, 0.05) 1px -2px 20px 3px
	&__title
		font-family: "Merriweather"
		font-size: 16px
		font-size: 1.5em
		margin-bottom: .7em
		line-height: 1.2em
	&__desc
		margin-bottom: 1.5em
	&__info
		padding: 3vh 0 3vh 3.5vw
		transition: transform .5s ease-out
</style>
