const footer = `<footer class="mt-auto"><div class="px-lg-5 py-3"><div class="row text-center"><h6 class="lead">Owned by The Future Place hello</h6></div></div></footer>`

function init() {
	document.body.innerHTML = header() + document.body.innerHTML + footer
}

function header() {
	let path = document.URL.slice(window.location.origin.length + 1).split("/").pop().split("?")[0]
	return "<header class=\"sticky-top\"><nav class=\"navbar navbar-expand-lg bg-dark navbar-dark\" id=\"navbar\"><div class=\"container-fluid px-5\"><a class=\"navbar-brand\" href=\"index.html\" style=\"font-size: 25px\"><b><i><span style=\"color: #2b64f6\">#New</span><span style=\"color: #ea3323\">MR</span></i></b></a><button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\"><div class=\"navbar-nav ms-auto\">" + [
		[
			{href: "index.html", name: "Home"},
			{href: "blog_index.html", name: "Blog"},
			{href: "radio_index.html", name: "Radio"},
			{href: "events.html", name: "Events"}
		],
		[
			{href: "", name: "Sign Up"},
			{href: "", name: "Donate"}
		]
	].map(
		function (section) {
			return section.map(
				function (i) {
					return i.href === path ? `<a class="nav-link active" aria-current="page">${i.name}</a>` : `<a class="nav-link" href="${i.href}">${i.name}</a>`
				}
			).join("")
		}
	).join("<p style=\"padding: 7px 7px\"></p>") + "</div></div></div></nav></header>";
}
