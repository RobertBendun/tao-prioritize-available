const ul = document.querySelector('ul.entry-point-box')
if (ul.children.length > 1) { // sanity check, probably unnesesary
	for (const a of ul.querySelectorAll('a[data-launch_url^="http"]')) {
		ul.insertBefore(a.parentNode, ul.children[0]);
		console.log("parent", a.parentNode)
		console.log("child", ul.children[0]);
	}
}
