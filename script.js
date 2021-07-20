const dex = document.getElementById('dex');
const fetchOmnitrix = async () => {
    const url = "/omnitrix.json";
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	const omnitrixes = data.omnitrix.map((result, index) => ({
		...result,
		id: index + 1,
		image: `./images/${result.image}`
	}));
	displayOmnitrixes(omnitrixes);
};

const displayOmnitrixes = (omnitrix) => {
    const omnitrixHTMLString = omnitrix
        .map((omnitrixe) => (`
			<li class="card">
				<img class="card-image" src="${omnitrixe.image}"/>
				<h2 class="card-title">${omnitrixe.id}. ${omnitrixe.name}</h2>
			</li>
		`)).join('');
    dex.innerHTML = omnitrixHTMLString;
};

fetchOmnitrix();
