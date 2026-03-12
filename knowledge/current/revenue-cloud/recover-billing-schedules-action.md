---
title: "Recover Billing Schedules Action"
domain: revenue-cloud
topic: recover-billing-schedules-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:06.091Z
estimatedTokens: 358
keywords: [Recover, Billing, Schedules, Action, Error, Processing, status, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Recover Billing Schedules Action

> Recover one or more billing schedules in the Error or Processing status.

# Recover Billing Schedules Action

Recover one or more billing schedules in the Error or Processing status.

This action uses the ID of the billing schedule record in the Error or Processing status to retrieve the latest generated invoice. This action also retrieves any other billing schedules in the Error or Processing status associated with that invoice.

This action is available in API version 62.0 and later.

## Special Access Rules

The Recover Billing Schedules action is available in Enterprise, Unlimited, and Developer Editions where Billing is enabled. To use this action, you need the Manage Errors Using Invoice Error Recovery API permission set.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/recoverBillingSchedules

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| billingScheduleId | TypestringDescriptionRequired.ID of the billing schedule record in the Error or Processing status. |

## Outputs

| Output | Details |
| --- | --- |
| successBillingScheduleIds | TypestringDescriptionComma-separated list of IDs associated with the parent billing schedule record in the Error or Processing status. |

## Example

POST

This example shows a sample request for the Recover Billing Schedules action.

```

```

This example shows a sample response for the Recover Billing Schedules action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "billingScheduleId": "801xx000003JztvAAC"
    }
  ]
}
```

```
{
  "actionName": "recoverBillingSchedules",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "successBillingScheduleIds": ["4sFDU00000000652AA", 16Pxx0000004NhAEAU]
  },
  "sortOrder": -1,
  "version": 1
}
```
