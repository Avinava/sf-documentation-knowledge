---
title: "Taxes Info Container"
domain: chatterapi
topic: taxes-info-container
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.859Z
estimatedTokens: 89
keywords: [Taxes, Info, Container, Outut, representation, tax, product]
---

# Taxes Info Container

> Outut representation of the list of tax details about a
      product.

# Taxes Info Container

Outut representation of the list of tax details about a product.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| taxesInfoList | Taxes Info[] | List of details about the tax rate and tax treatment for the store. | Small, 56.0 | 56.0 |

## Code Examples

```
{
  "taxesInfoList": [
    {
      "countryIsoCode": "US",
      "priority": 1,
      "stateIsoCode": "CA",
      "taxRatePercentage": "10.00",
      "taxTreatmentDescription": "Created for test purposes.",
      "taxTreatmentName": "Default Tax treatment"
    }
  ]
}
```

## Related Topics

- Taxes Info (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_tax_info.htm)
