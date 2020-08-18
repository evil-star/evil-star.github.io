<template>
	<div class="footer">
		<div class="container">
			<div class="footer__inner">
				<div class="footer__copyright">
					© {{ new Date().getFullYear() }} Igor Bakin
				</div>
				<a href="https://github.com/evil-star" target="_blank" class="footer__social social-link">
					<i class="icon-github"></i>
				</a>
				<a href="https://vk.com/evilstar14" target="_blank" class="footer__social social-link">
					<i class="icon-vk"></i>
				</a>
				<a href="mailto:igor.bakin.v@gmail.com" class="footer__social social-link">
					<i class="icon-email"></i>
				</a>
				<a href="https://api.whatsapp.com/send?phone=79196951324" target="_blank" class="footer__social social-link">
					<i class="icon-whatsapp"></i>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style lang="sass">
.footer
	background-color: #000000
	padding: 60px 0
	&__inner
		display: flex
		align-items: center
	&__copyright
		margin-right: 20px
		color: #fff
		font-size: .8em
	&__social
		margin: 0 10px
</style>