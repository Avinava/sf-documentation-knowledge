---
title: "Order Summary Collection"
domain: chatterapi
topic: order-summary-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.146Z
estimatedTokens: 352
keywords: [Order, Summary, Collection, summaries]
---

# Order Summary Collection

> Collection of order summaries.

# Order Summary Collection

Collection of order summaries.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | Total count of order summaries returned on the current page. | Small, 51.0 | 51.0 |
| currentPageToken | String | Token identifying the current page. | Small, 51.0 | 51.0 |
| currentPageUrl | String | Connect REST API URL identifying the current page. | Small, 51.0 | 51.0 |
| nextPageToken | String | Token identifying the next page, or null if there isn’t a next page. | Small, 51.0 | 51.0 |
| nextPageUrl | String | Connect REST API URL identifying the next page, or null if there isn’t a next page. | Small, 51.0 | 51.0 |
| orderSummaries | Order Summary[] | Collection of order summaries. | Small, 51.0 | 51.0 |
| previousPageToken | String | Token identifying the previous page, or null if there isn’t a previous page. | Small, 51.0 | 51.0 |
| previousPageUrl | String | Connect REST API URL identifying the previous page, or null if there isn’t a previous page. | Small, 51.0 | 51.0 |
| sortOrder | String | Sort order for order summaries. Values are:CreatedDateAsc—Sorts by the oldest created date.CreatedDateDesc—Sorts by the most recent created date.OrderedDateAsc—Sorts by the oldest ordered date.OrderedDateDesc—Sorts by the most recent ordered date. | Small, 51.0 | 51.0 |

## Code Examples

```
{
  "count": 2,
  "currentPageToken": null,
  "currentPageUrl": "/services/data/v66.0/commerce/webstores/0ZEOK00000008vK/order-summaries?​effectiveAccountId=001OK000001o5Ft&fields=AccountId&includeAdjustmentDetails=false&includeProducts=true​&ownerScoped=false&pageSize=25&sortOrder=OrderedDateDesc",
  "nextPageToken": null,
  "nextPageUrl": null,
  "orderSummaries": [
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
            "thumbnailUrl": "/img/b2b/default-product-image.svg",
            "title": null,
            "url": null
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
  ],
  "previousPageToken": null,
  "previousPageUrl": null,
  "sortOrder": "OrderedDateDesc"
}
```

## Related Topics

- Order Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary.htm)
