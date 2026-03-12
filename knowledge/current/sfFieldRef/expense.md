---
title: "Expense"
domain: sfFieldRef
topic: expense
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.578Z
estimatedTokens: 545
keywords: [Expense, linked, work, order, Service, resource, technicians, log, expenses, tools, travel, costs, API, version, 49.0]
---

# Expense

> Represents an expense linked to a work order. Service resource technicians can
      log expenses, such as tools or travel costs. This object is available in API version 49.0
    and later.

# Expense

Represents an expense linked to a work order. Service resource technicians can log expenses, such as tools or travel costs. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Expense](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_expense.htm "HTML (New Window)") in the Field Service Developer Guide, Life Sciences Cloud Developer Guide, Loyalty Management Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| Amount | Amount | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Discount | Discount | percent |  |  | 5 | 2 |
| ExpenseEndDate | End Date | date |  |  |  |  |
| ExpenseNumber | Expense Name | string |  | 255 |  |  |
| ExpenseStartDate | Start Date | date |  |  |  |  |
| ExpenseType | Expense Type | picklist |  | 40 |  |  |
| Id | Expense ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Quantity | Quantity | double |  |  | 12 | 2 |
| Subtotal | Subtotal | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Title | string |  | 255 |  |  |
| TotalPrice | Total Price | currency |  |  | 18 | 2 |
| TransactionDate | Transaction Date | date |  |  |  |  |
| UnitPrice | Unit Price | currency |  |  | 18 | 2 |
| WorkOrderId | Work Order ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
