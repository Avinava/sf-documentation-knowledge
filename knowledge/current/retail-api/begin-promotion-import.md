---
title: "Begin Promotion Import"
domain: retail-api
topic: begin-promotion-import
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:36.664Z
estimatedTokens: 345
keywords: [Begin, Promotion, Import, endpoint, initializes, external, system, group, promotions, retrieved, thie, end, point, announces, number]
---

# Begin Promotion Import

> This endpoint initializes a promotion import from an external
      system. You can group a set of promotions using the import ID, retrieved by thie end point.
      This endpoint announces that the import contains a specified number of promotions to be
      processed. The system can import the promotions, create, and update them, and trigger a
      promotion calculation for the given promotions. The status of the import can be monitored with
      the GET_PROMOTION_IMPORT_STATUS
    endpoint.

# Begin Promotion Import

This endpoint initializes a promotion import from an external system. You can group a set of promotions using the import ID, retrieved by thie end point. This endpoint announces that the import contains a specified number of promotions to be processed. The system can import the promotions, create, and update them, and trigger a promotion calculation for the given promotions. The status of the import can be monitored with the GET\_PROMOTION\_IMPORT\_STATUS endpoint.

Resource

```

```

Available version

55

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| nrOfItems | Integer | Number of items that are imported under the given handle.Minimum Value : 1Maximum Value: 10000 | Required | 55 |
| timeout | Integer | Indicates the timeout in seconds. In the event of a time out, no further messages will be accepted for the import IDs.The default value is 300 seconds. | Optional | 55 |
| salesOrg | SalesOrgName | Indicates the name of the sales organization. | Required | 55 |

Response body for POST

[Begin Promotion Import Output Representation](atlas.en-us.retail_api.meta/retail_api/connect_begin_promotion_imports_output.htm "Output representation of the promotion import request.")

## Code Examples

```
promotions/initialize
```

```
{
    "nrOfItems": 500,
    "salesOrg": "0001"
}
```

## Related Topics

- Begin Promotion
              Import Output Representation (atlas.en-us.retail_api.meta/retail_api/connect_begin_promotion_imports_output.htm)
