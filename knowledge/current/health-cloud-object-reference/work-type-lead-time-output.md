---
title: "Work Type Lead Time Output"
domain: health-cloud-object-reference
topic: work-type-lead-time-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:33.815Z
estimatedTokens: 164
keywords: [Work, Lead, Time, Output, representation, their, associated, times]
---

# Work Type Lead Time Output

> Output representation of a list of work types and their associated lead
    times.

# Work Type Lead Time Output

Output representation of a list of work types and their associated lead times.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| code | String | API response code. | Small, 60.0 | 60.0 |
| isSuccess | Boolean | Indicates whether the request was successful (true) or not (false). | Small, 60.0 | 60.0 |
| message | String | Error message when the request fails. | Small, 60.0 | 60.0 |
| workTypeLeadTimeMap | Map<String, Integer> | Key value pairs of work type IDs and their corresponding lead times in days. | Big, 60.0 | 60.0 |

## Code Examples

```
{
   "code":"202",
   "isSuccess":true,
   "message":"",
   "workTypeLeadTimeMap":{
      "08qxx0000004QlUAAU":1,
      "08qxx0000004QjsAAE":1,
      "08qxx0000004Qn6AAE":5
   }
}
```
