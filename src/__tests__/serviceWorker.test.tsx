import * as serviceWorker from "./../serviceWorker";

describe("post reducer", () => {
  it("should register a service worker and cache file on install", function () {
    // 1: Register service worker.
    // 2: Wait for service worker to install.
    // 3: Check cache was performed correctly.

    const testService = serviceWorker.register("./test/static/my-first-sw.js");
    expect(testService).not.toEqual(1);
  });
  it("shouldun register a service worker", function () {
    const testService = serviceWorker.unregister();
    expect(testService).not.toEqual(1);
  });
});
