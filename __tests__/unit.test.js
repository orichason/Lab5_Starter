// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber — requires a NNN-NNNN core, optional area code prefix
test('isPhoneNumber accepts parenthesized area code with space', () => {
  expect(isPhoneNumber('(858) 534-2230')).toBe(true);
});
test('isPhoneNumber accepts hyphenated area code', () => {
  expect(isPhoneNumber('858-534-2230')).toBe(true);
});
test('isPhoneNumber rejects words with no digits', () => {
  expect(isPhoneNumber('hello world')).toBe(false);
});
test('isPhoneNumber rejects dot-separated digits (no hyphen in core)', () => {
  expect(isPhoneNumber('858.534.2230')).toBe(false);
});

// isEmail — \w+ @ letters/underscore . 2-3 letter TLD
test('isEmail accepts a typical address', () => {
  expect(isEmail('hello@world.com')).toBe(true);
});
test('isEmail accepts underscore in local and 2-letter TLD', () => {
  expect(isEmail('a_b@x.io')).toBe(true);
});
test('isEmail rejects 1-character TLD', () => {
  expect(isEmail('user@example.c')).toBe(false);
});
test('isEmail rejects 4-character TLD', () => {
  expect(isEmail('user@example.commm')).toBe(false);
});

// isStrongPassword — leading letter + 3-14 word chars (total 4-15)
test('isStrongPassword accepts minimum-length all-letters password', () => {
  expect(isStrongPassword('abcd')).toBe(true);
});
test('isStrongPassword accepts mixed letters/digits/underscore', () => {
  expect(isStrongPassword('Hello_World123')).toBe(true);
});
test('isStrongPassword rejects password starting with a digit', () => {
  expect(isStrongPassword('1abcd')).toBe(false);
});
test('isStrongPassword rejects password longer than 15 characters', () => {
  expect(isStrongPassword('abcdefghijklmnop')).toBe(false);
});

// isDate — M/D/YYYY, 1-2 / 1-2 / 4 digits
test('isDate accepts single-digit month and day', () => {
  expect(isDate('1/1/2024')).toBe(true);
});
test('isDate accepts two-digit month and day', () => {
  expect(isDate('12/31/2023')).toBe(true);
});
test('isDate rejects YYYY/MM/DD ordering', () => {
  expect(isDate('2024/01/01')).toBe(false);
});
test('isDate rejects hyphen separators', () => {
  expect(isDate('1-1-2024')).toBe(false);
});

// isHexColor — optional # then exactly 3 or 6 hex chars
test('isHexColor accepts 6-char hex with leading hash', () => {
  expect(isHexColor('#FFA500')).toBe(true);
});
test('isHexColor accepts 3-char hex without hash', () => {
  expect(isHexColor('abc')).toBe(true);
});
test('isHexColor rejects non-hex letters', () => {
  expect(isHexColor('#GGG')).toBe(false);
});
test('isHexColor rejects 5-character length', () => {
  expect(isHexColor('#12345')).toBe(false);
});
