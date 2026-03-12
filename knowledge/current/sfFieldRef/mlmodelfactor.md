---
title: "MLModelFactor"
domain: sfFieldRef
topic: mlmodelfactor
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:03.479Z
estimatedTokens: 346
keywords: [MLModelFactor, positive, negative, effect, model’s, score, API, version, 53.0, later]
---

# MLModelFactor

> Represents a field value that has a positive or negative effect on the
         model’s score. This object is available in API version 53.0 and later.

# MLModelFactor

Represents a field value that has a positive or negative effect on the model’s score. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MLModelFactor](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_mlmodelfactor.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Correlation | Correlation | double |  |  | 18 | 0 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FactorType | Factor Category | picklist |  | 255 |  |  |
| Id | ML Model Factor ID | id |  | 18 |  |  |
| Importance | Importance | double |  |  | 18 | 0 |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ModelId | ML Model ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Factor Type | picklist |  | 255 |  |  |
| Weight | Weight | double |  |  | 18 | 0 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
