---
title: "Address Input"
domain: health-cloud-object-reference
topic: address-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:32.732Z
estimatedTokens: 293
keywords: [Address, Input, detailed, facility, search, criteria]
---

# Address Input

> The detailed address information for a facility used as search criteria.

# Address Input

The detailed address information for a facility used as search criteria.

JSON Example

```

```

Properties

| Property Name | Type | Description | Required |
| --- | --- | --- | --- |
| addressText | String | The complete address in a single text string. | Optional |
| streetLines | Array of Strings | An array of strings representing the street address lines, including building number, street name, and apartment/suite/P.O. Box details. | Optional |
| city | String | The name of the city, town, or locality. | Optional |
| district | String | The district, county, or administrative area. | Optional |
| stateProvince | String | The full name or standard abbreviation of the state, province, or region. | Optional |
| postalCode | String | The postal code, ZIP code, or postcode relevant to the address. | Optional |
| country | String | The country of the address, ideally a two-letter (ISO 3166-1 alpha-2) or three-letter (ISO 3166-1 alpha-3) country code. | Optional |
| latitude | Number | The geographical latitude coordinate of the address. | Optional |
| longitude | Number | The geographical longitude coordinate of the address. | Optional |

## Code Examples

```
{
  "facilityAddress": {
    "addressText": "1000 Main Street, Suite 200, Springfield, IL 62704, USA",
    "streetLines": [
      "1000 Main Street",
      "Suite 200"
    ],
    "city": "Springfield",
    "district": "Sangamon County",
    "stateProvince": "IL",
    "postalCode": "62704",
    "country": "USA",
    "latitude": 39.7990,
    "longitude": -89.6586
  }
}
```
