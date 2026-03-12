---
title: "Connect REST API Limits"
domain: salesforce-app-limits-cheatsheet
topic: connect-rest-api-limits
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.151Z
estimatedTokens: 414
keywords: [Connect, REST, API, Limits, protect, shared, resources, consumers]
---

# Connect REST API Limits

> Limits protect shared resources. These limits are for Connect REST API
    consumers.

# Connect REST API Limits

Limits protect shared resources. These limits are for Connect REST API consumers.

Connect REST API requests are subject to rate limits. Connect REST API has a different rate limit than other Salesforce APIs. Connect REST API has a per user, per application, per hour rate limit. When you exceed the rate limit, Connect REST API resources return a 503 Service Unavailable error code.

For migrated orgs and orgs created in Summer ’24 and later, only requests to Chatter REST API resources are subject to the per user, per application, per hour rate limit. The documentation for every Chatter resource specifies that Chatter is required. Requests to resources that don’t require Chatter count toward the [Salesforce Platform total API request allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_api.htm), which are per org and span a 24-hour period.

For applications using a session ID from Salesforce, the rate limit is per user, per hour—there isn’t a separate bucket for applications. All applications the user accesses with a session ID use this general quota. To take advantage of the per user, per application, per hour limit, use OAuth tokens.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_app_limits_cheatsheet)

#### Note

Load, performance, and other system issues can prevent some limits from being reached. Limits can change without notice. Ensure that your applications make efficient use of available requests and gracefully handle the 503 error code.
