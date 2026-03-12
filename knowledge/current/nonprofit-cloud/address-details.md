---
title: "Address Details"
domain: nonprofit-cloud
topic: address-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:00.645Z
estimatedTokens: 132
keywords: [Address, Input, representation, donor's]
---

# Address Details

> Input representation of the donor's address details.

# Address Details

Input representation of the donor's address details.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| city | String | City of the donor. | Required | 60.0 |
| country | String | Country of the donor. | Required | 60.0 |
| postalCode | String | Postal code of the donor. | Required | 60.0 |
| state | String | State of the donor. | Required | 60.0 |
| street | String | Street name of the donor. | Required | 60.0 |

## Code Examples

```
{
  "street": "123 Main Street",
  "city": "Oakland",
  "state": "CA",
  "postalCode": "94610",
  "country": "US"
}
```
