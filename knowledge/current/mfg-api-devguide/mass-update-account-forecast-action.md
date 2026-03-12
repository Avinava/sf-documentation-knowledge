---
title: "Mass Update Account Forecast Action"
domain: mfg-api-devguide
topic: mass-update-account-forecast-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:55.188Z
estimatedTokens: 406
keywords: [Mass, Account, Forecast, Action, different, products, periods, REST, HTTP, Inputs, Usage]
---

# Mass Update Account Forecast Action

> Mass update account forecast fields for different products and periods
   with this single action.

# Mass Update Account Forecast Action

Mass update account forecast fields for different products and periods with this single action.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mfg_api_devguide)

#### Note

These actions update the forecast data in your Salesforce org. You must perform a database rollback to undo these actions.

This object is available in API version 48.0 and later for users with Manufacturing Cloud license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/massUpdateAccountForecast

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| entityId | TypestringDescriptionThe ID of the forecast to mass update. |
| fieldToUpdate | TypestringDescriptionThe developer name of an account product period forecast. For example, ForecastedQuantity |
| periods | TypeanyTypeDescriptionComma-separated list of period IDs. |
| products | TypeanyTypeDescriptionComma-separated list of account forecast product IDs. |
| operation | TypestringDescriptionOperation for mass update. Valid values are IncreaseBy DecreaseBy ReplaceWith. |
| numericvalue | TypedoubleDescriptionNumeric value to use in the operation for mass update. Can be any number up to 15 digits. |
| numericValueType | TypestringDescriptionType of operation for mass update. Valid values are Percentage Absolute. |
| adjNote | TypestringDescriptionAny comments on the mass update operation. |

## Usage

**Sample Request**

The following example shows how to mass update forecast fields:

```

```

## Code Examples

```
{
“entityId”: “a07B0000007qbQOIAY”,
“fieldToUpdate”: “DiscountPercentage”,
“periods”: “[”a07B0000007qbQOIAY“,”a07B0000007qbQOIAY“]”,
“products”: “[”a07B0000007qbQOIAY“,”a07B0000007qbQOIAY“]”,
“operation”: “ReplaceWith”,
“numericvalue”: 10,
“numericValueType”: “Percentage”,
“adjNote”: “Percentage updated.”
}
```
