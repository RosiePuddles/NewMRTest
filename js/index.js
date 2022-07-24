let navbarAll = document.getElementById("navbar");
let navbar = navbarAll.style;
let mouse = Infinity;

function mouseMove(e) {
	mouse = e.pageY - scrollY;
	updateNavBar();
}

function updateNavBar() {
	if ((mouse <= navbarAll.clientHeight) || ((scrollY / innerHeight) > 0.2)) {
		navbar.opacity = "1";
	} else {
		navbar.opacity = "0";
	}
}

document.onmousemove = mouseMove;
document.onscroll = updateNavBar;
