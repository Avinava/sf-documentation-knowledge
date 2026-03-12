---
title: "PBE Derived Pricing"
domain: revenue-cloud
topic: pbe-derived-pricing
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.524Z
estimatedTokens: 147
keywords: [PBE, Derived, Pricing, Output, representation, includes, source, product, Price, Book, Entry]
---

# PBE Derived Pricing

> Output representation of the response that includes the source product for the Price Book
    Entry (PBE) derived pricing.

# PBE Derived Pricing

Output representation of the response that includes the source product for the Price Book Entry (PBE) derived pricing.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Pricing Error Response[] | Displays the error while processing the request. | Small, 61.0 | 61.0 |
| isSuccess | Boolean | Indicates whether the request is successful (true) or not (false). | Small, 61.0 | 61.0 |
| source​ProceductId | String | ID of the source product. | Small, 61.0 | 61.0 |

## Code Examples

```
{
"productId":"01txx0000006i2SAAQ",
"pricebookEntryId":"01uxx0000008yYcAAI",
"effectiveFrom":"2020-01-01T22:53:20.000Z",
"effectiveTo":"2021-01-01T22:53:20.000Z"
}
```

## Related Topics

- Pricing Error Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_error_response.htm)
