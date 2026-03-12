---
title: "Create Billing Schedules From Billing Transaction Action"
domain: revenue-cloud
topic: create-billing-schedules-from-billing-transaction-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.667Z
estimatedTokens: 575
keywords: [Create, Billing, Schedules, Transaction, Action, billing, schedules, specified, transaction, ID., Special, Access, Rules, Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Create Billing Schedules From Billing Transaction Action

> Create one or more billing schedules for a specified billing
			transaction ID.

# Create Billing Schedules From Billing Transaction Action

Create one or more billing schedules for a specified billing transaction ID.

This action calls the [Create Billing Schedules for Orders (POST) API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_billing_schedules.htm "HTML (New Window)") to retrieve the billing transaction items associated with the billing transaction ID. The API generates the corresponding billing schedules for each of the billing transaction items for operations such as transaction modifications, renewals, cancellations, and new sales.

This action is available in API version 62.0 and later.

## Special Access Rules

The Create Billing Schedules From Billing Transaction action is available in Enterprise, Unlimited, and Developer Editions where Billing is enabled. To use this action, you need the Create Billing Schedules From Billing Transactions API permission set.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createBillingSchedulesFromBillingTransaction

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| billingTransactionId | TypestringDescriptionRequired.ID of the billing transaction record to create one or more billing schedules for. |

## Outputs

| Output | Details |
| --- | --- |
| requestId | TypestringDescriptionUniversally Unique Identifier (UUID) that’s used to track the status of the asynchronous action. |
| statusUrl | TypestringDescriptionURL that’s used to check the status of the API request. |

## Example

POST

This example shows a sample request for the Create Billing Schedules From Billing Transaction action.

```

```

This example shows a sample response for the Create Billing Schedules From Billing Transaction action.

```

```

#### See Also

-   [*Revenue Cloud Developer Guide*: Context-Aware Billing Schedule API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_billing_schedules.htm "Revenue Cloud Developer Guide: Context-Aware Billing Schedule API - HTML (New Window)")

## Code Examples

```
{
  "inputs": [
    {
      "billingTransactionId": "801xx000003JztvAAC"
    }
  ]
}
```

```
{
  "actionName": "createBillingSchedulesFromBillingTransaction",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "requestId": "4sFDU00000000652AA",
    "statusUrl": "/services/data/v62.0/sobjects/AsyncOperationTracker/16Pxx0000004NhAEAU"
  },
  "sortOrder": -1,
  "version": 1
}
```
