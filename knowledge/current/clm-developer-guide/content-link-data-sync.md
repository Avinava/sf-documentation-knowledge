---
title: "Content Link Data Sync"
domain: clm-developer-guide
topic: content-link-data-sync
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.404Z
estimatedTokens: 205
keywords: [Content, Link, Data, Sync, Output, representation, synchronization, success, failure]
---

# Content Link Data Sync

> Output representation that contains the details of data synchronization with success and
    failure information.

# Content Link Data Sync

Output representation that contains the details of data synchronization with success and failure information.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| failedContent​LinkDataList | Content Link Data Sync Detail[] | List of content links that failed to update, including error details. | Small, 65.0 | 65.0 |
| reference​ObjectId | String | ID of the sObjects that were updated. | Small, 65.0 | 65.0 |
| saveCommitted | Boolean | Indicates whether successful transactions were committed to the database (true) or not (false). | Small, 65.0 | 65.0 |
| successContent​LinkDataList | Content Link Data Sync Detail[] | List of content links that were successfully updated. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "failedContentLinkDataList": [
    {
      "contentLinkId": "6UPxx0000004CCGGA2",
      "failureReason": "Contract Term: value not of required type: 3",
      "isSuccess": false,
      "value": "3"
    }
  ],
  "referenceObjectId": "069xx0000004CsCAAU",
  "saveCommitted": false,
  "successContentLinkDataList": [
    {
      "contentLinkId": "6UPxx0000004C92GAE",
      "isSuccess": true,
      "value": "Contract Description for JSON"
    }
  ]
}
```

## Related Topics

- Content Link Data Sync Detail (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_content_link_data_sync_detail.htm)
