export default class TextParticle {
	constructor(x = 0, y = 0, radius = 1, colors = [], ctx, mouse) {
		this.x = x;
		this.y = y;
		this.dest = {
			x: x,
			y: y,
		};
		this.r = 5;
		this.vx = (Math.random() - 0.5) * 20;
		this.vy = (Math.random() - 0.5) * 20;
		this.accX = 0;
		this.accY = 0;
		this.friction = Math.random() * 0.005 + 0.94;
		this.color = colors[Math.floor(Math.random() * 6)];
		this.radius = radius;
		this.ctx = ctx;
		this.mouse = mouse;

		if (window.outerWidth < 1000) {
			this.r = 1;
		}
	}

	render() {
		this.accX = (this.dest.x - this.x) / 500;
		this.accY = (this.dest.y - this.y) / 500;
		this.vx += this.accX;
		this.vy += this.accY;
		this.vx *= this.friction;
		this.vy *= this.friction;

		this.x += this.vx;
		this.y += this.vy;

		this.ctx.fillStyle = this.color;
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
		this.ctx.fill();

		var a = this.x - this.mouse.x;
		var b = this.y - this.mouse.y;

		var distance = Math.sqrt(a * a + b * b);
		if (distance < this.radius * 70) {
			this.accX = (this.x - this.mouse.x) / 100;
			this.accY = (this.y - this.mouse.y) / 100;
			this.vx += this.accX;
			this.vy += this.accY;
		}
	}
}