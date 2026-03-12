---
title: "Develop Offline-Ready LWCs with the LWC Offline Test Harness"
domain: mobile-offline
topic: develop-offline-ready-lwcs-with-the-lwc-offline-test-harness
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:56.473Z
estimatedTokens: 695
keywords: [Develop, Offline-Ready, LWCs, LWC, Offline, Test, Harness, short, lightweight, testing, debugging, inspection, app, developers, debug]
---

# Develop Offline-Ready LWCs with the LWC Offline Test Harness

> The LWC Offline Test Harness (Test Harness, for short) is a lightweight testing,
  debugging, and inspection app. It enables developers to debug Lightning web components for use in
  their LWC Offline-based mobile apps. Use Test Harness to execute Quick Actions on selected
  SObjects from your Salesforce org, debug component JavaScript, and inspect drafts and draft queue
  behavior.

# Develop Offline-Ready LWCs with the LWC Offline Test Harness

The LWC Offline Test Harness (Test Harness, for short) is a lightweight testing, debugging, and inspection app. It enables developers to debug Lightning web components for use in their LWC Offline-based mobile apps. Use Test Harness to execute Quick Actions on selected SObjects from your Salesforce org, debug component JavaScript, and inspect drafts and draft queue behavior.

Test Harness provides error, warning, and info logs for your LWCs as it loads, runs, and interacts with Salesforce. View logging details for your data sync via the drafts queue, inspect Lightning logs from Debug Console, and attach Chrome and Safari debuggers to view the JavaScript console of the webview your LWCs run in.

Test Harness helps you confirm that your LWCs work as expected in LWC Offline-based environments and are ready for integration testing within an offline-enabled Salesforce mobile app.

## Features

-   Uses the latest version of LWC Offline, with all mobile capabilities, including those in developer preview.
-   Quick and convenient app flow, centered around launching LWC quick actions with a selected SObject.
-   Visible draft queue, for viewing the status of pending data modification operations.
-   Debug Console embedded into the app, for both a broad view of ongoing tasks and granular inspection of log messages.
-   Immediate, on-demand app reloads for quickly re-bootstrapping and re-running your latest LWC code changes.
-   Attach browser debuggers to view more developer-specific errors and warnings from the LWC webview.

-   **[Test Harness Overview](atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_ux_overview.htm)**
    Learn the major features and where to find them in the Test Harness app.
-   **[Install the Test Harness App](atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_install.htm)**
    Test Harness is distributed as an installable app package, not via the Apple App Store or Google Play Store. As a developer tool, it’s intended to be installed into and used with a working development environment. The installation process, prerequisites, and compatibility details are consequently a bit more involved than with a normal mobile app.
-   **[Use the Test Harness App](atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_usage.htm)**
    Learn how to use the Test Harness to perform common testing and debugging actions.
-   **[Debug Lightning Web Components](atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_debug.htm)**
    The best way to develop and debug your Lightning web components is the same way you develop and debug *anything* built with HTML, CSS, and JavaScript: with the built-in debugging tools in your web browser.

## Related Topics

- Test Harness Overview (atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_ux_overview.htm)
- Install the Test Harness App (atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_install.htm)
- Use the Test Harness App (atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_usage.htm)
- Debug Lightning Web Components (atlas.en-us.mobile_offline.meta/mobile_offline/dx_harness_app_debug.htm)
