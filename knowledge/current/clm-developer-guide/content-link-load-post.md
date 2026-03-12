---
title: "Content Link Load (POST)"
domain: clm-developer-guide
topic: content-link-load-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:22.230Z
estimatedTokens: 246
keywords: [Content, Link, Load, POST, Fetches, data, IDs]
---

# Content Link Load (POST)

> Fetches the content data for a specified reference ID or set of
      content link IDs.

# Content Link Load (POST)

Fetches the content data for a specified reference ID or set of content link IDs.

Resource

```

```

Example POST

```

```

Available version

62.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| content​LinkIds | String[] | List of the content link IDs to fetch the data. | Optional | 62.0 |
| isBulk​Request | Boolean | Indicates whether fields associated with the same object ID are grouped and fetched together in a single bulk request (true) or not (false). | Optional | 66.0 |
| reference​ObjectId | String | ID of the reference object to retrieve the content data. | Optional | 62.0 |

Response body for POST

[Content Link List](atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_content_link_list.htm "Output representation of the content data for the specified reference IDs.")

## Code Examples

```
/connect/content-link/load
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/content-link/load
```

```
{
  "referenceObjectId": "a0X4W00000X8jklUAB",
  "isBulkRequest": "false",
  "contentLinkIds": [
    "0D56A000008yhfSAAQ",
    "0D56A000008yhgTABQ"
  ]
}
```

## Related Topics

- Content Link List (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_content_link_list.htm)
