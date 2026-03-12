---
title: "CreditMemo"
domain: sfFieldRef
topic: creditmemo
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.014Z
estimatedTokens: 930
keywords: [CreditMemo, document, reduce, amount, buyer, owes, seller, under, terms, earlier, invoice, API, version, 48.0, later]
---

# CreditMemo

> Represents a document that is used to reduce the amount that a buyer owes a
      seller under the terms of an earlier invoice. This object is available in API version
    48.0 and later.

# CreditMemo

Represents a document that is used to reduce the amount that a buyer owes a seller under the terms of an earlier invoice. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CreditMemo](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_creditmemo.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Balance | Balance | currency |  |  | 18 | 2 |
| BillToContactId | Contact ID | reference |  | 18 |  |  |
| BillingAccountId | Account ID | reference |  | 18 |  |  |
| Category | Category | picklist |  | 255 |  |  |
| CorpCrcyCnvTotAmtWithTax | Corporate Currency Converted Total Amount With Tax | double |  |  | 18 | 6 |
| CorporateCurrencyCvsnDate | Corporate Currency Conversion Date | date |  |  |  |  |
| CorporateCurrencyCvsnRate | Corporate Currency Conversion Rate | double |  |  | 18 | 10 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreationMode | Creation Mode | picklist |  | 255 |  |  |
| CreditDate | Credit Date | date |  |  |  |  |
| CreditMemoNumber | Credit Memo Number | string |  | 255 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| DocumentNumber | Document Number | string |  | 255 |  |  |
| ExternalReference | External Reference | string |  | 255 |  |  |
| ExternalReferenceDataSource | External Reference Data Source | string |  | 255 |  |  |
| FuncCrcyCnvTotAmtWithTax | Functional Currency Converted Total Amount With Tax | double |  |  | 18 | 6 |
| FunctionalCurrencyCvsnDate | Functional Currency Conversion Date | date |  |  |  |  |
| FunctionalCurrencyCvsnRate | Functional Currency Conversion Rate | double |  |  | 18 | 10 |
| Id | Credit Memo ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| NetCreditsApplied | Net Credits Applied | currency |  |  | 18 | 2 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ReasonCode | Reason Code | picklist |  | 40 |  |  |
| ReferenceEntityId | ReferenceEntity ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAdjustmentAmount | Total Adjustment Amount | currency |  |  | 18 | 2 |
| TotalAdjustmentAmountWithTax | Total Adjustment Amount with Tax | currency |  |  | 18 | 2 |
| TotalAdjustmentTaxAmount | Total Adjustment Tax Amount | currency |  |  | 18 | 2 |
| TotalAmount | Total Amount | currency |  |  | 18 | 2 |
| TotalAmountWithTax | Total with Tax | currency |  |  | 18 | 2 |
| TotalChargeAmount | Total Charges | currency |  |  | 18 | 2 |
| TotalChargeAmountWithTax | Total Charge Amount with Tax | currency |  |  | 18 | 2 |
| TotalChargeTaxAmount | Total Charge Tax Amount | currency |  |  | 18 | 2 |
| TotalCreditAmountApplied | Total Credit Amount Applied | currency |  |  | 18 | 2 |
| TotalCreditAmountUnapplied | Total Credit Amount Unapplied | currency |  |  | 18 | 2 |
| TotalTaxAmount | Total Tax | currency |  |  | 18 | 2 |
| TotalTaxesCapturedAtHeader | Total Taxes Captured at Header | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
