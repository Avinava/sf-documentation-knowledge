---
title: "Feature Objects Result"
domain: netzero-cloud-dev-guide
topic: feature-objects-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:57.347Z
estimatedTokens: 186
keywords: [Feature, Objects, Result, Output, representation, fetch]
---

# Feature Objects Result

> Output representation of the fetch feature object
    request.

# Feature Objects Result

Output representation of the fetch feature object request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | Integer | The request response code. | Small, 58.0 | 58.0 |
| currentPageNumber | Long | The current page number. | Small, 58.0 | 58.0 |
| currentPageSize | Integer | The number of objects in the current page. | Small, 58.0 | 58.0 |
| message | String | The request response message. | Small, 58.0 | 58.0 |
| objects | Feature Object[] | The list of feature objects. | Small, 58.0 | 58.0 |
| totalAvailableItems | Long | The number of the total available items in the feature object. | Small, 58.0 | 58.0 |

## Code Examples

```
{
  "currentPageNumber": 1,
  "currentPageSize": 10,
  "objects": [
    {
      "apiName": "Account",
      "label": "Account"
    },
    {
      "apiName": "Asset",
      "label": "Asset"
    },
    {
      "apiName": "AssetRelationship",
      "label": "Asset Relationship"
    },
    {
      "apiName": "Case",
      "label": "Case"
    },
    {
      "apiName": "Contact",
      "label": "Contact"
    },
    {
      "apiName": "Contract",
      "label": "Contract"
    },
    {
      "apiName": "Event",
      "label": "Event"
    },
    {
      "apiName": "Individual",
      "label": "Individual"
    },
    {
      "apiName": "Lead",
      "label": "Lead"
    }
    . . .
  ],
  "totalAvailableItems": 22
}
```

## Related Topics

- Feature Object (atlas.en-us.netzero_cloud_dev_guide.meta/netzero_cloud_dev_guide/connect_responses_feature_object.htm)
