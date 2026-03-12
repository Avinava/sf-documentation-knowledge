---
title: "Pricing Input"
domain: chatterapi
topic: pricing-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.505Z
estimatedTokens: 81
keywords: [Pricing, Input, multiple, products]
---

# Pricing Input

> Pricing for multiple products.

# Pricing Input

Pricing for multiple products.

Root XML tag

<PricingInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| pricingLine​Items | Pricing Line Item Input[] | Up to 500 line items for pricing. | Required | 49.0 |

## Code Examples

```
{
   "pricingLineItems":[
      {
         "productId":"01txx000000000V"
      },
      {
         "productId":"01txx000000000W"
      },
      {
         "productId":"01txx000000000A"
      }
   ]
}
```

## Related Topics

- Pricing Line Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_pricing_input_line_item.htm)
