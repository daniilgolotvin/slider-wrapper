const initSlider = () => {
	const slideButton = document.querySelectorAll(".slider-button .slider-wrapper")

	slideButton.forEach((button) => {
		button.addEventListener('click', () => {
			const direction = button.id === "prev-slide" ? -1 : 1;
			const scrollAmount = imageList.clientWidth * direction;
			imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		})
	})
}


window.addEventListener('load', initSlider)