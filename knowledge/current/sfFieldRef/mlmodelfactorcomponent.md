---
title: "MLModelFactorComponent"
domain: sfFieldRef
topic: mlmodelfactorcomponent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.487Z
estimatedTokens: 447
keywords: [MLModelFactorComponent, MLModelFactor, represent, range, “Title, CEO”, “Annual, Revenue, >10000000”, API, version, 53.0, later]
---

# MLModelFactorComponent

> Represents information about the related MLModelFactor. For example, this
         object can represent a field value or a field range such as “Title = CEO” or “Annual
         Revenue >10000000”. This object is available in API version 53.0 and later.

# MLModelFactorComponent

Represents information about the related MLModelFactor. For example, this object can represent a field value or a field range such as “Title = CEO” or “Annual Revenue >10000000”. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MLModelFactorComponent](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_mlmodelfactorcomponent.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FactorLabelKey | Factor Label Key | string |  | 255 |  |  |
| FeatureType | Feature Type | picklist |  | 255 |  |  |
| FeatureValue | Feature Value | string |  | 255 |  |  |
| Id | ML Model Factor Components ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LeftHandDerivedField | Left Hand Derived Field | string |  | 120 |  |  |
| ModelFactorId | ML Model Factor ID | reference |  | 18 |  |  |
| ModelId | ML Model ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| Operator | Operator | picklist |  | 255 |  |  |
| RightHandDerivedField | Right Hand Derived Field | string |  | 120 |  |  |
| SortOrder | Sort Order | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Value | Value | string |  | 120 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
