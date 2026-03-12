---
title: "Platform Cache Limits"
domain: apex-guide
topic: platform-cache-limits
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.764Z
estimatedTokens: 370
keywords: [Platform, Cache, Limits, limits, apply, Cache.]
---

# Platform Cache Limits

> These limits apply when using Platform Cache.

# Platform Cache Limits

These limits apply when using Platform Cache.

## Platform Cache Limits

Key Size Limits

| Limit | Value |
| --- | --- |
| Maximum key size | 50 characters |

Edition-specific Limits

This table shows the amount of Platform Cache available for different types of orgs. To purchase more cache, contact your Salesforce representative.

| Edition | Cache Size |
| --- | --- |
| Enterprise | 10 MB |
| Unlimited and Performance | 30 MB |
| All others | 0 MB |

Partition Size Limits

| Limit | Value |
| --- | --- |
| Minimum partition size | 1 MB |

Session Cache Limits

| Limit | Value |
| --- | --- |
| Maximum size of a single cached item (for put() methods) | 100 KB |
| Maximum local cache size for a partition, per-request1 | 500 KB |
| Minimum developer-assigned time-to-live | 300 seconds (5 minutes) |
| Maximum developer-assigned time-to-live | 28,800 seconds (8 hours) |
| Maximum session cache time-to-live | 28,800 seconds (8 hours) |

Org Cache Limits

| Limit | Value |
| --- | --- |
| Maximum size of a single cached item (for put() methods) | 100 KB |
| Maximum local cache size for a partition, per-request1 | 1,000 KB |
| Minimum developer-assigned time-to-live | 300 seconds (5 minutes) |
| Maximum developer-assigned time-to-live | 172,800 seconds (48 hours) |
| Default org cache time-to-live | 86,400 seconds (24 hours) |

1 Local cache is the application server’s in-memory container that the client interacts with during a request.
