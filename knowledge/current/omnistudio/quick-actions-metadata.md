---
title: "Quick Actions Metadata"
domain: omnistudio
topic: quick-actions-metadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.277Z
estimatedTokens: 113
keywords: [Quick, Actions, Metadata, Output, representation]
---

# Quick Actions Metadata

> Output representation of the quick actions metadata
        request.

# Quick Actions Metadata

Output representation of the quick actions metadata request.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| metadataDetailRepresentation | Metadata Detail[] | List of metadata details for each quick action. | Small, 58.0 | 58.0 |
| quickActionType | String | Type of quick action.Possible value is:Phone | Small, 58.0 | 58.0 |

## Code Examples

```
"quickActionList": [
    {
      "metadataDetailRepresentation": [
        {
          "column": "Phone",
          "label": "Account Phone"
        }
        {
          "column": "Home_Phone",
          "label": "Home Phone"
        }
      ],
      "quickActionType": "Phone"
    }
  ]
```

## Related Topics

- Metadata
                  Detail[] (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_metadata_detail.htm)
