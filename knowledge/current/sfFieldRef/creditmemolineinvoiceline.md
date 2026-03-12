---
title: "CreditMemoLineInvoiceLine"
domain: sfFieldRef
topic: creditmemolineinvoiceline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.095Z
estimatedTokens: 500
keywords: [CreditMemoLineInvoiceLine, junction, credit, memo, line, invoice, API, version, 62.0, later]
---

# CreditMemoLineInvoiceLine

> Represents a junction between a credit memo line and an invoice
         line. This object is available in API version 62.0 and later.

# CreditMemoLineInvoiceLine

Represents a junction between a credit memo line and an invoice line. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CreditMemoLineInvoiceLine in the Billing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| AppliedDateTime | Applied Date Time | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditMemoLineBalance | Credit Memo Line Balance | currency |  |  | 18 | 2 |
| CreditMemoLineId | Credit Memo Line ID | reference |  | 18 |  |  |
| CreditMemoLineInvoiceLineNumber | Name | string |  | 255 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 255 |  |  |
| EffectiveDateTime | Effective Date Time | datetime |  |  |  |  |
| Id | Credit Memo Line Invoice Line ID | id |  | 18 |  |  |
| ImpactAmount | Impact Amount | currency |  |  | 18 | 2 |
| InvoiceLineBalance | Invoice Line Balance | currency |  |  | 18 | 2 |
| InvoiceLineId | Invoice Line ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LegalEntityAccountingPeriodId | Legal Entity Accounting Period ID | reference |  | 18 |  |  |
| LegalEntityId | Legal Entity ID | reference |  | 18 |  |  |
| RelatedCrMemoLineInvcLineId | Credit Memo Line Invoice Line ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |
| UnappliedDateTime | Unapplied Date Time | datetime |  |  |  |  |
| UnappliedStatus | Unapplied Status | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
