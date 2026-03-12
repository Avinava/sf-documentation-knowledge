---
title: "Limits Limits"
domain: pages
topic: limits-limits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:24.097Z
estimatedTokens: 223
keywords: [Limits, Visualforce, Although, Remote, Objects, isn’t, subject, resource, comes, limitations, own]
---

# Limits Limits

> Visualforce Although Remote Objects isn’t subject to some resource limits, it comes
    with limitations of its own.

# Limits Limits

Visualforce Although Remote Objects isn’t subject to some resource limits, it comes with limitations of its own.

Remote Objects is subject to the following limits.

-   Remote Objects isn’t a way to avoid Salesforce service limits. Remote Objects calls aren’t subject to API limits, but Visualforce pages that use Remote Objects are subject to all standard Visualforce limits.
-   You can retrieve a maximum of 100 rows in a single request. To display more rows, submit additional requests by using the OFFSET query parameter.
-   Remote Objects doesn’t support Blob fields. You can’t retrieve or set the value of object fields of type Blob.
-   Setting the rendered attribute to false on Remote Objects components disables the generation of the JavaScript for those Remote Objects. Any page functionality that depends on unrendered Remote Objects should also be disabled.
