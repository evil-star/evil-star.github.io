<template>
	<div
		class="title"
		:class="{ animate: isVisible }"
		v-observe-visibility="{
			callback: visibilityChanged,
			once: true,
		}"
	>
		<div class="block"></div>
		<div class="text"><slot /></div>
	</div>
</template>

<style scoped lang="sass">
@import "@/assets/sass/variables"

.title
	position: relative
	display: inline-block
.block
	position: absolute
	left: 0
	top: 0
	height: 100%
	width: 100%
	background-color: $accent
	z-index: 1
.text
	opacity: 0

.animate
	.block
		animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards
	.text
		animation: mainFadeIn 0s forwards 1s

@keyframes mainBlock
	0%
		width: 0%
		left: 0
	50%
		width: 100%
		left: 0
	100%
		width: 0
		left: 100%
@keyframes mainFadeIn
	0%
		opacity: 0
	100%
		opacity: 1
</style>

<script>
export default {
	name: "SlideText",
	data: function() {
		return {
			isVisible: true,
		};
	},
	methods: {
		visibilityChanged(isVisible, entry) {
			this.isVisible = isVisible;
		},
	},
};
</script>
