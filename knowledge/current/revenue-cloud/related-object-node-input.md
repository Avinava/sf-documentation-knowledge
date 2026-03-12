---
title: "Related Object Node Input"
domain: revenue-cloud
topic: related-object-node-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.268Z
estimatedTokens: 244
keywords: [Node, Input, representation]
---

# Related Object Node Input

> Input representation of the details of a related object node.

# Related Object Node Input

Input representation of the details of a related object node.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filter | Criteria[] | Criteria to filter records. The supported properties are:StartDateEndDateStatusThe supported operators are:eqgtelteThe supported related object is ProductUsageGrant.If multiple criteria are specified, then the resultant criteria are combined by using the and operator. | Optional | 62.0 |
| offSet | Integer | Number of records to skip. The default value is 0. | Optional | 62.0 |
| pageSize | Integer | Number of records per page. Valid values are from 1 through 100. If unspecified, the default value is 100. | Optional | 62.0 |
| relatedObject​APIName | String | API name of the related object to return the records for. The supported related objects are ProductRampSegment and ProductUsageGrant. | Required | 62.0 |

## Code Examples

```
"relatedObjectNodes": [
    {
      "relatedObjectAPIName": "ProductRampSegment",
      "pageSize": 20,
      "offSet": 0
    },
    {
      "relatedObjectAPIName": "ProductUsageGrant",
      "pageSize": 10,
      "offSet": 0,
      "filter": {
        "criteria": [
          {
            "property": "status",
            "operator": "eq",
            "value": "active"
          },
          {
            "property": "effectivestartdate",
            "operator": "lte",
            "value": "2024-06-25"
          },
          {
            "criteriaType": "CustomWhereCondition",
            "value": "(effectiveenddate = null OR effectiveenddate >= 2024-06-25)"
          }
        ]
      }
    }
  ]
```

## Related Topics

- Criteria (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_criteria.htm)
