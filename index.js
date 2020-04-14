window.addEventListener("load", () => {
	const sounds = document.querySelectorAll(".sound");
	const pads = document.querySelectorAll(".pads div");
	const visual = document.querySelector(".visual");
	const colors = [
		"#ff2079",
		"#440bd4",
		"#09fbd3",
		"#04005e",
		"#e92efb",
		"#5eff00",
	];

	pads.forEach((pad, index) => {
		pad.addEventListener("click", function () {
			sounds[index].currentTime = 0;
			sounds[index].play();
			createBubble(index);
		});
	});

	const createBubble = (index) => {
		//Create bubbles

		const bubble = document.createElement("div");
		visual.appendChild(bubble);
		bubble.style.backgroundColor = colors[index];
		bubble.style.animation = `jump 1s ease`;
		bubble.addEventListener("animationend", function () {
			visual.removeChild(this);
		});
	};
});
