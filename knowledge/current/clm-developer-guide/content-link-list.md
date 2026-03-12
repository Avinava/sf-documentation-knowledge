---
title: "Content Link List"
domain: clm-developer-guide
topic: content-link-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:22.410Z
estimatedTokens: 131
keywords: [Content, Link, Output, representation, data, IDs]
---

# Content Link List

> Output representation of the content data for the specified reference IDs.

# Content Link List

Output representation of the content data for the specified reference IDs.

JSON Sample

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contentLink​DataList | Content Link Detail[] | List of content links. | Small, 62.0 | 62.0 |
| failedContent​LinkList | Failed Content Link List[] | List of failed content links. | Small, 62.0 | 62.0 |
| reference​ObjectId | String | ID of the reference object. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "contentLinkDataList": [
    {
      "contentLinkId": "0D56A000008yhfSAAQ",
      "content": "Content data here"
    }
  ],
  "failedContentLinkList": [
    {
      "failedContentLinkId": "0D56A000008yhgTABQ",
      "failureReason": "Access denied"
    }
  ],
  "referenceObjectId": "a0X4W00000X8jklUAB"
}
```

## Related Topics

- Content Link Detail[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_content_link_detail.htm)
- Failed Content Link List[] (atlas.en-us.clm_developer_guide.meta/clm_developer_guide/connect_responses_failed_content_link_list.htm)
