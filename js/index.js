const ads = ["ad1.gif", "ad2.gif", "ad3.png", "ad4.gif", "ad5.gif", "ad6.gif", "ad7.gif", "ad9.gif", "ad10.gif", "ad11.jpg", "ad12.gif", "ad13.gif", "ad14.png"]
const ads_num = ads.length
let translate = 0
let speed = 10
document.getElementById("adCarousel").innerHTML = ads
	.sort(() => Math.random() - 0.5)
	.map((c, v) => `<div class="col" id="ad${v}" style="transform: translateX(${300 * v}px)"><img src="assets/${c}" class="carouselAdImg" alt="Advert"></div>`)
	.join("")

function moveAds() {
	translate += speed / 10
	if (translate > 300 * ads_num) {
		translate -= 300 * ads_num
	}
	for (let v = 0; v < ads_num; v++) {
		let width = (v * 300) - translate
		width = width < -500 ? width + ads_num * 300 : width
		document.getElementById(`ad${v}`).style.setProperty("transform", `translateX(${width}px)`)
	}
}
setInterval(moveAds, 25)
