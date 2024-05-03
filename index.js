const initSlider = () => {
	const imageList = document.querySelector('.slider-wrapper .image-list');
	const slideButtons = document.querySelectorAll('.slider-wrapper .slide-button');

	slideButtons.forEach((button) => {
		button.addEventListener('click', () => {
			const direction = button.id === "prev-slide" ?	-1 : 1;
		})
	})
}