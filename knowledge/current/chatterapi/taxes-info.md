---
title: "Taxes Info"
domain: chatterapi
topic: taxes-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.856Z
estimatedTokens: 190
keywords: [Taxes, Info, Output, representation, tax, rate, treatment, product]
---

# Taxes Info

> Output representation of the tax rate and tax treatment information
      for a product.

# Taxes Info

Output representation of the tax rate and tax treatment information for a product.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| countryIsoCode | String | ISO code of the country. | Small, 56.0 | 56.0 |
| stateIsoCode | String | ISO code of the state. | Small, 56.0 | 56.0 |
| priority | Integer | Priority of the tax treatment. | Small, 56.0 | 56.0 |
| taxRate​Percentage | String | Tax rate percentage for the store. | Small, 56.0 | 56.0 |
| taxTreatment​Description | String | Description of the tax treatment for the store. | Small, 56.0 | 56.0 |
| taxTreatmentName | String | Name of the tax treatment for the store. | Small, 56.0 | 56.0 |

## Code Examples

```
{
  "countryIsoCode": "US",
  "priority": 1,
  "stateIsoCode": "CA",
  "taxRatePercentage": "10.00",
  "taxTreatmentDescription": "Created for test purposes.",
  "taxTreatmentName": "Default Tax treatment"
}
```
