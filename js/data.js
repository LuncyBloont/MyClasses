function encodeURL(uri) {
	let s = encodeURI(uri);
	
	if (uri === "C L A S S") {
		localStorage.setItem("pass", "passed");
		return "class";
	}
	
	return s;
}

function load(id) {
	let img = document.querySelector("#" + id);
	if (localStorage.getItem("pass") === "passed") {
		img.style.display = "inherit";
	} else {
		img.style.display = "none";
	}
}