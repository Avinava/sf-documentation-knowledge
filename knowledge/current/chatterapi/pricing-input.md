---
title: "Pricing Input"
domain: chatterapi
topic: pricing-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:09.710Z
estimatedTokens: 81
keywords: [Pricing, multiple, products]
---

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
