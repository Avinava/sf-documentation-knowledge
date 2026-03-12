---
title: "Addresses Input"
domain: revenue-cloud
topic: addresses-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.626Z
estimatedTokens: 145
keywords: [Addresses, Input, representation, details, addresses, calculating, tax.]
---

# Addresses Input

> Input representation of the details of the addresses for calculating tax.

# Addresses Input

Input representation of the details of the addresses for calculating tax.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| billTo | Address Input | Billing address of the item. | Optional | 62.0 |
| shipFrom | Address Input | Address that the item is shipped from. | Optional | 62.0 |
| shipTo | Address Input | Address that the item is shipped to. | Required | 62.0 |
| soldTo | Address Input | Address of the entity that the item is sold to. | Optional | 62.0 |

## Code Examples

```
{
  "addresses": {
    "billTo": {
      "street": "123 Main Street",
      "city": "Bainbridge Island",
      "state": "WA",
      "postalCode": "98110",
      "country": "US"
    },
    "soldTo": {
      "street": "123 Main Street",
      "city": "Bainbridge Island",
      "state": "WA",
      "postalCode": "98110",
      "country": "US"
    },
    "shipFrom": {
      "street": "123 Alaskan Way",
      "city": "Seattle",
      "state": "WA",
      "country": "US",
      "postalCode": "98101"
    },
    "shipTo": {
      "street": "123 Main street",
      "city": "Bainbridge Island",
      "state": "WA",
      "postalCode": "98110",
      "country": "US"
    }
  }
}
```

## Related Topics

- Address
                      Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_address_input.htm)
