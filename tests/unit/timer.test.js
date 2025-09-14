import { expect, test } from 'vitest';
import { Timer } from '../../src/js/timer.js';

test('Timer can be instantiated', () => {
  const timer = new Timer(1, 1);
  expect(timer).toBeInstanceOf(Timer);
});
