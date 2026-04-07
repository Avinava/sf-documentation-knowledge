---
title: "Filter Input"
domain: comms-developer-guide
topic: filter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:39.102Z
estimatedTokens: 78
keywords: [Filter, Input, representation, records]
---

# Filter Input

> Input representation of the request to filter records.

# Filter Input

Input representation of the request to filter records.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | Filter Criteria Input[] | Filter criteria to filter the records. | Optional | 60.0 |

## Code Examples

```
"filter":
 {"criteria":
 [ {
   "attributeType": "ProductStandard",
   "property": "name",
   "operator": "eq",
   "value": "iPhone"
 }]}
```

## Related Topics

- Filter Criteria
                        Input (atlas.en-us.comms_developer_guide.meta/comms_developer_guide/connect_requests_filter_criteria_input.htm)
