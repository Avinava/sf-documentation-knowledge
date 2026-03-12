---
title: "Context-Aware Standalone Billing Schedule Metadata Input"
domain: revenue-cloud
topic: context-aware-standalone-billing-schedule-metadata-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.860Z
estimatedTokens: 381
keywords: [Context-Aware, Standalone, Billing, Schedule, Metadata, Input, representation, includes, context, definition, mapping, along, transaction, group]
---

# Context-Aware Standalone Billing Schedule Metadata Input

> Input representation of the metadata details to create a billing schedule. This
    representation includes the name of the context definition and context mapping along with the
    mapping details of the transaction, billing schedule, and billing schedule group.

# Context-Aware Standalone Billing Schedule Metadata Input

Input representation of the metadata details to create a billing schedule. This representation includes the name of the context definition and context mapping along with the mapping details of the transaction, billing schedule, and billing schedule group.

JSON example

```

```

This example shows a sample request to generate billing schedules from order items by specifying the BillingContext standard context definition as the context definition name.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| context​Definition​Name | String | Name of the context definition that’s used to hydrate the context to generate the billing schedule.To generate billing schedules from order items, specify the BillingContext standard context definition as the context definition name. Applicable from API version 66.0 and later. | Required | 64.0 |
| intraContext​CustomMapping​Name | String | Name of the cross-context custom mapping that's used to map Billing fields to Transaction fields.Use this mapping to populate the Billing fields with the values stored in custom transaction fields. | Optional | 65.0 |
| readContext​Mapping​Name | String | Name of the context mapping with the mapping for the transaction. | Required | 64.0 |
| saveContext​Mapping​Name | String | Name of the context mapping with the mapping for the billing schedule and billing schedule group. | Required | 64.0 |

## Code Examples

```
{
  "transactionDetails": "{"nodeName": [{"id":"001SG000004FvlGYAS", "businessSobjectType": "Account", "Quantity":"4" , "Name": "TestAccount"}]}",
  "transactionContextDetails": {
    "contextDefinitionName": "StandaloneBillingContext",
    "intraContextCustomMappingName": "CustomContextMapping",
    "readContextMappingName": "OrderTransactionMapping",
    "saveContextMappingName": "BSGEntitiesMapping"
  }
}
```

```
{
  "transactionDetails": "{"nodeName": [{"id":"001SG000004FvlGYAS", "businessSobjectType": "Account", "Quantity":"4" , "Name": "TestAccount"}]}",
  "transactionContextDetails": {
    "contextDefinitionName": "BillingContext__stdctx",
    "readContextMappingName": "OrderEntitiesMapping",
    "saveContextMappingName": "BSGEntitiesMapping"
  }
}
```
