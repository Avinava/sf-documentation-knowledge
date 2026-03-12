---
title: "Credit Memo Addresses Input"
domain: revenue-cloud
topic: credit-memo-addresses-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.999Z
estimatedTokens: 115
keywords: [Credit, Memo, Addresses, Input, representation, details, billing, shipping, addresses.]
---

# Credit Memo Addresses Input

> Input representation of the details of the billing and shipping addresses.

# Credit Memo Addresses Input

Input representation of the details of the billing and shipping addresses.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billing​Address | Address Input[] | Billing address for charge or adjustment line. | Optional | 62.0 |
| shipping​Address | Address Input[] | Shipping address for charge or adjustment line. | Optional | 62.0 |

## Code Examples

```
{
  "billingAddress": {
    "street": "1 Market St #300",
    "city": "San Francisco",
    "state": "CA",
    "country": "US",
    "postalCode": "94105",
    "latitude": "37.789901",
    "longitude": "-122.396923"
  },
  "shippingAddress": {
    "street": "415 Mission St",
    "city": "San Francisco",
    "state": "CA",
    "country": "US",
    "postalCode": "94105",
    "latitude": "37.789901",
    "longitude": "-122.396923"
  }
}
```

## Related Topics

- Address Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_address_input.htm)
