---
title: "InvoiceLineRelationship"
domain: sfFieldRef
topic: invoicelinerelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.929Z
estimatedTokens: 414
keywords: [InvoiceLineRelationship, relationship, invoice, line, items, support, bundles, parent, multiple, child, lines, API, version, 62.0, later]
---

# InvoiceLineRelationship

> Represents a relationship between invoice line items to support
         bundles where one parent invoice line has multiple child invoice lines. This object is
      available in API version 62.0 and later.

# InvoiceLineRelationship

Represents a relationship between invoice line items to support bundles where one parent invoice line has multiple child invoice lines. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InvoiceLineRelationship in the Billing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssociatedInvoiceLineId | Invoice Line ID | reference |  | 18 |  |  |
| AssociatedInvoiceLinePricing | Associated Invoice Line Pricing | picklist |  | 255 |  |  |
| AssociatedInvoiceLineRole | Associated Invoice Line Role | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Invoice Line Relationship ID | id |  | 18 |  |  |
| InvoiceId | Invoice ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MainInvoiceLineId | Invoice Line ID | reference |  | 18 |  |  |
| MainInvoiceLineRole | Main Invoice Line Role | picklist |  | 255 |  |  |
| Name | Invoice Line Relationship Name | string |  | 255 |  |  |
| ProductRelationshipTypeId | Product Relationship Type ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
