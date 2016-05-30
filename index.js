
'use strict';

function charCode(char) {
	return char.charCodeAt(0);
}

function fearNotLetter(str) {
	const strArr = str.split('');
	const startingIndex = charCode(strArr[0]);

	const afterMissingChar = strArr.filter((char, index) => {
		return (startingIndex + index) !== charCode(char);
	})[0];

	if (afterMissingChar) {
		return String.fromCharCode(charCode(afterMissingChar) - 1);
	} else {
		return undefined;
	}
}

module.exports = fearNotLetter;