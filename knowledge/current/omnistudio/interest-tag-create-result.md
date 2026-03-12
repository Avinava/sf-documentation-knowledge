---
title: "Interest Tag Create Result"
domain: omnistudio
topic: interest-tag-create-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.028Z
estimatedTokens: 163
keywords: [Interest, Tag, Result, Tags]
---

# Interest Tag Create Result

> Result of the Interest Tags create request.

# Interest Tag Create Result

Result of the Interest Tags create request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | String | The error code and message, if the create request failed. | Small, 54.0 | 54.0 |
| isCreated | Boolean | Indicates whether Interest Tags were successfully created (true) or not (false). | Small, 54.0 | 54.0 |
| isSuccess | Boolean | Indicates whether the create request was successful (true) or not (false). | Small, 54.0 | 54.0 |
| tagId | String | The ID of Interest Tags that were created. | Small, 54.0 | 54.0 |

## Code Examples

```
{
  "results" : [ 
   {
    "isCreated" : true,
    "isSuccess" : true,
    "tagId" : "0qOxx0000004DJcEAM"
  },
 {
    "isCreated" : true,
    "isSuccess" : true,
    "tagId" : "0qOxx0000004DbscEAM"
  } 
]
}
```
