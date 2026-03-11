---
title: "External Change Data Capture Packaging and Testing"
domain: apex-guide
topic: external-change-data-capture-packaging-and-testing
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:46.847Z
keywords: [External, Change, Data, Capture, Packaging, Testing]
---

# External Change Data Capture Packaging and Testing

# External Change Data Capture Packaging and Testing

You can distribute External Change Data Capture components in managed packages, including a framework for testing your Apex triggers. Special behaviors and limitations apply to packaging and package installation.

-   Include External Change Data Tracking components in a managed package by selecting your test from the Apex Class Component Type list. The trigger, test, external data source, external object, and other related assets are brought into the package for distribution.
-   Certificates aren’t packageable. If you package an external data source that specifies a certificate, make sure that the subscriber org has a valid certificate with the same name.

To help you test your External Change Data Capture–triggered Apex classes, here is a unit test code example of a trigger reacting to a simulated external change.

**Example Trigger**

```

```

**Apex Test**

```

```