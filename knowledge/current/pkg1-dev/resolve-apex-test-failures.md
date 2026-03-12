---
title: "Resolve Apex Test Failures"
domain: pkg1-dev
topic: resolve-apex-test-failures
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.680Z
estimatedTokens: 219
keywords: [Resolve, Apex, Test, Failures, Package, installs, upgrades, may, fail, passing, coverage, However, ignored, developer, write]
---

# Resolve Apex Test Failures

> Package installs or upgrades may fail for not passing Apex test coverage. However, some
  of these failures can be ignored. For example, a developer might write an Apex test that makes
  assumptions about a subscriber's data.

# Resolve Apex Test Failures

Package installs or upgrades may fail for not passing Apex test coverage. However, some of these failures can be ignored. For example, a developer might write an Apex test that makes assumptions about a subscriber's data.

If your install fails due to an Apex test failure, check for the following:

-   Make sure that you’re staging all necessary data required for your Apex test, instead of relying on subscriber data that exists.
-   If a subscriber creates a validation rule, required field, or trigger on an object referenced by your package, your test might fail if it performs DML on this object. If this object is created only for testing purposes and never at runtime, and the creation fails due to these conflicts, you might be safe to ignore the error and continue the test. Otherwise, contact the customer and determine the impact.
