---
title: "Content Link Data Sync Input"
domain: clm-developer-guide
topic: content-link-data-sync-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.087Z
estimatedTokens: 249
keywords: [Content, Link, Data, Sync, Input, representation, entire, synchronize, token, document, sObjects]
---

# Content Link Data Sync Input

> Input representation of the entire request to synchronize token data from a document to
    sObjects.

# Content Link Data Sync Input

Input representation of the entire request to synchronize token data from a document to sObjects.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentLink​DetailsList | Content Link Details Input[] | List of content link records with their IDs and updated values. Each object includes a contentLinkId and a contentValue property value. | Required | 65.0 |
| isBulk​Request | Boolean | Indicates whether fields associated with the same object ID are grouped and fetched together in a single bulk request (true) or not (false). | Optional | 66.0 |
| partialCommit | Boolean | Indicates whether successful records should be committed in case of partial errors (true) or not (false). The default value is false. | Optional | 65.0 |
| reference​ObjectId | String | ID of the target Salesforce object that must be updated, such as a Contract record. | Optional | 65.0 |

## Code Examples

```
{
  "referenceObjectId": "069xx0000004CsCAAU",
  "partialCommit": "false",
  "isBulkRequest": "false",
  "contentLinkDetailsList": [
    {
      "contentLinkId": "6UPVW00000003CQ4AY",
      "contentValue": "Contract Description for JSON"
    },
    {
      "contentLinkId": "6UPxx0000004CCGGA2",
      "contentValue": "3"
    }
  ]
}
```

## Related Topics

- Content Link Details Input (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_requests_content_link_details_input.htm)
