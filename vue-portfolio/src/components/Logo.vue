<template>
	<div>
		<a href="#" class="logo">ИБ</a>
	</div>
</template>

<script>
export default {
	name: 'Logo'
}
</script>

<style lang="sass">
.logo
	font-family: 'Merriweather', serif
	font-size: 30px
	position: relative
	color: #fff
	text-decoration: none
	display: block
	&:before, &:after
		content: ''
		position: absolute
		bottom: -2px
		left: 0
		width: 100%
		height: 1px
		background: #fff
	&:before
		transition: transform .2s ease-in
		transform-origin: 100% 50%
	&:after
		transform: scaleX(0)
		transform-origin: 0 50%
		transition: transform .2s ease-in .2s
	&:hover
		&:before
			transform: scaleX(0)
		&:after
			transform: scaleX(1)
</style>
