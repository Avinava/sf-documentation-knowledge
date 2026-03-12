---
title: "ProductSellingModel"
domain: sfFieldRef
topic: productsellingmodel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:09.803Z
estimatedTokens: 426
keywords: [ProductSellingModel, product, sold, one-time, sale, evergreen, subscription, term-defined, subscription’s, term, multiple, selling, models, API, version]
---

# ProductSellingModel

> Defines one method by which a product can be sold; for example, as a
         one-time sale, an evergreen subscription, or a term-defined subscription. If the product is
         sold on subscription, this object defines the subscription’s term. A product can have
         multiple product selling models. This object is available in API version 55.0 and
      later.

# ProductSellingModel

Defines one method by which a product can be sold; for example, as a one-time sale, an evergreen subscription, or a term-defined subscription. If the product is sold on subscription, this object defines the subscription’s term. A product can have multiple product selling models. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProductSellingModel](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_productsellingmodel.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform and Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Product Selling Model ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Product Selling Model Name | string |  | 255 |  |  |
| PricingTerm | Pricing Term | int | 9 |  |  |  |
| PricingTermUnit | Pricing Term Unit | picklist |  | 255 |  |  |
| SellingModelType | Selling Model Type | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
