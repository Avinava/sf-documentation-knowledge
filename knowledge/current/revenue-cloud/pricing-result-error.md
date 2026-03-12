---
title: "Pricing Result Error"
domain: revenue-cloud
topic: pricing-result-error
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.602Z
estimatedTokens: 186
keywords: [Pricing, Result, Error, Output, representation, pricing, result, error.]
---

# Pricing Result Error

> Output representation of the pricing result error.

# Pricing Result Error

Output representation of the pricing result error.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataPath | String[] | Includes the entire data route for the specific element starting from the root node. The request must include the ID to construct the accurate data route.For example, if a jsonDataString property comprises a Cart [Id = Cart1] and its associated Cart Item [Id = CartItem1], then the data route for CartItem appears as [Cart1, CartItem1]. | Small, 60.0 | 60.0 |
| errors | Pricing Error Response | Displays processing errors related to the element as recognized by the data path. | Small, 60.0 | 60.0 |

## Code Examples

```
"pricingResultErrors": {
"Aggregateprice": [
{
"dataPath": [
"cart_1001",
],


"errors": [
{ 
“errorCode”: “Dummy”
“message”:
	}
       ]
   }
 ]
}
```

## Related Topics

- Pricing Error
                Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_error_response.htm)
