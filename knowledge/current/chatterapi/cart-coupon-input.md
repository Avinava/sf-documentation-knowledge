---
title: "Cart Coupon Input"
domain: chatterapi
topic: cart-coupon-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.184Z
estimatedTokens: 194
keywords: [Cart, Coupon, Input]
---

# Cart Coupon Input

> A cart coupon input.

# Cart Coupon Input

A cart coupon input.

Root XML tag

<cartCouponInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| couponCode | String | Coupon code. | Required | 54.0 |
| customFields | sObject Attributes Input[] | An array of sObjects and their associated custom fields. Standard fields are ignored. The custom fields must already be defined for the sObject. Currently, only the WebCart and WebCartAdjustmentBasis sObjects is supported. Field-level security rules configured by the web store admin in the shopper profileshopper profile are applied to the custom fields. The rules are applied for registered shoppers and for the guest shopper profile. | Optional | 63.0 |

## Code Examples

```
{
  "couponCode": "COUP10",
  "customFields": [
    {
      "attributes": {
        "type": "WebCartAdjustmentBasis"
      },
      "Test__C": "test@salesforce.com"
    }
  ]
}
```

## Related Topics

- sObject
                        Attributes Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_sobject_attributes_input.htm)
