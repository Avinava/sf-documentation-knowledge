---
title: "Content Link Data Sync Detail"
domain: clm-developer-guide
topic: content-link-data-sync-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.400Z
estimatedTokens: 165
keywords: [Content, Link, Data, Sync, Detail, Output, representation, requested, IDs]
---

# Content Link Data Sync Detail

> Output representation that contains content link details for the requested
    IDs.

# Content Link Data Sync Detail

Output representation that contains content link details for the requested IDs.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contentLinkId | String | Record ID of the content link. | Small, 65.0 | 65.0 |
| failureReason | String | Reason for the failure, if the isSuccess property value is false. | Small, 65.0 | 65.0 |
| isSuccess | Boolean | Indicates whether the data sync validation was successful (true) or not (false). | Small, 65.0 | 65.0 |
| value | String | Represents the data for the content. | Small, 65.0 | 65.0 |

## Code Examples

```
{
  "contentLinkId": "6UPxx0000004CCGGA2",
  "value": "3",
  "isSuccess": false,
  "failureReason": "Contract Term: value not of required type: 3"
}
```
