---
title: "Recalculate Forecasts Action"
domain: mfg-api-devguide
topic: recalculate-forecasts-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:55.202Z
estimatedTokens: 380
keywords: [Recalculate, Forecasts, Action, orders, opportunity, sales, agreement, figures, REST, HTTP, Inputs, Usage]
---

# Recalculate Forecasts Action

> Recalculate forecasts based on orders, opportunity, and sales agreement
   figures.

# Recalculate Forecasts Action

Recalculate forecasts based on orders, opportunity, and sales agreement figures.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mfg_api_devguide)

#### Note

These actions update the forecast data in your Salesforce org. You must perform a database rollback to undo these actions.

For more information about recalculating actual values of an active sales agreement, see [Use Manufacturing Actions in Flow Builder and Process Builder](https://help.salesforce.com/s/articleView?id=ind.admin_manufacturing_standard_invocable_actions.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

This object is available in API version 47.0 and later for users with Manufacturing Cloud license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/recalculateForecast

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| userId | TypeIDDescriptionThe ID of the user. An email is sent to this user when the action is complete. |
| forecastId | TypestringDescriptionThe ID of the forecast for recalculation. Use ALL to recalculate all account forecasts. |

## Usage

**Sample Request to recalculate one account forecast**

The following example shows how to recalculate one account forecast:

```

```

**Sample Request to recalculate all account forecasts**

The following example shows how to recalculate all account forecasts:

```

```

## Code Examples

```
{
"inputs": [{
   "userId":"005xx000001X7QLAA0",
   "forecastId":"0yAxx0000000001EAA"
   }]
}
```

```
{
"inputs": [{
   "userId":"005xx000001X7QLAA0",
   "forecastId":"ALL"
   }]
}
```
