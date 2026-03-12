---
title: "AttributeDefinition"
domain: sfFieldRef
topic: attributedefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:49.017Z
estimatedTokens: 538
keywords: [AttributeDefinition, product, asset, attribute, hardward, specification, software, detail, API, version, 57.0, later]
---

# AttributeDefinition

> Represents a product, asset, or object attribute, for example, a hardward
         specification or software detail. This object is available in API version 57.0 and
      later.

# AttributeDefinition

Represents a product, asset, or object attribute, for example, a hardward specification or software detail. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AttributeDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_attributedefinition.htm "HTML (New Window)") in the Field Service Developer Guide, Object Reference for the Salesforce Platform, and Salesforce Pricing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Code | Code | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DataType | Data Type | picklist |  | 255 |  |  |
| DefaultHelpText | Default Help Text | textarea |  | 32000 |  |  |
| DefaultValue | Default Value | string |  | 255 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DeveloperName | API Name | string |  | 80 |  |  |
| Id | Attribute Definition ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRequired | Required | boolean |  |  |  |  |
| Label | Label | string |  | 255 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PicklistId | Attribute Picklist ID | reference |  | 18 |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |
| ValueDescription | Value Description | textarea |  | 32000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
