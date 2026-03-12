---
title: "Related Records Input"
domain: revenue-cloud
topic: related-records-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.421Z
estimatedTokens: 214
keywords: [Related, Records, Input, representation, request, retrieve, related, ProductRampSegment, ProductUsageGrant, records, Product2, object.]
---

# Related Records Input

> Input representation of the request to retrieve related ProductRampSegment or
    ProductUsageGrant records for Product2 object.

# Related Records Input

Input representation of the request to retrieve related ProductRampSegment or ProductUsageGrant records for Product2 object.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Optional | 62.0 |
| recordIds | String[] | List of record IDs to return the relatedObjects records for. The maximum number of record IDs supported is 20. | Required | 62.0 |
| related​ObjectNodes | Related Object Node Input[] | List of nodes for the related objects. The maximum number of related object nodes supported is two. | Required | 62.0 |

## Code Examples

```
{
  "recordIds": [
    "01txx0000006i44AAA",
    "01txx0000006i5gAAA"
  ],
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
}
```

## Related Topics

- Related Object Node Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_related_object_node_input.htm)
