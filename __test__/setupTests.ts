import { afterAll, afterEach, vi } from "vitest";

afterEach(() => {
  vi.clearAllMocks();
});

afterAll(() => {
  vi.resetAllMocks();
});

// Object.defineProperties(window, 'matchMedia', {
//   writable: true
// });