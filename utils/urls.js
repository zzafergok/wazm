const Wappalyzer = require('wappalyzer');
const wappalyzer = new Wappalyzer();

const urls = [];
process.argv.slice(2).forEach(function (val, index, array) {
	urls.push(val);
});

async function multipleUrls() {
	try {
		await wappalyzer.init();

		const results = await Promise.all(
			urls.map(async url => ({
				url,
				results: await wappalyzer.open(url).analyze()
			}))
		);

		// console.log(JSON.stringify(results, null, 2));
	} catch (error) {
		console.error(error);
	}

	await wappalyzer.destroy();
}

module.exports = multipleUrls;
