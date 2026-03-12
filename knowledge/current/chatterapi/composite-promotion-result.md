---
title: "Composite Promotion Result"
domain: chatterapi
topic: composite-promotion-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.930Z
estimatedTokens: 295
keywords: [Composite, Promotion, Result, Output, representation]
---

# Composite Promotion Result

> Output representation of composite promotion create request.

# Composite Promotion Result

Output representation of composite promotion create request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | String[] | Any error messages that were returned by the API. | Small, 62.0 | 62.0 |
| promotionId | String | ID of the promotion record created after the API request is successful. | Small, 62.0 | 62.0 |
| success | Boolean | Indicates whether the API request was successful (true) or not (false). | Small, 62.0 | 62.0 |

#### See Also

-   [*Connect REST API Developer Guide*: Commerce Webstore Composite Promotions](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_commerce_composite_promotions.htm "Connect REST API Developer Guide: Commerce Webstore Composite Promotions  - HTML (New Window)")

-   [*Connect REST API Developer Guide*: Composite Promotion Input](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_requests_composite_promotion_input.htm "Connect REST API Developer Guide: Composite Promotion Input  - HTML (New Window)")

## Code Examples

```
{
   "promotionId": "0c8RO0000000veWYAQ",
   "success": true,
   "errors": []
}
```
