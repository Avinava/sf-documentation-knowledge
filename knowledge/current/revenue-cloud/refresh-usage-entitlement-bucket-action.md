---
title: "Refresh Usage Entitlement Bucket Action"
domain: revenue-cloud
topic: refresh-usage-entitlement-bucket-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.962Z
estimatedTokens: 366
keywords: [Refresh, Usage, Entitlement, Bucket, Action, entitlements, evaluating, usage, entitlement, bucket, records, creating, new, entry., Special, Access, Rules, Supported, REST, HTTP]
---

# Refresh Usage Entitlement Bucket Action

> Refresh entitlements by evaluating the usage entitlement bucket
			records and creating a new usage entitlement entry.

# Refresh Usage Entitlement Bucket Action

Refresh entitlements by evaluating the usage entitlement bucket records and creating a new usage entitlement entry.

This action is available in API version 63.0 and later.

## Special Access Rules

The Refresh Usage Entitlement Bucket action is available in Enterprise, Developer, and Unlimited Editions where Usage Management is enabled. To use this action, you need the Usage Management Run Time User permission.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/refreshUsageEntitlementBucket

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| transactionUsageEntitlementId | TypestringDescriptionRequired.ID of the transaction usage entitlement record that's associated with the usage entitlement buckets that you need to refresh. |

## Outputs

None.

## Example

POST

This example shows a sample request for the Refresh Usage Entitlement Bucket action.

```

```

This example shows a sample response for the Refresh Usage Entitlement Bucket action.

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
      "transactionUsageEntitlementId": "3ttDU00000000iZYAQ"
    }
  ]
}
```

```
{
  "actionName": "refreshUsageEntitlementBucket",
  "errors": null,
  "isSuccess": true
}
```
