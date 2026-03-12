---
title: "Store Taxes Info"
domain: chatterapi
topic: store-taxes-info
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.794Z
estimatedTokens: 133
keywords: [Store, Taxes, Info, Output, representation, tax, along, collection, product]
---

# Store Taxes Info

> Output representation of the tax type along with a collection of tax
      details about a product.

# Store Taxes Info

Output representation of the tax type along with a collection of tax details about a product.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| taxLocaleType | String | Tax type of the store. Possible values are:Gross—Prices include tax.Net—Prices don’t include tax.. | Small, 56.0 | 56.0 |
| taxesInfo | Map<String, Taxes Info Container> | Tax rate and tax treatment information for the store. | Small, 56.0 | 56.0 |

## Code Examples

```
{
  "taxLocaleType": "Gross",
  "taxesInfo": {
    "01tPI0000003fLBYAY": {
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
  }
}
```

## Related Topics

- Taxes Info Container (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_commerce_tax_info_container.htm)
