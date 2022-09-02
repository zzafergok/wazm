#!/usr/bin/env node

/**
 * wappalyzer-multiple
 * Running multiple urls on Wappalyzer
 *
 * @author zafergok <zafergok.com>
 */

// const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const multipleUrls = require('./utils/urls');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	// init({ clear });
	input.includes(`help`) && cli.showHelp(0);
	// input.includes(`urls`) && cli.showHelp(0);
	multipleUrls();

	debug && log(flags);
})();
