---
title: "Addresses"
domain: revenue-cloud
topic: addresses
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.301Z
estimatedTokens: 121
keywords: [Addresses, Output, representation, details, addresses, used, calculating, tax.]
---

# Addresses

> Output representation of the details of the addresses that are used for calculating
    tax.

# Addresses

Output representation of the details of the addresses that are used for calculating tax.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| shipFrom | Address | Address that the item is shipped from. | Big, 62.0 | 62.0 |
| shipTo | Address | Address that the item is shipped to. | Big, 62.0 | 62.0 |
| soldTo | Address | Address that the item is sold to. | Big, 62.0 | 62.0 |

## Code Examples

```
{
  "addresses": {
    "shipFrom": {
      "locationCode": "67890"
    },
    "shipTo": {
      "locationCode": "12345"
    },
    "soldTo": {
      "locationCode": "12345"
    }
  }
}
```

## Related Topics

- Address (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_address_output.htm)
