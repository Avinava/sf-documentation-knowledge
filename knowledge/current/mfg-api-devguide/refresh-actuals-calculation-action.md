---
title: "Refresh Actuals Calculation Action"
domain: mfg-api-devguide
topic: refresh-actuals-calculation-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:55.207Z
estimatedTokens: 370
keywords: [Refresh, Actuals, Calculation, Action, calculations, sales, agreements, current, past, periods, REST, HTTP, Inputs, Usage]
---

# Refresh Actuals Calculation Action

> Refresh actuals calculations for sales agreements for current and past
   periods.

# Refresh Actuals Calculation Action

Refresh actuals calculations for sales agreements for current and past periods.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mfg_api_devguide)

#### Note

These actions update the actuals data in your Salesforce org. You must perform a database rollback to undo these actions.

For information on how the refreshActualsCalculation action can be used in a flow, see [Use Manufacturing Actions in Flow Builder and Process Builder](https://help.salesforce.com/s/articleView?id=ind.admin_manufacturing_standard_invocable_actions.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

This object is available in API version 47.0 and later for users with the Manufacturing Sales Agreements permission set.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/refreshActualsCalculation

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
| salesAgreementId | TypestringDescriptionThe ID of the sales agreement for refreshing actuals. |
| isCurrentSchedule | TypebooleanDescriptionIndicates whether to refresh actuals for the current period (true) or current and past periods (false). |

## Usage

**Sample Request**

The following example shows how to refresh actuals:

```

```

## Code Examples

```
{
"inputs" : [{
"userId" : "005Ws000001Agn0IAC",
"salesAgreementId": "0YAWs0000004FkBOAU",
"isCurrentSchedule": true
}]
}
```
