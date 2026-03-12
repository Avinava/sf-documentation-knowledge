---
title: "CreditMemoLineTax"
domain: sfFieldRef
topic: creditmemolinetax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.106Z
estimatedTokens: 542
keywords: [CreditMemoLineTax, tax, credit, memo, line, API, version, 62.0, later]
---

# CreditMemoLineTax

> Represents tax information of a credit memo line of type Tax. This object is available in API version 62.0 and
      later.

# CreditMemoLineTax

Represents tax information of a credit memo line of type Tax. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CreditMemoLineTax in the Billing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillingAddressId | Credit Memo Address Group ID | reference |  | 18 |  |  |
| CalculationStatus | Calculation Status | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditMemoLineId | Credit Memo Line ID | reference |  | 18 |  |  |
| CreditMemoLineTaxNumber | Name | string |  | 255 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Credit Memo Line Tax ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LegalEntityAccountingPeriodId | Legal Entity Accounting Period ID | reference |  | 18 |  |  |
| LegalEntityId | Legal Entity ID | reference |  | 18 |  |  |
| ReferenceEntityItemId | Invoice Line Tax ID | reference |  | 18 |  |  |
| ShipFromAddressId | Credit Memo Address Group ID | reference |  | 18 |  |  |
| ShippingAddressId | Credit Memo Address Group ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxAmount | Tax Amount | currency |  |  | 18 | 2 |
| TaxCode | Tax Code | string |  | 255 |  |  |
| TaxDocumentNumber | Tax Document Number | string |  | 255 |  |  |
| TaxEffectiveDate | Tax Effective Date | date |  |  |  |  |
| TaxName | Tax Name | string |  | 255 |  |  |
| TaxRate | Tax Rate | percent |  |  | 5 | 2 |
| TaxTransactionNumber | Tax Transaction Number | string |  | 255 |  |  |
| TaxTreatmentId | Tax Treatment ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
