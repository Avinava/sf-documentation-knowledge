---
title: "Calculate Advanced Account Forecasts Action"
domain: mfg-api-devguide
topic: calculate-advanced-account-forecasts-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.917Z
estimatedTokens: 291
keywords: [Calculate, Advanced, Account, Forecasts, Action, formulae, associated, forecast, REST, HTTP, Inputs, Usage]
---

# Calculate Advanced Account Forecasts Action

> Calculate forecasts for an account based on the formulae associated
   with the forecast set.

# Calculate Advanced Account Forecasts Action

Calculate forecasts for an account based on the formulae associated with the forecast set.

For more information about calculating forecasts for an account, see [Use Manufacturing Actions in Flow Builder and Process Builder](https://help.salesforce.com/s/articleView?id=ind.admin_manufacturing_standard_invocable_actions.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

This object is available in API version 52.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/calculateAdvancedAccountForecast

Formats

JSON

HTTP Methods

GET, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| accountId | TypearrayDescriptionThe ID of the account record for which to calculate the forecasts. |
| forecastDataId | TypearrayDescriptionThe ID of the forecast data for which the forecast is being calculated. |
| forecastSetId | TypearrayDescriptionThe ID of the forecast set associated with the forecast formulae to be used for calculation. |

## Usage

**JSON Sample Request**

```

```

**JSON Sample Response**

```

```

## Code Examples

```
{
   "inputs":[{
      "forecastSetId":"0ni5sajb8347k3s",
      "accountId": "0yAxx00004000002AAA",
      "forecastDataId": "0r4ft8941574TRE78V"
   }]
}
```

```
[
{
   "errors":null,
   "isSuccess":true
}
]
```
