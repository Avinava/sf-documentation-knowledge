---
title: "Fixing Performance Warnings"
domain: lightning
topic: fixing-performance-warnings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.372Z
estimatedTokens: 273
keywords: [Fixing, Performance, Warnings, few, common, anti-patterns, code, prompt, framework, log, messages, browser, console, Fix, speed]
---

# Fixing Performance Warnings

> A few common performance anti-patterns in code prompt the framework
      to log warning messages to the browser console. Fix the warning messages to speed up your
      components!

# Fixing Performance Warnings

A few common performance anti-patterns in code prompt the framework to log warning messages to the browser console. Fix the warning messages to speed up your components!

The warnings display in the browser console only if you enabled debug mode.

-   **[<aura:if> —Clean Unrendered Body —Clean Unrendered Body](atlas.en-us.lightning.meta/lightning/perf_warnings_if.htm)**
    This warning occurs when you change the isTrue attribute of an <aura:if> tag from true to false in the same rendering cycle. The unrendered body of the <aura:if> must be destroyed, which is avoidable work for the framework that slows down rendering time.
-   **[<aura:iteration> —Multiple Items Set —Multiple Items Set](atlas.en-us.lightning.meta/lightning/perf_warnings_iteration.htm)**
    This warning occurs when you set the items attribute of an <aura:iteration> tag multiple times in the same rendering cycle.

#### See Also

-   [*Salesforce Help:* **Enable Debug Mode for Lightning Components**](https://help.salesforce.com/articleView?id=aura_debug_mode.htm&language=en_US)

## Related Topics

- <aura:if> —Clean Unrendered Body —Clean Unrendered Body (atlas.en-us.lightning.meta/lightning/perf_warnings_if.htm)
- <aura:iteration> —Multiple Items Set —Multiple Items Set (atlas.en-us.lightning.meta/lightning/perf_warnings_iteration.htm)
