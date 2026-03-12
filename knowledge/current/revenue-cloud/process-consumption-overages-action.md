---
title: "Process Consumption Overages Action"
domain: revenue-cloud
topic: process-consumption-overages-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.078Z
estimatedTokens: 379
keywords: [Process, Consumption, Overages, Action, usage, summary, records, SummaryComplete, status, uses, entitlement, service, Special, Access, Rules]
---

# Process Consumption Overages Action

> Process consumption overages for the usage summary records with
				SummaryComplete status. This action uses the
			entitlement service to process the overages.

# Process Consumption Overages Action

Process consumption overages for the usage summary records with SummaryComplete status. This action uses the entitlement service to process the overages.

This action is available in API version 63.0 and later.

## Special Access Rules

The Process Consumption Overages action is available in Enterprise, Developer, and Unlimited Editions where Usage Management is enabled. To use this action, you need the Usage Management Run Time User permission.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/processConsumptionOverages

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| usageRatableSummaryId | TypestringDescriptionRequired.ID of the usage ratable summary record that contains the consumption details, and is used to calculate consumption overages and create usage entitlement entry records. |

## Outputs

None.

## Example

POST

This example shows a sample request for the Process Consumption Overages action.

```

```

This example shows a sample response for the Process Consumption Overages action.

```

```

#### See Also

-   [*Salesforce Help*: Permission Set Licenses, Personas, and User Permissions for Usage Management](https://help.salesforce.com/s/articleView?id=ind.um_usage_management_psls_and_personas.htm&language=en_US "Salesforce Help: Permission Set Licenses, Personas, and User Permissions for
    Usage Management - HTML (New Window)")

## Code Examples

```
{
  "inputs": [
    {
      "usageRatableSummaryId": "3ttDU00000000iZYAQ"
    }
  ]
}
```

```
{
  "actionName": "processConsumptionOverages",
  "errors": null,
  "isSuccess": true
}
```
