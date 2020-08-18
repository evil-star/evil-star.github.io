<template>
	<canvas ref="scene" class="scene"></canvas>
</template>

<script>
import TextParticle from '@/constructors/TextParticle'

export default {
	name: "ParticleText",
	data() {
		return {
			showText: true,
			mouse: { x: 0, y: 0 },
			ww: 0,
			wh: 0,
			ctx: {},
			particles: [],
			colors: ["#000"],
			textParticle: {},
			amount: 0,
			canvasOffset: {},
			radius: 1
		};
	},
	props: ["text"],
	methods: {
		onMouseMove(e) {
			this.mouse.x = e.clientX - this.canvasOffset.left;
			this.mouse.y =
				e.clientY - this.canvasOffset.top + this.$store.state.page.scroll.y;
		},
		onTouchMove(e) {
			if (e.touches.length > 0) {
				this.mouse.x = e.touches[0].clientX - this.canvasOffset.left;
				this.mouse.y =
					e.touches[0].clientY - this.canvasOffset.top + window.scrollY;
			}
		},
		initScene(e) {
			this.ww = this.$refs.scene.width = window.innerWidth;
			this.wh = this.$refs.scene.height = this.$refs.scene.width / 3;

			this.ctx.clearRect(
				0,
				0,
				this.$refs.scene.width,
				this.$refs.scene.height
			);

			this.ctx.font = "bold " + this.ww / 10 + "px sans-serif";
			this.ctx.textAlign = "center";
			this.ctx.fillText(this.text, this.ww / 2, this.wh - 260);

			var data = this.ctx.getImageData(0, 0, this.ww, this.wh).data;
			this.ctx.clearRect(
				0,
				0,
				this.$refs.scene.width,
				this.$refs.scene.height
			);
			this.ctx.globalCompositeOperation = "screen";

			this.particles = [];
			for (var i = 0; i < this.ww; i += Math.round(this.ww / 150)) {
				for (var j = 0; j < this.wh; j += Math.round(this.ww / 150)) {
					if (data[(i + j * this.ww) * 4 + 3] > 150) {
						this.particles.push(new TextParticle(i, j, this.radius, this.colors, this.ctx, this.mouse));
					}
				}
			}
			this.amount = this.particles.length;
		},
		onTouchEnd(e) {
			mouse.x = -9999;
			mouse.y = -9999;
		},
		render(a) {
			requestAnimationFrame(this.render);
			this.ctx.clearRect(0, 0, this.$refs.scene.width, this.$refs.scene.height);
			for (var i = 0; i < this.amount; i++) {
				this.particles[i].render();
			}
		},
	},
	mounted() {
		this.canvasOffset = this.$refs.scene.getBoundingClientRect();
		this.ctx = this.$refs.scene.getContext("2d");
		this.ww = this.$refs.scene.width = window.innerWidth;
		this.vh = this.$refs.scene.height = this.$refs.scene.width / 3;

		window.addEventListener("resize", (e) => initScene(e));
		window.addEventListener("mousemove", (e) => this.onMouseMove(e));
		window.addEventListener("touchmove", (e) => this.onTouchMove(e));
		window.addEventListener("touchend", (e) => this.onTouchEnd(e));
		this.initScene();
		requestAnimationFrame(this.render);
	},
};
</script>
