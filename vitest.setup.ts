/// <reference types="vitest" />
import '@testing-library/jest-dom/vitest'

// Extend Vitest Assertion interface with testing-library matchers
declare global {
  namespace Vi {
    interface Assertion<T = any> {
      toHaveTextContent(text: string | RegExp): T
      toBeInTheDocument(): T
      toBeDisabled(): T
      toHaveAttribute(attr: string, value?: string): T
      toHaveAccessibleDescription(desc: string | RegExp): T
      toHaveLabelText(text: string | RegExp): T
      toHaveAccessibleName(name: string | RegExp): T
    }
    interface AsymmetricMatchersContaining {
      toHaveTextContent(text: string | RegExp): any
      toBeInTheDocument(): any
      toBeDisabled(): any
      toHaveAttribute(attr: string, value?: string): any
      toHaveAccessibleDescription(desc: string | RegExp): any
      toHaveLabelText(text: string | RegExp): any
      toHaveAccessibleName(name: string | RegExp): any
    }
  }
}

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

// Polyfill scrollIntoView for Radix components and combo box
Element.prototype.scrollIntoView = Element.prototype.scrollIntoView || (() => {})

// Polyfill getBoundingClientRect if needed
if (!Element.prototype.getBoundingClientRect) {
  Element.prototype.getBoundingClientRect = function () {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    }
  }
}
