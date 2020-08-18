export default (element, scroll) => {
	// Get the relevant measurements and positions
	const viewportHeight = window.innerHeight;
	const scrollTop = scroll.y;
	const elementOffsetTop = element.offsetTop;
	const elementHeight = element.offsetHeight;

	// Calculate percentage of the element that's been seen
	const distance = (scrollTop + viewportHeight) - elementOffsetTop;
	const percentage = Math.round(distance / ((viewportHeight + elementHeight) / 100));

	// Restrict the range to between 0 and 100
	return Math.min(100, Math.max(0, percentage));
}