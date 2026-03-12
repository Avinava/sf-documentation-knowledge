---
title: "SustainabilityPurchase"
domain: sfFieldRef
topic: sustainabilitypurchase
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.868Z
estimatedTokens: 489
keywords: [SustainabilityPurchase, sustainability, credits, purchases, carbon]
---

# SustainabilityPurchase

> Represents information related to the sustainability credits purchases such
         as carbon credits.

# SustainabilityPurchase

Represents information related to the sustainability credits purchases such as carbon credits.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SustainabilityPurchase in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillingAddress | Billing Address | address |  |  |  |  |
| BillingCity | Billing City | string |  | 40 |  |  |
| BillingCountry | Billing Country | string |  | 80 |  |  |
| BillingGeocodeAccuracy | Geocode Accuracy | picklist |  | 255 |  |  |
| BillingLatitude | Latitude | double |  |  | 18 | 15 |
| BillingLongitude | Longitude | double |  |  | 18 | 15 |
| BillingPostalCode | Billing Postal Code | string |  | 20 |  |  |
| BillingState | Billing State | string |  | 80 |  |  |
| BillingStreet | Billing Street | textarea |  | 255 |  |  |
| BrokerId | Supplier ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| ExternalIdentifier | External Identifier | string |  | 80 |  |  |
| Id | Sustainability Purchase ID | id |  | 18 |  |  |
| InvoiceNumber | Invoice Number | string |  | 80 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PurchaseOrderNumber | Purchase Order Number | string |  | 80 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
