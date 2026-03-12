---
title: "InvoiceLine"
domain: sfFieldRef
topic: invoiceline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.908Z
estimatedTokens: 1081
keywords: [InvoiceLine, amount, buyer, pay, product, service, fee, Invoice, lines, created, order, line, API, version, 48.0]
---

# InvoiceLine

> Represents the amount that a buyer must pay for a product, service, or fee.
      Invoice lines are created based on the amount of an order line. This object is available
    in API version 48.0 and later.

# InvoiceLine

Represents the amount that a buyer must pay for a product, service, or fee. Invoice lines are created based on the amount of an order line. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [InvoiceLine](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_invoiceline.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustmentAmount | Adjustment Amount | currency |  |  | 18 | 2 |
| AdjustmentAmountWithTax | Adjustment Amount with Tax | currency |  |  | 18 | 2 |
| AdjustmentTaxAmount | Adjustment Tax Amount | currency |  |  | 18 | 2 |
| BillingAddressId | Invoice Address Group ID | reference |  | 18 |  |  |
| BillingScheduleGroupId | Billing Schedule Group ID | reference |  | 18 |  |  |
| BillingScheduleId | Billing Schedule ID | reference |  | 18 |  |  |
| ChargeAmount | Charge Amount | currency |  |  | 18 | 2 |
| ChargeAmountWithTax | Charge Amount with Tax | currency |  |  | 18 | 2 |
| ChargeTaxAmount | Charge Tax Amount | currency |  |  | 18 | 2 |
| ConvertedNegAmount | Converted Negative Amount | currency |  |  | 18 | 2 |
| CorpCurrencyCnvChargeAmt | Corporate Currency Converted Total Charge Amount | double |  |  | 18 | 6 |
| CorpCurrencyCnvTotalTaxAmt | Corporate Currency Converted Total Tax Amount | double |  |  | 18 | 6 |
| CorporateCurrencyCvsnDate | Corporate Currency Conversion Date | date |  |  |  |  |
| CorporateCurrencyCvsnRate | Corporate Currency Conversion Rate | double |  |  | 18 | 10 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| FuncCrcyCnvTotalTaxAmt | Functional Currency Converted Total Tax Amount | double |  |  | 18 | 6 |
| FuncCurrencyCnvChargeAmt | Functional Currency Converted Charge Amount | double |  |  | 18 | 6 |
| FunctionalCurrencyCvsnDate | Functional Currency Conversion Date | date |  |  |  |  |
| FunctionalCurrencyCvsnRate | Functional Currency Conversion Rate | double |  |  | 18 | 10 |
| GroupReferenceEntityItemId | GroupReferenceEntityItem ID | reference |  | 18 |  |  |
| Id | Invoice Line ID | id |  | 18 |  |  |
| InvoiceId | Invoice ID | reference |  | 18 |  |  |
| InvoiceLineEndDate | Invoice Line End Date | date |  |  |  |  |
| InvoiceLineStartDate | Invoice Line Start Date | date |  |  |  |  |
| InvoiceStatus | Status | string |  | 50 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LineAmount | Line Amount | currency |  |  | 18 | 2 |
| Name | Name | string |  | 255 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| Quantity | Quantity | double |  |  | 18 | 2 |
| ReferenceEntityItemId | ReferenceEntityItem ID | reference |  | 18 |  |  |
| ReferenceEntityItemType | Reference Entity Item Type | picklist |  | 40 |  |  |
| ReferenceEntityItemTypeCode | Reference Entity Item Type Code | picklist |  | 255 |  |  |
| RelatedLineId | Invoice Line ID | reference |  | 18 |  |  |
| ShipFromAddressId | Invoice Address Group ID | reference |  | 18 |  |  |
| ShippingAddressId | Invoice Address Group ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxAmount | Tax Amount | currency |  |  | 18 | 2 |
| TaxCode | Tax Code | string |  | 255 |  |  |
| TaxDocumentNumber | Tax Document Number | string |  | 255 |  |  |
| TaxEffectiveDate | Tax Effective Date | date |  |  |  |  |
| TaxName | Tax Name | string |  | 255 |  |  |
| TaxProcessingStatus | Tax Processing Status | picklist |  | 255 |  |  |
| TaxRate | Tax Rate | percent |  |  | 5 | 2 |
| TaxTransactionNumber | Tax Transaction Number | string |  | 255 |  |  |
| TaxTreatmentId | Tax Treatment ID | reference |  | 18 |  |  |
| Type | Type | picklist |  | 255 |  |  |
| UnitPrice | Unit Price | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
