---
title: "BalanceAdjustmentRequest"
domain: sfFieldRef
topic: balanceadjustmentrequest
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:49.401Z
estimatedTokens: 436
keywords: [BalanceAdjustmentRequest, financial, adjustment, backend, billing, system, Adjustments, requests, either, debit, credit, amounts, Often, give, customer]
---

# BalanceAdjustmentRequest

> The request to create a financial adjustment in a backend billing system.
         Adjustments requests can be for either debit or credit amounts. Often used to give the
         customer a goodwill gesture. This object is available in API version 62.0 and later.

# BalanceAdjustmentRequest

The request to create a financial adjustment in a backend billing system. Adjustments requests can be for either debit or credit amounts. Often used to give the customer a goodwill gesture. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BalanceAdjustmentRequest in the Energy and Utilities Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| ApprovedById | User ID | reference |  | 18 |  |  |
| ApprovedOn | Approved On | date |  |  |  |  |
| BillingAccountId | Billing Account ID | reference |  | 18 |  |  |
| BlockReason | Block Reason | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Balance Adjustment Request ID | id |  | 18 |  |  |
| IsBlocked | Blocked | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Reason | Reason | string |  | 255 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
