<template>
	<div>
		<header class="header">
			<div class="container">
				<div class="header__inner">
					<logo></logo>
					<div class="burger">
						<span></span><span></span>
					</div>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
import Logo from '@/components/Logo'

export default {
	name: 'NavBar',
	components: {
		Logo
	}
}
</script>

<style lang="sass">
.header
	position: fixed
	top: 0
	left: 0
	width: 100%
	&__inner
		padding: 15px 0
		display: flex
		justify-content: space-between
		align-items: center
</style>
