---
title: "Commerce Subscription Collection"
domain: chatterapi
topic: commerce-subscription-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.843Z
estimatedTokens: 316
keywords: [Commerce, Subscription, Collection, Representation, subscriptions]
---

# Commerce Subscription Collection

> Representation for the Commerce subscriptions collection.

# Commerce Subscription Collection

Representation for the Commerce subscriptions collection.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | Total number of subscriptions returned only on the current page. | Small, 63.0 | 63.0 |
| currentPage​Token | String | Token for the current page of subscriptions. | Small, 63.0 | 63.0 |
| currentPage​Url | String | URL to the current page of subscriptions. | Small, 63.0 | 63.0 |
| nextPageToken | String | Token for the next page of subscriptions. | Small, 63.0 | 63.0 |
| nextPageUrl | String | URL to the next page of subscriptions. | Small, 63.0 | 63.0 |
| previousPage​Token | String | Token for the previous page of subscriptions. | Small, 63.0 | 63.0 |
| previousPage​Url | String | URL to the previous page of subscriptions. | Small, 63.0 | 63.0 |
| sortOrder | String | Sort order of the subscription results returned in the page. Possible values are:CreatedDateAsc—Sort in ascending order of created date.CreatedDateDesc—Sort in descending order of created date. | Small, 63.0 | 63.0 |
| subscriptions | Commerce Subscription Detail[] | Details of Commerce subscriptions. | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "count": 2,
  "currentPageToken": null,
  "currentPageUrl": "/services/data/v66.0/commerce/webstores/0ZExx0000000001/subscriptions?effectiveAccountId=001xx000003GZ4l&pageSize=25&sortOrder=CreatedDateDesc",
  "nextPageToken": null,
  "nextPageUrl": null,
  "previousPageToken": null,
  "previousPageUrl": null,
  "sortOrder": "CreatedDateDesc",
  "subscriptions": [
    {
      "amendmentStatus": null,
      "billing": {
        "billingMethod": "OrderAmount",
        "billingPeriodAmount": "38.0",
        "billingTerm": 1,
        "billingTermUnit": "Month",
        "billingType": "Advance",
        "cancellationDate": null,
        "currencyIsoCode": "USD",
        "nextBillingDate": null,
        "savedPaymentMethod": null
      },
      "cancelStatus": null,
      "endDate": "2025-10-25T23:59:59.000+0000",
      "id": "02ixx0000004HxeAAE",
      "lastAction": {
        "details": {
          "changes": [
            {
              "field": "quantity",
              "previousValue": 2,
              "newValue": 1
            }
          ],
          "errors": null,
          "status": "Success"
        },
        "effectiveDateTime": "2025-12-20",
        "performedDateTime": "2025-11-20T09:39:59.000Z",
        "type": "Amend"
      },
      "processExceptions": [],
      "product": {
        "canViewProduct": true,
        "error": null,
        "fields": {
          "Description": {
            "dataName": "Description",
            "dataType": "STANDARD",
            "label": "Description",
            "text": "A signature Alpine health and fitness beverage. This post-workout beverage with Chai flavor is designed to help athletes maximize recovery and gains. 0.5L PET",
            "type": "TEXTAREA"
          },
          "StockKeepingUnit": {
            "dataName": "StockKeepingUnit",
            "dataType": "STANDARD",
            "label": "StockKeepingUnit",
            "text": "6010009",
            "type": "STRING"
          },
          "Name": {
            "dataName": "Name",
            "dataType": "STANDARD",
            "label": "Name",
            "text": "Netflix subscription",
            "type": "STRING"
          }
        },
        "id": "01txx0000006i2SAAQ",
        "image": {
          "alternateText": "",
          "contentVersionId": null,
          "id": "2pmxx0000000003AAA",
          "mediaType": "Image",
          "sortOrder": 0,
          "thumbnailUrl": null,
          "title": "/northerntrailoutfitters.com/nto-alpine-nutrition/default/images/large/6Pack-Chai-Post-Large.jpg",
          "url": "https://s3.amazonaws.com/northerntrailoutfitters.com/nto-alpine-nutrition/default/images/large/6Pack-Chai-Post-Large.jpg"
        },
        "name": "Netflix subscription",
        "purchaseQuantityRule": {
          "increment": "1.0",
          "maximum": "8",
          "minimum": "1.0"
        },
        "sku": "6010009",
        "success": true,
        "variationAttributes": []
      },
      "quantity": 2,
      "renewalStatus": null,
      "sellingModel": {
        "id": "0jPxx0000000002EAA",
        "name": "Term - Monthly",
        "pricingTerm": 1,
        "pricingTermUnit": "Months",
        "sellingModelType": "TermDefined"
      },
      "startDate": "2025-09-26T00:00:00.000+0000",
      "subscriptionTerm": 1
    },
    {
      "amendmentStatus": null,
      "billing": null,
      "cancelStatus": null,
      "endDate": "2026-01-24T23:59:59.000+0000",
      "id": "02ixx0000004HKwAAM",
      "lastAction": null,
      "processExceptions": [],
      "product": {
        "canViewProduct": true,
        "error": null,
        "fields": {
          "Description": {
            "dataName": "Description",
            "dataType": "STANDARD",
            "label": "Description",
            "text": "A signature Alpine health and fitness beverage. This post-workout beverage with Chai flavor is designed to help athletes maximize recovery and gains. 0.5L PET",
            "type": "TEXTAREA"
          },
          "StockKeepingUnit": {
            "dataName": "StockKeepingUnit",
            "dataType": "STANDARD",
            "label": "StockKeepingUnit",
            "text": "6010009",
            "type": "STRING"
          },
          "Name": {
            "dataName": "Name",
            "dataType": "STANDARD",
            "label": "Name",
            "text": "Netflix subscription",
            "type": "STRING"
          }
        },
        "id": "01txx0000006i2SAAQ",
        "image": {
          "alternateText": "",
          "contentVersionId": null,
          "id": "2pmxx0000000003AAA",
          "mediaType": "Image",
          "sortOrder": 0,
          "thumbnailUrl": null,
          "title": "/northerntrailoutfitters.com/nto-alpine-nutrition/default/images/large/6Pack-Chai-Post-Large.jpg",
          "url": "https://s3.amazonaws.com/northerntrailoutfitters.com/nto-alpine-nutrition/default/images/large/6Pack-Chai-Post-Large.jpg"
        },
        "name": "Netflix subscription",
        "purchaseQuantityRule": {
          "increment": "1.0",
          "maximum": "8",
          "minimum": "1.0"
        },
        "sku": "6010009",
        "success": true,
        "variationAttributes": []
      },
      "quantity": 2,
      "renewalStatus": null,
      "sellingModel": {
        "id": "0jPxx0000000002EAA",
        "name": "Term - Monthly",
        "pricingTerm": 1,
        "pricingTermUnit": "Months",
        "sellingModelType": "TermDefined"
      },
      "startDate": "2025-09-25T00:00:00.000+0000",
      "subscriptionTerm": 4
    }
  ]
}
```

## Related Topics

- Commerce Subscription
                  Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_subscription_detail.htm)
