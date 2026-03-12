---
title: "Clone Promotion (POST)"
domain: loyalty
topic: clone-promotion-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.063Z
estimatedTokens: 352
keywords: [Clone, Promotion, POST, along, associated, records]
---

# Clone Promotion (POST)

> Clone an existing promotion along with its associated records

# Clone Promotion (POST)

Clone an existing promotion along with its associated records

Resource

```

```

Available version

61.0

HTTP methods

POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​FieldValues | Map<String, String> | Details of the promotion's additional fields. | Optional | 61.0 |
| doesReuse​EngagementAttributes | Boolean | Indicates whether the new promotion uses the engagement attributes created for the source promotion to track customers' promotion usage (true) or (not). Engagement reuse can result in shared limits. | Optional | 61.0 |
| endDateTime | String | End date and time of the new promotion. | Required | 61.0 |
| name | String | Name of the new promotion. | Required | 61.0 |
| promotionCode | String | Code of the new promotion. | Optional | 61.0 |
| relatedRecords | Related Promotion Records Input [] | Related record for the source promotion that have to be created for the new promotion. | Optional | 61.0 |
| source​PromotionId | String | ID of the promotion that's cloned. | Required | 61.0 |
| startDateTime | String | Start date and time of the new promotion. | Required | 61.0 |

Response body for POST

[Clone Promotion](atlas.en-us.loyalty.meta/loyalty/connect_responses_deep_clone_promotion.htm "Output representation of clone promotion request.")

## Code Examples

```
/promotions/clone
```

```
{
  "sourcePromotionId": "0c8xx00000000WHAAY",
  "name": "ups clone 4",
  "startDateTime": "2024-01-08T00:00:00.000Z",
  "endDateTime": "2024-01-09T00:00:00.000Z",
  "promotionCode": "sdfgy543wsd",
  "doesReuseEngagementAttributes":"true",
  "additionalFieldValues": {
    "additionalFieldValuesMap": {
      "Description": "test ups clone"
    }
  },
  "relatedRecords": {
    "relatedRecordsList": [
      {
        "relatedObjectApiName": "PromotionChannel",
        "relatedObjectPromotionFieldName": "PromotionId"
      },
      {
       "relatedObjectApiName": "PromotionLoyaltyPtnrProdt",
        "relatedObjectPromotionFieldName": "PromotionId"
      },
        {
       "relatedObjectApiName": "PromotionMarketSegment",
        "relatedObjectPromotionFieldName": "PromotionId"
      },
      {
        "relatedObjectApiName": "PromotionProduct",
        "relatedObjectPromotionFieldName": "PromotionId"
      },
      {
        "relatedObjectApiName": "PromotionProductCategory",
        "relatedObjectPromotionFieldName": "PromotionId"
      },
      {
        "relatedObjectApiName": "PromotionLimit",
        "relatedObjectPromotionFieldName": "PromotionId"
      }
    ]
  }
}
```

## Related Topics

- Related Promotion Records
                        Input [] (atlas.en-us.loyalty.meta/loyalty/connect_requests_related_promotion_records_input.htm)
- Clone
              Promotion (atlas.en-us.loyalty.meta/loyalty/connect_responses_deep_clone_promotion.htm)
