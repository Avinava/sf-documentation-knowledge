---
title: "Mass Update Advance Account Forecast Action"
domain: mfg-api-devguide
topic: mass-update-advance-account-forecast-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:54.913Z
estimatedTokens: 557
keywords: [Mass, Advance, Account, Forecast, Action, measure, AdvAccountForecastFact, records, filter, condition, selected, view, Special, Access, Rules]
---

# Mass Update Advance Account Forecast Action

> Update a measure of AdvAccountForecastFact records based on filter
   condition of the selected list view.

# Mass Update Advance Account Forecast Action

Update a measure of AdvAccountForecastFact records based on filter condition of the selected list view.

For more information about how the massUpdateAdvAccountForecast action calculates the advanced account forecasting, see [Use Manufacturing Actions in Flow Builder and Process Builder](https://help.salesforce.com/s/articleView?id=ind.admin_manufacturing_standard_invocable_actions.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help. This action is available in API version 56.0 and later.

To use this resource, you must have the Manufacturing Cloud and Advance Account Forecasting feature are enabled in your Salesforce org. See [Enable Advanced Account Forecasting](https://help.salesforce.com/s/articleView?id=sf.aaf_admin_enable.htm&language=en_US).

## Special Access Rules

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/massUpdateAdvAccountForecast

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| actionType | TypeStringDescriptionRequired.The type of action to be performed on the selected measure.Valid values are:DecreaseByIncreaseByReplaceWith |
| forecastReferenceId | TypeStringDescriptionRequired.The ID of the advanced account forecast set use record or advanced account forecast set partner record to be updated. |
| isPercent | TypeBooleanDescriptionRequired.Specifies whether the values are a percentage (true) or not (false).The default value is false. |
| listViewId | TypeStringDescriptionRequired.The ID of the list view record that contains the filtered forecast fact records to be updated. |
| measureFieldName | TypeStringDescriptionRequired.The API name of a measure field on the list view object to be updated in the forecast records. |
| value | TypeStringDescriptionRequired.The value to use to update the measure. |

## Outputs

| Output | Details |
| --- | --- |
| errors | TypeList<String>DescriptionA list of error messages if the operation fails. |
| isSuccess | TypeBooleanDescriptionIndicates whether the operation is successful or not. |

## Examples

**Sample Request**

```

```

**Sample Response**

```

```

## Code Examples

```
{"inputs" : [{
  "actionType": "Increase By",
  "forecastReferenceId": "0ogT10000000BekIAE",
  "isPercent": false,
  "listViewId": "00BT1000000WIUxMAO",
  "measureFieldName": "custom_measure__c",
  "value": "1"
}]}
```

```
[ {
  "actionName" : "massUpdateAdvAccountForecast",
  "errors" : null,
  "isSuccess" : true
} ]
```
