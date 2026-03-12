---
title: "Payment Scheduler Update Input"
domain: revenue-cloud
topic: payment-scheduler-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.120Z
estimatedTokens: 141
keywords: [Payment, Scheduler, Input, representation, status, Active, Canceled, Draft, Inactive]
---

# Payment Scheduler Update Input

> Input representation of the details of the request to update the status of a payment
    scheduler. This representation defines the status of a payment scheduler, which can be set to
    Active, Canceled, Draft, or Inactive.

# Payment Scheduler Update Input

Input representation of the details of the request to update the status of a payment scheduler. This representation defines the status of a payment scheduler, which can be set to Active, Canceled, Draft, or Inactive.

JSON example

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| status | String | Status that must be set to activate or deactivate a payment scheduler. Valid values are:ActiveCanceledDraftInactive | Required | 64.0 |

## Code Examples

```
{
  "status": "Active"
}
```
