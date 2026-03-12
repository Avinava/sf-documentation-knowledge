---
title: "External Data API Limits"
domain: bi-dev-guide-ext-data
topic: external-data-api-limits
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.143Z
estimatedTokens: 210
keywords: [External, Data, API, Limits, working, consider, addition, general, CRM, Analytics]
---

# External Data API Limits

> When working with the External Data API, consider the following limits, in addition to
    the general CRM Analytics limits.

# External Data API Limits

When working with the External Data API, consider the following limits, in addition to the general CRM Analytics limits.

| Value | Limit |
| --- | --- |
| Maximum file size per external data uploads | 40 GB |
| Maximum file size for all external data uploads in a rolling 24-hour period | 50 GB |
| Maximum number of external data jobs per dataset that can be run in a rolling 24-hour period | 50 |
| Maximum number of characters in a field | 32,000 |
| Maximum number of fields in a record | 5,000 (including up to 1,000 date fields) |
| Maximum number of characters for all fields in a record | 400,000 |

For more information on limits for all supported editions, see External Data Limits in [CRM Analytics Limits](https://help.salesforce.com/s/articleView?id=analytics.bi_limits.htm&type=5&language=en_US).
