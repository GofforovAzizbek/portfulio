/**
 * Test Utilities & Helpers
 * Contains MOCK and STUB utilities for testing
 * - Mocks: Complete replacement of module behavior
 * - Stubs: Minimal implementation for testing
 */

import { vi } from "vitest";

/* ============ MOCK UTILITIES ============ */

/**
 * MOCK: Complete Window API Mock
 * Replaces entire window object behaviors
 */
export const mockWindowAPI = () => {
  const originalAddEventListener = window.addEventListener;
  const originalRemoveEventListener = window.removeEventListener;

  const listeners = new Map<string, Set<EventListener>>();

  const mockAddEventListener = vi.fn(
    (event: string, listener: EventListener) => {
      if (!listeners.has(event)) {
        listeners.set(event, new Set());
      }
      listeners.get(event)!.add(listener);
    },
  );

  const mockRemoveEventListener = vi.fn(
    (event: string, listener: EventListener) => {
      listeners.get(event)?.delete(listener);
    },
  );

  window.addEventListener = mockAddEventListener as any;
  window.removeEventListener = mockRemoveEventListener as any;

  return {
    mockAddEventListener,
    mockRemoveEventListener,
    listeners,
    restore: () => {
      window.addEventListener = originalAddEventListener;
      window.removeEventListener = originalRemoveEventListener;
    },
  };
};

/**
 * MOCK: Mouse Event Mock
 * Creates realistic mouse events for testing cursor behavior
 */
export const mockMouseEvent = (
  clientX: number,
  clientY: number,
  target: HTMLElement = document.body,
) => {
  const event = new MouseEvent("mousemove", {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX,
    clientY,
    screenX: clientX,
    screenY: clientY,
  });

  Object.defineProperty(event, "target", { value: target, enumerable: true });
  return event;
};

/**
 * MOCK: localStorage Mock
 * Complete replacement for browser localStorage
 */
export const mockLocalStorage = () => {
  const store: Record<string, string> = {};

  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      Object.keys(store).forEach((key) => delete store[key]);
    }),
    key: vi.fn((index: number) => Object.keys(store)[index] || null),
    length: 0,
  };
};

/**
 * MOCK: IntersectionObserver Mock
 * For testing visibility and scroll behaviors
 */
export const mockIntersectionObserver = () => {
  const observers = new Map<Element, IntersectionObserverCallback>();

  class MockIntersectionObserver implements IntersectionObserver {
    readonly root = null;
    readonly rootMargin = "0px";
    readonly thresholds = [0];

    constructor(callback: IntersectionObserverCallback) {
      this.callback = callback;
    }

    private callback: IntersectionObserverCallback;

    observe(target: Element) {
      observers.set(target, this.callback);
    }

    unobserve(target: Element) {
      observers.delete(target);
    }

    disconnect() {
      observers.clear();
    }

    takeRecords() {
      return [];
    }
  }

  global.IntersectionObserver = MockIntersectionObserver as any;

  return {
    observers,
    trigger: (element: Element, isIntersecting: boolean) => {
      const callback = observers.get(element);
      if (callback) {
        const entry = {
          target: element,
          isIntersecting,
          intersectionRatio: isIntersecting ? 1 : 0,
          boundingClientRect: element.getBoundingClientRect(),
          rootBounds: null,
          time: Date.now(),
        } as IntersectionObserverEntry;
        callback([entry], {} as IntersectionObserver);
      }
    },
  };
};

/* ============ STUB UTILITIES ============ */

/**
 * STUB: Minimal React Component Stub
 * Simple implementation for testing
 */
export const createComponentStub = (displayName: string) => {
  const React = require("react");
  const Stub = () =>
    React.createElement(
      "div",
      { "data-testid": displayName },
      `Stub: ${displayName}`,
    );
  Stub.displayName = displayName;
  return Stub;
};

/**
 * STUB: API Response Stub
 * Minimal HTTP response implementation
 */
export const createApiResponseStub = (data: any, status: number = 200) => {
  return {
    data,
    status,
    statusText: status === 200 ? "OK" : "ERROR",
    headers: {},
    config: {},
  };
};

/**
 * STUB: Animation Frame Stub
 * For testing animation-related code
 */
export const stubAnimationFrame = () => {
  const callbacks: Set<FrameRequestCallback> = new Set();
  let frameId = 0;

  const requestAnimationFrame = vi.fn((callback: FrameRequestCallback) => {
    const id = ++frameId;
    callbacks.add(callback);
    return id;
  });

  const cancelAnimationFrame = vi.fn((id: number) => {
    // In real implementation, would remove specific callback
  });

  const triggerAnimationFrame = (timestamp: number = Date.now()) => {
    const callbacksToRun = Array.from(callbacks);
    callbacks.clear();
    callbacksToRun.forEach((cb) => cb(timestamp));
  };

  return {
    requestAnimationFrame,
    cancelAnimationFrame,
    triggerAnimationFrame,
  };
};

/* ============ TEST DATA STUBS ============ */

/**
 * STUB: Minimal Stats Data
 * For testing data rendering without full implementation
 */
export const statsStub = [
  { label: "Test Stat 1", value: "100" },
  { label: "Test Stat 2", value: "200" },
];

/**
 * STUB: Minimal Skills Data
 */
export const skillsStub = [
  {
    title: "Test Skills",
    icon: "TestIcon",
    items: ["Skill 1", "Skill 2", "Skill 3"],
  },
];

/**
 * STUB: Minimal Projects Data
 */
export const projectsStub = [
  {
    title: "Test Project",
    category: "Test",
    desc: "Test description",
    tech: ["Tech1", "Tech2"],
    github: "https://github.com/test",
    link: "https://example.com",
    image: "https://example.com/image.jpg",
  },
];

/* ============ HELPER FUNCTIONS ============ */

/**
 * Wait for condition to be true
 * Useful for async testing
 */
export const waitFor = async (
  condition: () => boolean,
  timeout: number = 5000,
) => {
  const startTime = Date.now();
  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error("waitFor timeout exceeded");
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
};

/**
 * Create a mock element with specific properties
 */
export const createMockElement = (properties: Record<string, any> = {}) => {
  const element = document.createElement("div");
  Object.assign(element, properties);
  return element;
};

/**
 * Create a mock event target
 */
export const createMockEventTarget = (selector: string = "") => {
  return {
    closest: vi.fn((sel: string) => (sel === selector ? true : null)),
    querySelector: vi.fn((sel: string) => (sel === selector ? {} : null)),
  };
};

/**
 * Assert viewport size
 */
export const assertViewport = (width: number, height: number) => {
  expect(window.innerWidth).toBe(width);
  expect(window.innerHeight).toBe(height);
};

/**
 * Create a spied function with behavior tracking
 */
export const createSpiedFunction = (
  implementation?: (...args: any[]) => any,
) => {
  return vi.fn(implementation || (() => {}));
};

/**
 * Delay execution (for async tests)
 */
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Create test data with defaults
 */
export const createTestData = <T>(
  defaults: T,
  overrides: Partial<T> = {},
): T => {
  return { ...defaults, ...overrides };
};

/* ============ CLEANUP UTILITIES ============ */

/**
 * Clean up all mocks and stubs
 */
export const cleanupAllMocks = () => {
  vi.clearAllMocks();
  vi.restoreAllMocks();
};

/**
 * Reset module mocks
 */
export const resetModules = () => {
  vi.resetModules();
};
