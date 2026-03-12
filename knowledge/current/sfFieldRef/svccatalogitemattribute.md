---
title: "SvcCatalogItemAttribute"
domain: sfFieldRef
topic: svccatalogitemattribute
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.942Z
estimatedTokens: 517
keywords: [SvcCatalogItemAttribute, pre-filled, fulfillment, flow, inputs, user, questions, ask, users, context, service, catalog, item, version, API]
---

# SvcCatalogItemAttribute

> Represents pre-filled fulfillment flow inputs and user questions to ask to
         users in the context of a service catalog item version. This object is available in
      API version 57.0 and later.

# SvcCatalogItemAttribute

Represents pre-filled fulfillment flow inputs and user questions to ask to users in the context of a service catalog item version. This object is available in API version 57.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SvcCatalogItemAttribute in the Financial Services Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AttributeType | Attribute Type | picklist |  | 255 |  |  |
| BaseObjectApiName | Base Object API Name | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DataType | Data Type | picklist |  | 255 |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| Id | Service Catalog Item Attribute ID | id |  | 18 |  |  |
| InputVariable | Input Variable | string |  | 80 |  |  |
| InputVariableValue | Input Variable Value | textarea |  | 32000 |  |  |
| IsAttrValueDerivAtRuntime | Is Attribute Value Derived At Runtime | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRequired | Required | boolean |  |  |  |  |
| ItemVersionStatus | Item Version Status | picklist |  | 255 |  |  |
| Label | Label | string |  | 80 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ParentAttributeId | Parent Attribute ID | reference |  | 18 |  |  |
| ReferenceObjectApiName | Reference Object API Name | string |  | 255 |  |  |
| SortOrder | Sort Order | int | 9 |  |  |  |
| StandardFieldApiName | Standard Field API Name | string |  | 255 |  |  |
| SvcCatalogItemDefId | Service Catalog Item Definition ID | reference |  | 18 |  |  |
| SvcCatalogItemGroupId | Svc Catalog Item Group ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
