---
title: "OCI Product Check Availability Input"
domain: chatterapi
topic: oci-product-check-availability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.516Z
estimatedTokens: 100
keywords: [OCI, Product, Check, Availability, Input, needed, product’s]
---

# OCI Product Check Availability Input

> Information needed to check a product’s availability.

# OCI Product Check Availability Input

Information needed to check a product’s availability.

Root XML tag

<ProductCheckAvailabilityInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| product2Id | String | Product ID. | Required | 60.0 |
| quantity | Double | Number of products. | Required | 60.0 |

## Code Examples

```
{
  "product2Id": "01txx0000006i67AAA",
  "quantity": 100
}
```
