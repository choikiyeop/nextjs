import '@testing-library/jest-dom';
import { afterAll, afterEach, expect, vi } from "vitest";

afterEach(() => {
  vi.clearAllMocks();
});

afterAll(() => {
  vi.resetAllMocks();
});

// Object.defineProperties(window, 'matchMedia', {
//   writable: true
// });