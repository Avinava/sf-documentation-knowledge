---
title: "Promotion Recommendations (POST)"
domain: loyalty
topic: promotion-recommendations-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:51.180Z
estimatedTokens: 661
keywords: [Promotion, Recommendations, POST, Retrieve, promotions, recommended, customer, loyalty, program, member, product, personalization, point]
---

# Promotion Recommendations (POST)

> Retrieve the list of promotions recommended for a customer or a loyalty program member
    based on the product and personalization point.

# Promotion Recommendations (POST)

Retrieve the list of promotions recommended for a customer or a loyalty program member based on the product and personalization point.

Resource

```

```

Resource Example

```

```

Available version

64.0

HTTP methods

POST

Query Parameters

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| count | Integer | The maximum number of promotion recommendations to retrieve. | Optional | 64.0 |
| promotions​PerProduct​Limit | Integer | The maximum number of promotions that can be recommended for a product. (Note: The count supersedes the limit, suggesting that in case we put a limit of 3 for each product but it doesn't fullfill the count, it will display more promotions which depends on the count parameter) | Optional | 64.0 |

Request body for POST

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| dataspace | String | The data space that defines the boundary of a personalization context. This API currently only works with your Data Cloud instance's default data space. | Required | 64.0 |
| eligible​Channel | Channel Input | The details of a channel for which to retrieve eligible promotions. | Optional | 64.0 |
| individual​Id | String | The ID of the of the individual for whom to retrieve recommended promotions. Optional if membership number or loyalty program member ID is provided. | Optional if membership number or loyalty program member ID is provided. | 64.0 |
| loyalty​ProgramId | String | The loyalty program that the loyalty program member belongs to. The loyalty program ID is required when membership number is specified. | Required when membership number is specified. | 64.0 |
| loyalty​Program​MemberId | String | The ID of the of the loyalty program member for whom to retrieve recommended promotions. Optional if membership number or contact ID is provided. | Optional if membership number or contact ID is provided. | 64.0 |
| membership​Number | String | The membership number of the loyalty program member for whom to retrieve recommended promotions. | Optional | 64.0 |
| personalization​Point | String | The API name of the personalization point. A personalization point is a connection between data, profile data, personalization type, and schema, used to deliver personalized content to customers. | Required | 64.0 |

Response body for POST

[Promotion Recommendations](atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_recommendation.htm "The count and list of promotions recommended for the member or customer.")

## Code Examples

```
/promotions/recommendation/product-promotion
```

```
https://yourInstance.salesforce.com/services/data/v66.0/promotions/recommendation/product-promotion?count=3&promotionsPerProductLimit=4
```

```
{
  "personalizationPoint": "string",
  "dataspace": "string",
  "membershipNumber": "string",
  "loyaltyProgramId": "string",
  "loyaltyProgramMemberId": "string",
  "individualId": "string",
  "eligibleChannel": {
    "channel": {
      "id": "string",
      "name": "string"
    },
    "retailStore": {
      "id": "string",
      "name": "string"
    }
  }
}
```

## Related Topics

- Channel Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_channel_inpu.htm)
- Promotion Recommendations (atlas.en-us.loyalty.meta/loyalty/connect_responses_promotion_recommendation.htm)
