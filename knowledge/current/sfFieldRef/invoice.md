---
title: "Invoice"
domain: sfFieldRef
topic: invoice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.808Z
estimatedTokens: 1018
keywords: [Invoice, financial, document, describing, total, amount, buyer, pay, goods, services, provided, API, version, 48.0, later]
---

# Invoice

> Represents a financial document describing the total amount a buyer must pay
      for goods or services provided. This object is available in API version 48.0 and later.

# Invoice

Represents a financial document describing the total amount a buyer must pay for goods or services provided. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Invoice](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_invoice.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Balance | Balance | currency |  |  | 18 | 2 |
| BillToContactId | Contact ID | reference |  | 18 |  |  |
| BillingAccountId | Account ID | reference |  | 18 |  |  |
| CorpCrcyCnvTotAmtWithTax | Corporate Currency Converted Total Amount With Tax | double |  |  | 18 | 6 |
| CorporateCurrencyCvsnDate | Corporate Currency Conversion Date | date |  |  |  |  |
| CorporateCurrencyCvsnRate | Corporate Currency Conversion Rate | double |  |  | 18 | 10 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DaysInvoiceOpen | Days Invoice Open | int | 9 |  |  |  |
| DaysInvoiceOverdue | Days Invoice Overdue | int | 9 |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DocumentNumber | Document Number | string |  | 255 |  |  |
| DueDate | Due Date | date |  |  |  |  |
| FullSettlementDate | Full Settlement Date | date |  |  |  |  |
| FuncCrcyCnvTotAmtWithTax | Functional Currency Converted Total Amount With Tax | double |  |  | 18 | 6 |
| FunctionalCurrencyCvsnDate | Functional Currency Conversion Date | date |  |  |  |  |
| FunctionalCurrencyCvsnRate | Functional Currency Conversion Rate | double |  |  | 18 | 10 |
| Id | Invoice ID | id |  | 18 |  |  |
| InvoiceDate | Invoice Date | date |  |  |  |  |
| InvoiceLockedDateTime | Invoice Locked Date Time | datetime |  |  |  |  |
| InvoiceNumber | Invoice Number | string |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsInvoiceLocked | Invoice Locked | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| NetCreditsApplied | Net Credits Applied | currency |  |  | 18 | 2 |
| NetPaymentsApplied | Net Payments Applied | currency |  |  | 18 | 2 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PostedDate | Posted Date | date |  |  |  |  |
| ReferenceEntityId | ReferenceEntity ID | reference |  | 18 |  |  |
| SettlementStatus | Settlement Status | picklist |  | 255 |  |  |
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
| TotalConvertedNegAmount | Total Converted Negative Amount | currency |  |  | 18 | 2 |
| TotalTaxAmount | Total Tax | currency |  |  | 18 | 2 |
| TotalTaxesCapturedAtHeader | Total Taxes Captured at Header | currency |  |  | 18 | 2 |
| WriteOffStatus | Write Off Status | picklist |  | 255 |  |  |
| WriteOffTotalChargeAmount | Write Off Total Charge Amount | currency |  |  | 18 | 2 |
| WriteOffTotalTaxAmount | Write Off Total Tax Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
