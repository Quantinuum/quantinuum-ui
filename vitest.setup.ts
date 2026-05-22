import "@testing-library/jest-dom/vitest"

// Polyfill ResizeObserver for cmdk and Radix components
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// Polyfill pointer capture for Radix components
Element.prototype.setPointerCapture = Element.prototype.setPointerCapture || (() => {})
Element.prototype.releasePointerCapture = Element.prototype.releasePointerCapture || (() => {})
Element.prototype.hasPointerCapture = Element.prototype.hasPointerCapture || (() => false)
