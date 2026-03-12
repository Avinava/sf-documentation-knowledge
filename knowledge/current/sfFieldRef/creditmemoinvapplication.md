---
title: "CreditMemoInvApplication"
domain: sfFieldRef
topic: creditmemoinvapplication
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.049Z
estimatedTokens: 469
keywords: [CreditMemoInvApplication, amount, applied, credit, memo, invoice, API, version, 48.0, later]
---

# CreditMemoInvApplication

> Represents an amount applied from a credit memo to an invoice. This
      object is available in API version 48.0 and later.

# CreditMemoInvApplication

Represents an amount applied from a credit memo to an invoice. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CreditMemoInvApplication](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_creditmemoinvapplication.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| AppliedDate | Applied Date | datetime |  |  |  |  |
| AssociatedLineId | Credit Memo Invoice Application ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditMemoId | Credit Memo ID | reference |  | 18 |  |  |
| CreditMemoInvoiceNumber | Name | string |  | 255 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Date | Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| EffectiveDate | Effective Date | datetime |  |  |  |  |
| HasBeenUnapplied | Has Been Unapplied | picklist |  | 255 |  |  |
| Id | Credit Memo Invoice Application ID | id |  | 18 |  |  |
| ImpactAmount | Impact Amount | currency |  |  | 18 | 2 |
| InvoiceId | Invoice ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |
| UnappliedDate | Unapplied Date | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
