---
title: "Address Input"
domain: revenue-cloud
topic: address-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.622Z
estimatedTokens: 183
keywords: [Address, Input, representation, details, address.]
---

# Address Input

> Input representation of the details of an address.

# Address Input

Input representation of the details of an address.

JSON example

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| city | String | Address city. | Optional | 62.0 |
| country | String | Address country. | Optional | 62.0 |
| latitude | Double | Latitude for the address. | Optional | 62.0 |
| locationCode | String | Location code for the address. | Optional | 62.0 |
| longitude | Double | Longitude for the address. | Optional | 62.0 |
| postalCode | String | Postal code for the address. | Optional | 62.0 |
| state | String | Address state. | Optional | 62.0 |
| street | String | Address street. | Optional | 62.0 |

## Code Examples

```
"billingAddress": {
    "street": "1 Market St #300",
    "city": "San Francisco",
    "state": "CA",
    "country": "US",
    "postalCode": "94105",
    "latitude": "37.789901",
    "longitude": "-122.396923"
  }
```
