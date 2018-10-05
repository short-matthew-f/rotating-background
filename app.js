const setBackgroundElGradient = (percent, MIN_DEG = 150, MAX_DEG = 210) => {
	const backgroundEl = document.querySelector('.background');
	const degree = (MAX_DEG - MIN_DEG) * percent + MIN_DEG;
	backgroundEl.style.backgroundImage = `linear-gradient(${degree}deg, #ff0, #ff0 50%, #0ff 50%)`;
};

window.addEventListener('scroll', (event) => {
	const percentScrolled = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
	setBackgroundElGradient(percentScrolled, -30, 330);
});

setBackgroundElGradient(0, -30, 330);