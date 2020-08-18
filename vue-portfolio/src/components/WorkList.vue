<template>
	<div class="work-item-list">
		<div
			class="work-item-list__item"
			v-for="(work, index) in works"
			:key="index"
		>
			<WorkItem :title="work.title" :desc="work.desc" :video="work.video" :url="work.url"></WorkItem>
		</div>
	</div>
</template>

<script>
import WorkItem from "@/components/WorkItem";

export default {
	name: "home",
	components: { WorkItem },
	props: ['works']
};
</script>

<style lang="sass">
.work-item-list
	&__item
		margin-bottom: 20vh
		&:nth-child(even)
			.work-item
				&__media
					order: 10
				&__info
					padding: 3vh 3.5vw 3vh 0
</style>
