---
title: "Invoke Summary Creation Action"
domain: revenue-cloud
topic: invoke-summary-creation-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.044Z
estimatedTokens: 377
keywords: [Invoke, Summary, Creation, Action, service, creates, various, summaries, usage, ratable, liable, amount, zero, checks, updates]
---

# Invoke Summary Creation Action

> Invoke the service that creates various summaries, such as usage,
			ratable, and liable summaries where the usage amount is zero. The service also checks
			and updates the billing period of the usage entitlement account if the billing period is
			expired.

# Invoke Summary Creation Action

Invoke the service that creates various summaries, such as usage, ratable, and liable summaries where the usage amount is zero. The service also checks and updates the billing period of the usage entitlement account if the billing period is expired.

This action is available in API version 63.0 and later.

## Special Access Rules

The Invoke Summary Creation action is available in Enterprise, Developer, and Unlimited Editions where Usage Management is enabled. To use this action, you need the Usage Management Run Time User permission.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/invokeSummaryCreationService

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| usageEntitlementAccountId | TypestringDescriptionRequired.ID of the usage entitlement account record that’s used to create summaries. |

## Outputs

None.

## Example

POST

This example shows a sample request for the Invoke Summary Creation action.

```

```

This example shows a sample response for the Invoke Summary Creation action.

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
      "usageEntitlementAccountId": "3ttDU00000000iZYAQ"
    }
  ]
}
```

```
{
  "actionName": "invokeSummaryCreationService",
  "errors": null,
  "isSuccess": true
}
```
