---
title: "API Calls for Data Replication"
domain: api
topic: api-calls-for-data-replication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.702Z
estimatedTokens: 239
keywords: [API, Calls, Data, Replication, supports]
---

# API Calls for Data Replication

> The API supports data replication with the following API calls:

# API Calls for Data Replication

The API supports data replication with the following API calls:

| API Call | Description |
| --- | --- |
| getUpdated() | Retrieves the list of objects that have been updated (added or changed) during the specified timespan for the specified object. |
| getDeleted() | Retrieves the list of objects that have been deleted during the specified timespan for the specified object. |

Client applications can invoke these API calls to determine which objects in your organization’s data have been updated or deleted during a given time period. These API calls return a set of IDs for objects that have been updated (added or changed) or deleted, as well as the timestamp (Coordinated Universal Time (UTC)—not local—timezone) indicating when they were last updated or deleted. It is the responsibility of the client application to process these results and to incorporate the required changes into the local copy of the data.

## Related Topics

- getUpdated() (atlas.en-us.api.meta/api/sforce_api_calls_getupdated.htm)
- getDeleted() (atlas.en-us.api.meta/api/sforce_api_calls_getdeleted.htm)
