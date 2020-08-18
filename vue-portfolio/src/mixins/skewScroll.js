export const skewScroll = {
	data() {
		return {
			el: {},
			currentPixel: 0
		}
	},
	methods: {
		skewScroll(el, scroll) {
			this.el = el;
			this.currentPixel = this.$store.state.page.scroll.y;

			this.looper();
		},
		looper() {
			const newPixel = this.$store.state.page.scroll.y;
			const diff = newPixel - this.currentPixel
			const speed = diff * 0.1;

			this.el.style.transform = "skewY(" + speed + "deg)"

			this.currentPixel = newPixel;

			requestAnimationFrame(this.looper)
		}
	},
	destroy() {
		cancelAnimationFrame(skewScrollAnimation);
		this.skewScrollAnimation = undefined;
	}
}