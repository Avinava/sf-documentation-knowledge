---
title: "Connect REST API Limits"
domain: salesforce-app-limits-cheatsheet
topic: connect-rest-api-limits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:05:22.897Z
estimatedTokens: 279
keywords: [Connect, REST, API, Limits, protect, shared, resources, consumers]
---

# Connect REST API Limits

> Limits protect shared resources. These limits are for Connect REST API
    consumers.

# Connect REST API Limits

Limits protect shared resources. These limits are for Connect REST API consumers.

Most Connect REST API requests are subject to the same rate limits as other Salesforce APIs. Only requests to Chatter REST API resources (a subset of Connect REST API resources) are subject to a per user, per application, per hour rate limit. When you exceed the rate limit, Connect REST API resources return a 503 Service Unavailable error code.

For applications using a session ID from Salesforce, the rate limit is per user, per hour—there isn’t a separate bucket for applications. All applications the user accesses with a session ID use this general quota. To take advantage of the per user, per application, per hour limit, use OAuth tokens.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_app_limits_cheatsheet)

#### Note

Load, performance, and other system issues can prevent some limits from being reached. Limits can change without notice. Ensure that your applications make efficient use of available requests and gracefully handle the 503 error code.
