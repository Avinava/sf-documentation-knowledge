---
title: "Create Standalone Billing Schedules Action"
domain: revenue-cloud
topic: create-standalone-billing-schedules-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:05.843Z
estimatedTokens: 563
keywords: [Standalone, Billing, Schedules, Action, Creates, internal, external, transaction, records, calling, API, Special, Access, Rules, REST]
---

# Create Standalone Billing Schedules Action

> Creates billing schedules for internal or external transaction
            records by calling the Create Standalone Billing Schedules API.

# Create Standalone Billing Schedules Action

Creates billing schedules for internal or external transaction records by calling the Create Standalone Billing Schedules API.

This action is available in API version 64.0 and later.

See [Create Standalone Billing Schedules (POST) API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_create_billing_schedules_from_any_transaction.htm "HTML (New Window)") to know more about the mandatory and optional tags, sample transaction details, and sample payloads for various types of transactions.

## Special Access Rules

This action is available in Enterprise, Unlimited, and Developer Editions with the Revenue Cloud Billing license. To use this action, you need the Billing Operations permission set.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/createBillingSchedulesFromTrxn

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| contextDefinitionName | TypestringDescriptionRequired.Name of the context definition that contains the mappings for the transaction record and billing schedules. |
| readContextMappingName | TypestringDescriptionRequired.Name of the context mapping with the mapping for the transaction. |
| saveContextMappingName | TypestringDescriptionRequired.Name of the context mapping with the mapping for the billing schedule and billing schedule group. The save context mapping is used to save the billing schedule. |
| transactionDetails | TypestringDescriptionRequired.A JSON string containing the ID of the transaction record that the billing schedule is created for and other additional transaction details. |

## Outputs

| Output | Details |
| --- | --- |
| requestId | TypestringDescriptionUnique request identifier that you can use to poll the asynchronous request. |
| statusUrl | TypestringDescriptionStatus URL that’s used to track the operation. |

## Example

POST

Here's a sample request for the Create Billing Schedules From Transaction action.

```

```

Here's a sample response for the Create Billing Schedules From Transaction action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "transactionDetails": "{"Transaction":[{"id":"sampleA1","ParentTransactionId":"sample","TransactionId":"sampleA1","RelatedTransactionId":"ter1","StartDate":"2025-04-01","UnitPrice":10,"Quantity":1,"TotalPrice":90,"BillingActionType":"Amend"},{"id":"sampleA2","ParentTransactionId":"sample","TransactionId":"sampleA2","RelatedTransactionId":"ter1","StartDate":"2025-03-01","UnitPrice":10,"Quantity":-2,"TotalPrice":-200,"BillingActionType":"Amend"},{"id":"sampleA3","ParentTransactionId":"sample","TransactionId":"sampleA3","RelatedTransactionId":"ter1","StartDate":"2025-03-01","UnitPrice":10,"Quantity":-1,"TotalPrice":-100,"BillingActionType":"Amend"}]}",
      "contextDefinitionName": "StandaloneBillingContext__stdctx",
      "readContextMappingName": "TransactionMapping",
      "saveContextMappingName": "BSGEntitiesMapping"
    }
  ]
}
```

```
{
  "actionName": "createBillingSchedulesFromTrxn",
  "errors": null,
  "isSuccess": true,
  "outputValues": {
    "requestId": "16PZ6000000CnKRMA0",
    "statusUrl": "/services/data/v64.0/sobjects/AsyncOperationTracker/16PZ6000000CnKRMA0"
  },
  "sortOrder": -1,
  "version": 1
}
```
