<template>
	<div class="home">
		<div class="hero">
			<div class="container">
				<ParticleText
					text="&lt;Hello World /&gt;"
					class="hero__title"
				></ParticleText>
				<div class="hero__subtitle">
					<SlideText>Я креативный front end</SlideText>
					<SlideText>разработчик,</SlideText>
					<SlideText>проживающий</SlideText>
					<SlideText>в России, Казань.</SlideText>
				</div>
			</div>
		</div>
		<div style="height: 200vh"></div>
	</div>
</template>

<style lang="sass">
.hero
	&__title
		margin-top: 18vh
	&__subtitle
		font-size: 3vw
		font-weight: bold
		max-width: 760px
		line-height: 112%
</style>

<script>
import SlideText from "@/components/SlideText";
import ParticleText from "@/components/ParticleText";

export default {
	name: "home",
	components: { SlideText, ParticleText },
};
</script>
