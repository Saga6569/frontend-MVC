import { test, expect } from '@jest/globals';
import { promises as fs } from 'fs';
import path from 'path';
import init from '../src/init';
// import render from '../src/render.js';

beforeEach(async () => {
  const pathToHtml = path.resolve(__dirname, '__fixtures__/index.html');
  const html = await fs.readFile(pathToHtml, 'utf8');
  document.body.innerHTML = html;
});

test('init', () => {
  init();
  expect(true).toBeDefined();
});

test('app', () => {
  console.log(document.body.innerHTML);
  expect(true).toBeDefined();
});
