const URLs = [
	{ route: '/', name: 'Home' },

	{ route: '/shop', name: 'Shop' },

	{ route: '/shop/games', name: 'Games 111' },
	{ route: '/shop/books', name: 'Books 222' },
]

export const getPathArr = (pathname) => {
	const names = (pathname === '/') ? ["/"] : pathname.split('/');
	names[0] = '/';
	let names2 = [];

	for (let i = 0; i < names.length; i++) {
		let str = '';

		for (let j = 0; j < i + 1; j++) {
			str += names[j] + ((j === i) || (j === 0) ? '' : '/');
		}

		names2[i] = str;
	}

	let arr = [];
	names2.forEach(el => {
		URLs.forEach(el2 => {
			if (el === el2.route) arr.push(el2);
		});
	});

	return arr;
}
