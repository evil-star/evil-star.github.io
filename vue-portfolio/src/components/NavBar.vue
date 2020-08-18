<template>
	<header class="header">
		<div class="container">
			<div class="header__inner">
				<logo></logo>
				<div class="burger"><span></span><span></span></div>
			</div>
		</div>
	</header>
</template>

<script>
import Logo from "@/components/Logo";

export default {
	name: "NavBar",
	components: {
		Logo,
	},
};
</script>

<style lang="sass">
.header
	position: fixed
	top: 0
	left: 0
	width: 100%
	z-index: 100
	mix-blend-mode: difference
	&__inner
		padding: 15px 0
		display: flex
		justify-content: space-between
		align-items: center
</style>
