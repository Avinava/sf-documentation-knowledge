---
title: "Calculate Taxes Input"
domain: chatterapi
topic: calculate-taxes-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.121Z
estimatedTokens: 193
keywords: [Calculate, Taxes, Input, tax]
---

# Calculate Taxes Input

> Calculate tax input.

# Calculate Taxes Input

Calculate tax input.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| calculatebyTaxClass | Boolean | Flag representing if taxes are calculated based on tax class. | Optional | 58.0 |
| currencyIsoCode | String | ISO code of the country. Must match one of the valid ISO codes defined within the org’s State-Country picklist. If unspecified, the default value is the default country for the webstore. | Required when multi-currency is enabled | 58.0 |
| effectiveAccountId | String | The ID of the account for which the request is made. | Required | 58.0 |
| lineItemGroups | List | List of line items grouped by shipping address. | Required | 58.0 |

## Code Examples

```
{
  "currencyIsoCode": "USD",
  "calculatebyTaxClass": false,
  "lineItemGroups": [
    {
      "shipToAddress": {
        "countryIsoCode": "US",
        "stateIsoCode": "CA"
      },
      "lineItems": [
        {
          "lineId": "lineId1",
          "productId": "01txx0000006pTkAAI",
          "quantity": "1",
          "unitPrice": "100",
          "totalPrice": "100",
          "adjustments": [
            {
              "id": "lineAdjustment1",
              "type": "promotional",
              "amount": "-10"
            },
            {
              "id": "lineAdjustment2",
              "type": "tiered",
              "amount": "-5"
            }
          ]
        },
        {
          "lineId": "lineId2",
          "productId": "01txx0000006pTlAAI",
          "quantity": "4",
          "unitPrice": "50",
          "totalPrice": "50"
        }
      ]
    }
  ]
}
```
