---
title: "Order Summary"
domain: chatterapi
topic: order-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.123Z
estimatedTokens: 380
keywords: [Order, Summary]
---

# Order Summary

> Order summary information.

# Order Summary

Order summary information.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| adjustment​Aggregates | Order Summary ​Adjustment Aggregates | Adjustment aggregates associated with the order summary. | Small, 55.0 | 55.0 |
| createdDate | String | Created date of the order summary. | Small, 51.0 | 51.0 |
| currencyIsoCode | String | Three-letter ISO 4217 currency code associated with the order summary record. | Small, 57.0 | 57.0 |
| fields | Map<String, ​Record Field> | Map of requested order summary fields. | Small, 51.0 | 51.0 |
| orderNumber | String | Order number of the order summary. | Small, 51.0 | 51.0 |
| orderProductTop​LevelLineCount | Integer | Count of top level order product line summaries. | Small, 62.0 | 62.0 |
| orderSummaryId | String | ID of the order summary. | Small, 51.0 | 51.0 |
| orderedDate | String | Ordered date of the order summary. | Small, 51.0 | 51.0 |
| ownerId | String | ID of the owner of the order summary. | Small, 51.0 | 51.0 |
| products | Order Summary ​Product Lookup[] | Order summary product lookup details. | Small, 61.0 | 61.0 |
| status | String | Status of the order summary. | Small, 51.0 | 51.0 |
| totalAmount | String | Total amount of the order summary. | Small, 51.0 | 51.0 |

#### See Also

-   [Order Summary Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_collection.htm "Collection of order summaries.")

## Code Examples

```
[
  {
    "adjustmentAggregates": null,
    "createdDate": "2024-03-08T07:28:32.000Z",
    "currencyIsoCode": "USD",
    "fields": {
      "AccountId": {
        "label": "Account ID",
        "text": "001OK000001o5FtYAI",
        "type": "reference"
      }
    },
    "orderNumber": "00000110",
    "orderProductTopLevelLineCount": 1,
    "orderSummaryId": "1OsOK00000006Sh0AI",
    "orderedDate": "2023-10-02T11:03:27.000Z",
    "ownerId": "005OK000000JZklYAG",
    "products": [
      {
        "canViewProduct": true,
        "errorCode": null,
        "errorMessage": null,
        "fields": {},
        "id": "01tOK000000EUprYAG",
        "media": {
          "alternateText": "Default Image",
          "contentVersionId": null,
          "id": null,
          "mediaType": null,
          "sortOrder": null,
          "thumbnailUrl": null,
          "title": "/northerntrailoutfitters.com/nto-alpine-nutrition/default/images/large/alpine-blends-gobrew-coffee-wholebean-frenchroast.jpg",
          "url": "https://s3.amazonaws.com/northerntrailoutfitters.com/nto-alpine-nutrition/default/images/large/alpine-blends-gobrew-coffee-wholebean-frenchroast.jpg"
        },
        "variationAttributes": {}
      }
    ],
    "status": "Created",
    "totalAmount": "26.98"
  },
  {
    "adjustmentAggregates": null,
    "createdDate": "2024-03-08T07:28:32.000Z",
    "currencyIsoCode": "USD",
    "fields": {
      "AccountId": {
        "label": "Account ID",
        "text": "001OK000001o5FtYAI",
        "type": "reference"
      }
    },
    "orderNumber": "00000109",
    "orderProductTopLevelLineCount": 1,
    "orderSummaryId": "1OsOK00000006Sg0AI",
    "orderedDate": "2023-10-02T11:02:06.000Z",
    "ownerId": "005OK000000JZklYAG",
    "products": [
      {
        "canViewProduct": true,
        "errorCode": null,
        "errorMessage": null,
        "fields": {},
        "id": "01tOK000000EUpmYAG",
        "media": {
          "alternateText": "Default Image",
          "contentVersionId": null,
          "id": null,
          "mediaType": null,
          "sortOrder": null,
          "thumbnailUrl": "/img/b2b/default-product-image.svg",
          "title": null,
          "url": null
        },
        "variationAttributes": {}
      }
    ],
    "status": "Created",
    "totalAmount": "561.98"
  }
]
```

## Related Topics

- Order Summary ​Adjustment Aggregates (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_adjustment_aggregates.htm)
- ​Record Field (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_recordField.htm)
- Order Summary
                  ​Product Lookup (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_product_lookup_output.htm)
- Order Summary Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_collection.htm)
