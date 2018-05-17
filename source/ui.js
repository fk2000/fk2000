'use strict';
const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Website',
		url: 'https://www.kichij.org'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/fk_2000'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/fk2000'
	},
	{
		label: 'Mastodon',
		url: 'https://co-mastdn.ga'
	},
	{
		label: 'fk2000 CLI',
		url: 'https://github.com/fk2000/fk2000'
	},
	{
		label: 'Contact',
		url: 'https://dev.to/fk2000'
	},
	{
		label: 'Support my open source work',
		url: 'https://www.patreon.com/fk2000'
	},
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I usually work as a consulting or infrastructure engineer. I like Ruby on Rails!</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
