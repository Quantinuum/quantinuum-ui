import path from "path";
import type { TestRunnerConfig } from "@storybook/test-runner";
import { waitForPageReady } from "@storybook/test-runner";
import { toMatchImageSnapshot } from "jest-image-snapshot";

// Baselines live in a gitignored folder so they survive branch switches
// during the v3 -> v4 comparison. Override with VISUAL_SNAPSHOT_DIR.
const snapshotDir =
  process.env.VISUAL_SNAPSHOT_DIR ??
  path.join(process.cwd(), ".tailwind-migration", "__image_snapshots__");

const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  // Block external resources (e.g. remote avatar images) so every run renders
  // the same deterministic fallback instead of racing a network fetch.
  async preVisit(page) {
    await page.unroute("**/*");
    await page.route("**/*", (route) => {
      const url = new URL(route.request().url());
      const isLocal =
        url.hostname === "127.0.0.1" || url.hostname === "localhost";
      if (!isLocal && route.request().resourceType() === "image") {
        return route.abort();
      }
      return route.continue();
    });
  },
  async postVisit(page, context) {
    await waitForPageReady(page);
    const image = await page.screenshot({
      fullPage: true,
      animations: "disabled",
    });
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir: snapshotDir,
      customDiffDir: path.join(snapshotDir, "__diffs__"),
      customSnapshotIdentifier: context.id,
      // Blur smooths imperceptible sub-pixel positional drift (e.g. ~0.2px
      // per-row rounding) so it passes, while real multi-pixel changes survive
      // the blur and still fail. The percent threshold is kept small so it
      // cannot mask a meaningful regression.
      blur: 1,
      failureThreshold: 0.1,
      failureThresholdType: "percent",
    });
  },
};

export default config;
