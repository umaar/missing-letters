
import test from 'ava';
import fn from './index.js';

test('Works for the basic use case', t => {
	const result = fn('abce');
	t.is(result, 'd');
});

test('Returns undefined when there are no missing characters', t => {
	const result = fn('bcd');
	t.is(result, undefined);
});
