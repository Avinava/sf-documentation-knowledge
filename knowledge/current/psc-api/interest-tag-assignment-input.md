---
title: "Interest Tag Assignment Input"
domain: psc-api
topic: interest-tag-assignment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:30.181Z
estimatedTokens: 122
keywords: [Interest, Tag, Assignment, Input, representation, record]
---

# Interest Tag Assignment Input

> Input representation for Interest Tag record
      assignment.

# Interest Tag Assignment Input

Input representation for Interest Tag record assignment.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| recordsForTag | Records For Tag Input | List of Salesforce object record IDs to assign to an Interest Tag. | Optional | 54.0 |
| tagsForRecord | Tags For Record Input | List of Interest Tags to assign to a Salesforce object record. | Optional | 54.0 |

## Code Examples

```
{
  "recordsForTag": {
    "tagId": "0TOi000001AWbWugta",
    "recordIds": [
      "001i000001AWbWuabc",
      "001i000001AWbWuabd"
    ]
  },
  "tagsForRecord": {
    "recordId": "001i000001AWbWuabc",
    "tagIds": [
      "0TOi000001AWbWugta",
      "0TOi000001AWbWugtb"
    ]
  }
}
```

## Related Topics

- Records For Tag Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_records_for_ta.htm)
- Tags For Record Input (atlas.en-us.psc_api.meta/psc_api/connect_requests_tags_for_recor.htm)
