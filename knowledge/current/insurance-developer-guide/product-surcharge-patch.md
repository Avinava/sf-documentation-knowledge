---
title: "Product Surcharge Patch"
domain: insurance-developer-guide
topic: product-surcharge-patch
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.749Z
estimatedTokens: 148
keywords: [Product, Surcharge, Patch, Output, representation]
---

# Product Surcharge Patch

> Output representation of product surcharge update.

# Product Surcharge Patch

Output representation of product surcharge update.

JSON example

This request shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Detail Output[] | List of errors encountered during the processing of the API request. | Big, 63.0 | 63.0 |
| isSuccess | Boolean | Indicates whether the API request is successful ( true) or not ( false). | Big, 63.0 | 63.0 |
| productSurchargeId | String | ID of the product surcharge. | Big, 63.0 | 63.0 |

## Code Examples

```
{
"errors":[]
"isSuccess":true
"productSurchargeId":"1Xrxx000000003F"
}
```

## Related Topics

- Error Detail Output (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_error_detail_output.htm)
