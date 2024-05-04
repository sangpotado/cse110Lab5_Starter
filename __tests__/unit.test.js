// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber 1', () => {
  expect(isPhoneNumber("(510)123-6589")).toBe(true);
});
test('isPhoneNumber 2', () => {
  expect(isPhoneNumber("(815)-453-9999")).toBe(true);
});
test('isPhoneNumber 3', () => {
  expect(isPhoneNumber("8154539992324")).toBe(false);
})
test('isPhoneNumber 4', () => {
  expect(isPhoneNumber("8154")).toBe(false);
});

test('isEmail: Valid email, expect true', () => {
  expect(isEmail("test@example.com")).toBe(true);
});

test('isEmail: Valid email, expect true', () => {
  expect(isEmail("user@ucsd.edu")).toBe(true);
});

test('isEmail: Invalid email with missing domain, expect false', () => {
  expect(isEmail("invalidemail@")).toBe(false);
});

test('isEmail: Invalid email with subdomain, expect false', () => {
  expect(isEmail("invalid_email@example.domain.com")).toBe(false);
});


test('isStrongPassword: Less than 4 characters, expect false', () => {
  expect(isStrongPassword("Ab1")).toBe(false);
});

test('isStrongPassword: More than 14 characters, expect false', () => {
  expect(isStrongPassword("Abcdefghijklmnop15")).toBe(false);
});

test('isStrongPassword: Valid password, expect true', () => {
  expect(isStrongPassword("Abcdefg1")).toBe(true);
});

test('isStrongPassword: Valid password with special characters, expect true', () => {
  expect(isStrongPassword("Abcd__efg1")).toBe(true);
});

test('isDate: Valid date with single-digit month and day, expect true', () => {
  expect(isDate("5/4/2024")).toBe(true);
});

test('isDate: Valid date with double-digit month and day, expect true', () => {
  expect(isDate("12/31/2024")).toBe(true);
});

test('isDate: Invalid date with missing digits in month or day, expect false', () => {
  // Invalid date: "3/2023" (missing day)
  expect(isDate("3/2024")).toBe(false);
});

test('isDate: Invalid date with missing or extra digits in year, expect false', () => {
  // Invalid date: "12/31/23" (short year)
  expect(isDate("12/31/24")).toBe(false);
  // Invalid date: "12/31/20233" (extra digit in year)
  expect(isDate("12/31/20244")).toBe(false);
});

test('isHexColor: Valid 3-digit hex color code with leading hash, expect true', () => {
  // Valid color: "#abc"
  expect(isHexColor("#abc")).toBe(true);
});

test('isHexColor: Valid 6-digit hex color code with leading hash, expect true', () => {
  // Valid color: "#abcdef"
  expect(isHexColor("#abcdef")).toBe(true);
});

test('isHexColor: Invalid hex color code with 4 characters, expect false', () => {
  // Invalid color: "#abcd"
  expect(isHexColor("#abcd")).toBe(false);
});

test('isHexColor: Invalid hex color code with 7 characters, expect false', () => {
  // Invalid color: "#abcdefg"
  expect(isHexColor("#abcdefg")).toBe(false);
});
