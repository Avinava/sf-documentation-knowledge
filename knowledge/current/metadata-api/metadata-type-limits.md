---
title: "Metadata Type Limits"
domain: metadata-api
topic: metadata-type-limits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:40.625Z
estimatedTokens: 192
keywords: [Metadata, Limits, Certain, deploy, retrieve, apply, individual, transaction, there, daily, specific]
---

# Metadata Type Limits

> Certain metadata types have deploy and retrieve limits. Limits apply to each individual
  deploy or retrieve transaction, and there are daily limits for specific metadata
  types.

# Metadata Type Limits

Certain metadata types have deploy and retrieve limits. Limits apply to each individual deploy or retrieve transaction, and there are daily limits for specific metadata types.

The individual deploy and retrieve limits represent the maximum count that a metadata type may be deployed or retrieved in a single package zip. Daily deploy and retrieve limits apply to individual org usage within a 24-hour period.

Metadata Deploy Limits

-   Individual Metadata Deploy: 50
-   Daily Metadata Deploys: 100

Metadata Retrieve Limits

-   Individual Metadata Retrieve: 100
-   Daily Metadata Retrievals: 200

Deploy and Retrieve Metadata Limits apply to:

-   AIAuthoringBundle
-   AnalyticsDashboard
-   AnalyticsVisualization
-   AnalyticsWorkspace
