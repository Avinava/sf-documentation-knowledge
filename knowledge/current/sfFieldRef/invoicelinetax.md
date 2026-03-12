---
title: "InvoiceLineTax"
domain: sfFieldRef
topic: invoicelinetax
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.956Z
estimatedTokens: 585
keywords: [InvoiceLineTax, tax, invoice, line, API, version, 62.0, later]
---

# InvoiceLineTax

> Represents tax information of an invoice line of type Tax. This object is available in API version 62.0 and
      later.

# InvoiceLineTax

Represents tax information of an invoice line of type Tax. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InvoiceLineTax in the Billing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillingAddressId | Invoice Address Group ID | reference |  | 18 |  |  |
| ConvertedNegAmount | Converted Negative Amount | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Invoice Line Tax ID | id |  | 18 |  |  |
| InvoiceLineId | Invoice Line ID | reference |  | 18 |  |  |
| InvoiceLineTaxNumber | Name | string |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LegalEntityAccountingPeriodId | Legal Entity Accounting Period ID | reference |  | 18 |  |  |
| LegalEntityId | Legal Entity ID | reference |  | 18 |  |  |
| ShipFromAddressId | Invoice Address Group ID | reference |  | 18 |  |  |
| ShippingAddressId | Invoice Address Group ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxAmount | Tax Amount | currency |  |  | 18 | 2 |
| TaxCode | Tax Code | string |  | 255 |  |  |
| TaxDocumentNumber | Tax Document Number | string |  | 255 |  |  |
| TaxEffectiveDate | Tax Effective Date | date |  |  |  |  |
| TaxExemptAmount | Tax Exempt Amount | currency |  |  | 18 | 2 |
| TaxName | Tax Name | string |  | 255 |  |  |
| TaxProcessingStatus | Tax Processing Status | picklist |  | 255 |  |  |
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
