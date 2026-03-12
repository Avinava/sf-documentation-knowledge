---
title: "ProblemRelatedItem"
domain: sfFieldRef
topic: problemrelateditem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.877Z
estimatedTokens: 340
keywords: [ProblemRelatedItem, junction, relates, Problem, Asset, API, version, 53.0, later]
---

# ProblemRelatedItem

> Represents a junction object that relates a Problem to an Asset.
      This object is available in API version 53.0 and later.

# ProblemRelatedItem

Represents a junction object that relates a Problem to an Asset. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ProblemRelatedItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_problemrelateditem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetId | Asset ID | reference |  | 18 |  |  |
| Comment | Comment | textarea |  | 32000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Problem Related Item ID | id |  | 18 |  |  |
| ImpactLevel | Impact Level | picklist |  | 40 |  |  |
| ImpactType | Impact Type | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Problem Related Item Number | string |  | 255 |  |  |
| ProblemId | Problem ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
