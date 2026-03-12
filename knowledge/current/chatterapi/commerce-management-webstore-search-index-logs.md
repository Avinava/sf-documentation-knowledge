---
title: "Commerce Management Webstore Search, Index Logs"
domain: chatterapi
topic: commerce-management-webstore-search-index-logs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.569Z
estimatedTokens: 169
keywords: [Commerce, Management, Webstore, Search, Index, Logs]
---

# Commerce Management Webstore Search, Index Logs

> Get search index logs for a webstore.

# Commerce Management Webstore Search, Index Logs

Get search index logs for a webstore.

Resource

```

```

Available version

57.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| pageSize | Integer | Number of log records returned. Valid values are from 1 through 100. If you don’t specify a value, the default size is 25. | Optional | 57.0 |

Response body for GET

[Commerce Search Index Log Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_search_index_log_collection.htm "Collection of search index logs for a webstore.")

## Code Examples

```
/commerce/management/webstores/webstoreId/search/index-logs
```

## Related Topics

- Commerce Search Index Log Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_search_index_log_collection.htm)
