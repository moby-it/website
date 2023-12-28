function transformH1() {
	const titles = document.querySelectorAll("h1 em");
	for (const title of titles) {
		title.innerHTML = title.textContent.replace(
			/\S/g,
			`<span class='letter' style='display: inline-block'>$&</span>`,
		);
		title.innerHTML += "<br/>";
	}
}
transformH1();

anime({
	targets: ".banner hgroup h1 em > span",
	translateY: [50, 0],
	opacity: [0, 1],
	easing: "easeOutBack",
	delay: anime.stagger(50),
	duration: 500,
});
anime({
	targets: ["hgroup h4", "#tail"],
	opacity: [0, 1],
	easing: "easeInOutCubic",
	delay: 2000,
	duration: 1000,
});
const animation = anime({
	targets: ["hgroup h4", "#tail", ".banner h1"],
	scale: [1, 0],
	easing: "easeInOutElastic",
	autoplay: false,
	duration: 4000,
});
function getScrollPercent() {
	const h = document.documentElement;
	const b = document.body;
	const st = "scrollTop";
	const sh = "scrollHeight";
	return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}
document.addEventListener("scroll", (event) => {
	animation.seek(animation.duration * getScrollPercent());
});
