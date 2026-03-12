---
title: "Determine What Packaged Component Was Accessed"
domain: pkg2-dev
topic: determine-what-packaged-component-was-accessed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:26.009Z
estimatedTokens: 180
keywords: [Determine, Packaged, Component, Accessed, analyze, package, usage, log, record, always, start]
---

# Determine What Packaged Component Was Accessed

> To analyze a package usage log record, always start with your packaged
  component.

# Determine What Packaged Component Was Accessed

To analyze a package usage log record, always start with your packaged component.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


In App Analytics package usage logs, the name of each packaged component is represented by the custom\_entity field and its type is represented by the custom\_entity\_type field. Your managed package likely contains multiple packaged components.

To identify each packaged component uniquely, combine these fields.

-   package\_id
-   package\_version\_id
-   managed\_package\_namespace
-   custom\_entity
-   custom\_entity\_type
