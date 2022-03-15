const dex = document.getElementById('dex');
const fetchOmnitrix = async () => {
    const res = await fetch("https://jak_api.p.rapidapi.com/ben10", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "jak_api.p.rapidapi.com",
			"x-rapidapi-key": "d3474315fcmshe6f03eb826f16bcp181f82jsn7d262d2601be"
		}
	});
	const data = await res.json();
	console.log(data);
	const omnitrixes = data.omnitrix.map((result, index) => ({
		...result,
		id: index + 1,
		image: `https://jak-api.vercel.app/${result.image}`
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
