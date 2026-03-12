---
title: "Promotion Recommendation Input"
domain: loyalty
topic: promotion-recommendation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:50.983Z
estimatedTokens: 418
keywords: [Promotion, Recommendation, Input, representation, retrieve, recommended]
---

# Promotion Recommendation Input

> The input representation to retrieve the recommended promotion.

# Promotion Recommendation Input

The input representation to retrieve the recommended promotion.

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

## Related Topics

- Channel Input (atlas.en-us.loyalty.meta/loyalty/connect_requests_channel_inpu.htm)
