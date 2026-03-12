---
title: "Address Input"
domain: financial-services-cloud-object-reference
topic: address-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.239Z
estimatedTokens: 129
keywords: [Address, Input]
---

# Address Input

> Represents address details.

# Address Input

Represents address details.

Root XML tag

<address>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| city | String | The address city. | Optional | 48.0 |
| country | String | The address country. | Optional | 48.0 |
| postalCode | String | The address postal code. | Optional | 48.0 |
| state | String | The address state. | Optional | 48.0 |
| street | String | The address street. | Optional | 48.0 |

## Code Examples

```
{
  "city": "San Francisco",
  "country": "United States",
  "postalCode": "94105",
  "state": "CA",
  "street": "50 Fremont Street"
}
```
