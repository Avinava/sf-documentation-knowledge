---
title: "Leaner Query Tags Result"
domain: omnistudio
topic: leaner-query-tags-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.040Z
estimatedTokens: 233
keywords: [Leaner, Query, Tags, Result, Output, representation, includes, compact, tag, data, mapped, shared, record, IDs]
---

# Leaner Query Tags Result

> Output representation of the leaner query tags result. The result includes compact tag
    data mapped to tag names and a shared list of record IDs.

# Leaner Query Tags Result

Output representation of the leaner query tags result. The result includes compact tag data mapped to tag names and a shared list of record IDs.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of context to be queried. | Small, 66.0 | 66.0 |
| errorMessage | String | Error message when isSuccess is false. | Small, 66.0 | 66.0 |
| isSuccess | Boolean | Indicates whether the query was successful (true) or not (true). | Small, 66.0 | 66.0 |
| queryResult​LeanerRepresentation | Context Tag Data Leaner | Map of tag name and list of lean tag data. Each entry contains tag values and compact indexes for record path construction. | Small, 66.0 | 66.0 |
| recordIds | String[] | List of all record IDs present in the context that are included in the tag result. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "contextId": "0000000s07fm061002917633740427233ff03037a8fe48048696667781ec824c",
  "isSuccess": true,
  "errorMessage": null,
  "recordIds": [
    "001xx000003GYiBAAW",
    "003xx000004WhFpAAK",
    "003xx000004WhFqAAK",
    "003xx000004WhFoAAK"
  ],
  "queryResultLeanerRepresentation": {
    "Contact_FirstName": [
      {
        "nodeLevelTag": false,
        "recordIdIndexesForPath": [
          0,
          1
        ],
        "tagValue": "Carole"
      },
      {
        "nodeLevelTag": false,
        "recordIdIndexesForPath": [
          0,
          2
        ],
        "tagValue": "Jon"
      },
      {
        "nodeLevelTag": false,
        "recordIdIndexesForPath": [
          0,
          3
        ],
        "tagValue": "Geoff"
      }
    ]
  }
}
```

## Related Topics

- Context Tag Data Leaner (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_tag_data_leaner.htm)
