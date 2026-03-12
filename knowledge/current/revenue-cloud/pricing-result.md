---
title: "Pricing Result"
domain: revenue-cloud
topic: pricing-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.599Z
estimatedTokens: 252
keywords: [Pricing, Result, Output, representation, pricing, result.]
---

# Pricing Result

> Output representation of the pricing result.

# Pricing Result

Output representation of the pricing result.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataPath | String | Includes the entire data route for the specific element starting from the root node. The request must include the ID to construct the accurate data route.For example, if a jsonDataString property comprises a Cart [Id = Cart1] and its associated Cart Item [Id = CartItem1], then the data route for CartItem appears as [Cart1, CartItem1]. | Small, 60.0 | 60.0 |
| errors | Pricing Error Response[] | Displays processing errors related to the element as recognized by the data path. | Small, 60.0 | 60.0 |
| isSuccess | Boolean | Displays if processing of the element for the specified data path is successful or not. | Small, 60.0 | 60.0 |
| value | Object | Displays the value of the element into consideration. Element is uniquely identify by the data path. | Small, 60.0 | 60.0 |

## Code Examples

```
"pricingResult": {
"subtotal": [
{
"dataPath": [
"cart_1001",
"lineItem_1002"
],
"value": 300.0,
"errors": [],
"isSuccess": true
},
{
"dataPath": [
"cart_1001",
"lineItem_1001"
],
"value":400.0,
"errors": [],
"isSuccess": true
}
],
"netunitprice": [
{
"dataPath": [
"cart_1001",
"lineItem_1002"
],
"value": xx,
"errors": [],
"isSuccess": true
},
{
"dataPath": [
"cart_1001",
"lineItem_1001"
],
"value": xx,
"errors": [],
"isSuccess": true
}
]
}
```

## Related Topics

- Pricing Error Response[] (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_error_response.htm)
