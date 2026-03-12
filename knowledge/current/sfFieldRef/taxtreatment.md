---
title: "TaxTreatment"
domain: sfFieldRef
topic: taxtreatment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.162Z
estimatedTokens: 546
keywords: [TaxTreatment, tax, treatment, how, Salesforce, external, engines, calculate, taxes, engine, calculation, IsTaxable, determines, whether, calculated]
---

# TaxTreatment

> A tax treatment contains details about how Salesforce and external engines
         calculate taxes, and the tax engine to use for tax calculation. The IsTaxable field
         determines whether tax is calculated for the product in the transaction. The tax code, tax
         engine, and product code are sent via API to the external tax calculation service. When you
         invoice an order item that has a tax treatment, the invoice line inherits the tax treatment
         from the order item’s related billing schedule. The invoice line’s TaxCode field is
         populated based on the code that the tax engine used for calculation. This object is
      available in API version 55.0 and later.

# TaxTreatment

A tax treatment contains details about how Salesforce and external engines calculate taxes, and the tax engine to use for tax calculation. The IsTaxable field determines whether tax is calculated for the product in the transaction. The tax code, tax engine, and product code are sent via API to the external tax calculation service. When you invoice an order item that has a tax treatment, the invoice line inherits the tax treatment from the order item’s related billing schedule. The invoice line’s TaxCode field is populated based on the code that the tax engine used for calculation. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [TaxTreatment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_taxtreatment.htm "HTML (New Window)") in the Billing Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| Id | Tax Treatment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsTaxable | Is Taxable | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LegalEntityId | Legal Entity ID | reference |  | 18 |  |  |
| Name | Tax Treatment Name | string |  | 255 |  |  |
| ProductCode | Product Code | string |  | 80 |  |  |
| ShouldUseTaxTreatmentItems | Use Tax Treatment Items | boolean |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxCode | Tax Code | string |  | 80 |  |  |
| TaxPolicyId | Tax Policy ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
