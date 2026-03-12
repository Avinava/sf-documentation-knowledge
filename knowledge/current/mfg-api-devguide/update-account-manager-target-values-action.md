---
title: "Update Account Manager Target Values Action"
domain: mfg-api-devguide
topic: update-account-manager-target-values-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:55.182Z
estimatedTokens: 264
keywords: [Account, Manager, Target, Action, target’s, assignment, changes, made, parent's, percentage, REST, HTTP, Inputs, Usage]
---

# Update Account Manager Target Values Action

> Update an account manager target’s assignment values when the
         target’s value changes. The update is made based on the parent's target value and
         percentage.

# Update Account Manager Target Values Action

Update an account manager target’s assignment values when the target’s value changes. The update is made based on the parent's target value and percentage.

For more information about updating the assignment values of an account manager target, see [Use Manufacturing Actions in Flow Builder and Process Builder](https://help.salesforce.com/s/articleView?id=ind.admin_manufacturing_standard_invocable_actions.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

This object is available in API version 49.0 and later for users with Manufacturing Cloud license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/updateAcctMgrTarget

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| entityId | TypeIDDescriptionRequired. The ID of the account manager target record. |

## Usage

**Sample Request**

The following example shows how to update account manager target:

```

```

## Code Examples

```
{
“entityId”: “0gAT1000000006nMAA”
}
```
