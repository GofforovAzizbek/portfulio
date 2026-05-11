import React from "react";
import "@testing-library/jest-dom";

// Framer Motion uses IntersectionObserver for `whileInView`.
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @ts-expect-error - test environment polyfill
global.IntersectionObserver = MockIntersectionObserver;

// Next/Image in unit tests
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { unoptimized, fill, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={rest.alt} {...rest} />;
  },
}));
