import capitalize from "../src/capitalize.js";
import { strict as assert } from 'node:assert'

assert.equal(capitalize('text'), 'Text');
assert.equal(capitalize(''), '');

console.log('Все тесты пройдены!');