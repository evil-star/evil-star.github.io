<template>
	<a class="button">
		<span class="button__text">
			<slot></slot>
		</span>
		<i class="icon-right-arrow"></i>
	</a>
</template>

<script>
export default {
	name: 'Button'
};
</script>

<style lang="sass" scoped="true">
.button
	color: #000
	border: 1px solid #000
	padding: 25px 30px
	font-size: 12px
	font-weight: 600
	text-transform: uppercase
	text-decoration: none
	display: inline-block
	position: relative
	transition: color .3s cubic-bezier(.77,0,.175,1)
	&:hover
		color: #fff
		&:before
			transform: scaleY(1)
		i
			transform: translateX(10px)
	i
		display: inline-block
		margin-left: 7px
		position: relative
		transition: transform .3s ease
	&:before
		content: ""
		position: absolute
		width: 100%
		height: 100%
		top: 0
		left: 0
		background-color: #000
		transform: scaleX(0)
		transform-origin: left top
		transition: transform .3s cubic-bezier(.77,0,.175,1)
	&__text
		position: relative
</style>
