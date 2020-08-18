<template>
	<a class="arrow-link">
		<span class="arrow-link__text"><slot></slot></span>
		<span class="arrow-link__arrow"></span>
	</a>
</template>

<script>
export default {
	name: "ArrowLink"
}
</script>

<style lang="sass">
.arrow-link
	color: #0000FF
	font-size: 4em
	font-weight: bold
	text-decoration: none
	display: inline-block
	transition: transform .3s ease
	&__text
		background-color: rgba(0,0,255,.0)
		border-radius: 4px
		transition: background-color .3s ease
		display: inline-block
		padding: 5px
	&__arrow
		background-color: #000
		height: 1px
		width: .8em
		vertical-align: middle
		display: inline-block
		margin-left: .4em
		position: relative
		transition: width .3s ease .1s, transform .3s ease .1s
		&:after
			content: ''
			position: absolute
			right: 0
			bottom: 0
			background-color: #000
			height: 1px
			width: .15em
			transform: rotate(45deg)
			transform-origin: right bottom
	
	&:hover
		transform: translateX(10px)
		.arrow-link
			&__text
				background-color: rgba(0,0,255,.07)
			&__arrow
				width: .5em
				transform: translateX(.3em)

</style>