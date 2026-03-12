---
title: "Update Advanced Account Forecast Set Partner Action"
domain: mfg-api-devguide
topic: update-advanced-account-forecast-set-partner-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.928Z
estimatedTokens: 457
keywords: [Advanced, Account, Forecast, Partner, Action, Updates, status, record, data, combination, generated, REST, HTTP, Inputs, Usage]
---

# Update Advanced Account Forecast Set Partner Action

> Updates the status of the Advanced Account Forecast Set Partner record
   after the forecast data for a given combination of account and forecast set has been
   generated.

# Update Advanced Account Forecast Set Partner Action

Updates the status of the Advanced Account Forecast Set Partner record after the forecast data for a given combination of account and forecast set has been generated.

For more information about how the updateAdvancedAccountForecastSetPartner action updates the status, see [Calculate Account Forecasts Using Flows](https://help.salesforce.com/s/articleView?id=ind.admin_aaf_flow_calculate_acccount_forecasts.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

This object is available in API version 53.0 and later.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/updateAdvancedAccountForecastSetPartner

Formats

JSON

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| accountId | TypestringDescriptionThe ID of an account record. |
| forecastSetId | TypestringDescriptionRequired. The ID of the advanced account forecast set associated with the account. |
| status | TypestringDescriptionThe status to be set for the Advanced Account Forecast Set Partner record.Possible values are:ActiveInactiveThe status can be changed from Draft to Active or Active to Inactive.NoteWhen you don’t specify a status, by default the status of the Advanced Account Forecast Set Partner record is set from Draft to Active. |

## Usage

**JSON Sample Requests**

This example sets the status for the Account Forecast Set Partner record with given forecast set ID and account ID to Active.

```

```

This example sets the status for all the Forecast Set Partner records with the given forecast set ID to Active.

```

```

This example sets the status for all the Forecast Set Partner records with the given forecast set ID to Inactive.

```

```

**JSON Sample Response**

```

```

## Code Examples

```
{
   "inputs":[{
      "forecastSetId" : "0ni5sajb8347k3s",
      "accountId" : "001jsdhsdjo457",
      "status" : "Active"
   }]
}
```

```
{
   "inputs":[{
      "forecastSetId" : "0ni5sajb8347k3s"
   }]
}
```

```
{
   "inputs":[{
      "forecastSetId" : "0ni5sajb8347k3s",
      "status" : "Inactive"
   }]
}
```

```
[ {
  "actionName" : "updateAdvancedAccountForecastSetPartner",
  "errors" : null,
  "isSuccess" : true,
  "outputValues" : null
} ]
```
