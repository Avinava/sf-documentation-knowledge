---
title: "CreditMemoLine"
domain: sfFieldRef
topic: creditmemoline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.074Z
estimatedTokens: 832
keywords: [CreditMemoLine, product, service, adjustment, tax, line, items, were, included, credit, memo, API, version, 48.0, later]
---

# CreditMemoLine

> Represents product, service, adjustment, or tax line items that were included
      in a credit memo. This object is available in API version 48.0 and later.

# CreditMemoLine

Represents product, service, adjustment, or tax line items that were included in a credit memo. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CreditMemoLine](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_creditmemoline.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentAmount | Adjustment Amount | currency |  |  | 18 | 2 |
| AdjustmentAmountWithTax | Adjustment Amount with Tax | currency |  |  | 18 | 2 |
| AdjustmentTaxAmount | Adjustment Tax Amount | currency |  |  | 18 | 2 |
| ChargeAmount | Charge Amount | currency |  |  | 18 | 2 |
| ChargeAmountWithTax | Charge Amount with Tax | currency |  |  | 18 | 2 |
| ChargeTaxAmount | Charge Tax Amount | currency |  |  | 18 | 2 |
| CorpCurrencyCnvChargeAmt | Corporate Currency Converted Total Charge Amount | double |  |  | 18 | 6 |
| CorpCurrencyCnvTotalTaxAmt | Corporate Currency Converted Total Tax Amount | double |  |  | 18 | 6 |
| CorporateCurrencyCvsnDate | Corporate Currency Conversion Date | date |  |  |  |  |
| CorporateCurrencyCvsnRate | Corporate Currency Conversion Rate | double |  |  | 18 | 10 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditMemoId | Credit Memo ID | reference |  | 18 |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| FuncCrcyCnvTotalTaxAmt | Functional Currency Converted Total Tax Amount | double |  |  | 18 | 6 |
| FuncCurrencyCnvChargeAmt | Functional Currency Converted Charge Amount | double |  |  | 18 | 6 |
| FunctionalCurrencyCvsnDate | Functional Currency Conversion Date | date |  |  |  |  |
| FunctionalCurrencyCvsnRate | Functional Currency Conversion Rate | double |  |  | 18 | 10 |
| Id | Credit Memo Line ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LineAmount | Line Amount | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ReferenceEntityItemId | ReferenceEntityItem ID | reference |  | 18 |  |  |
| ReferenceEntityItemType | Reference Entity Item Type | picklist |  | 40 |  |  |
| ReferenceEntityItemTypeCode | Reference Entity Item Type Code | picklist |  | 255 |  |  |
| RelatedLineId | Credit Memo Line ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | string |  | 50 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxAmount | Tax Amount | currency |  |  | 18 | 2 |
| TaxCode | Tax Code | string |  | 255 |  |  |
| TaxEffectiveDate | Tax Effective Date | date |  |  |  |  |
| TaxName | Tax Name | string |  | 255 |  |  |
| TaxRate | Tax Rate | percent |  |  | 5 | 2 |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
