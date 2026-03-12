---
title: "CalcProcStepRelationship"
domain: sfFieldRef
topic: calcprocsteprelationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.894Z
estimatedTokens: 425
namespace: Namespace
keywords: [CalcProcStepRelationship, parent-child, relationship, two, Expression, Steps, Version, label, Step, API, 53.0, later]
---

# CalcProcStepRelationship

> Defines a parent-child relationship between two Expression Set Steps in an
         Expression Set Version. The label for this object is Expression Set Step Relationship.
      This object is available in API version 53.0 and later.

**Namespace:** `Namespace`

# CalcProcStepRelationship

Defines a parent-child relationship between two Expression Set Steps in an Expression Set Version. The label for this object is Expression Set Step Relationship. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CalcProcStepRelationship](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_calcprocsteprelationship.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CalcProcStepId | Calculation Procedure Step ID | reference |  | 18 |  |  |
| CalcProcVersionId | Calculation Procedure Version ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| Id | Expression Set Step Relationship ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Label | Label | string |  | 80 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| Namespace | Namespace | string |  | 255 |  |  |
| ParentCalcProcStepId | Calculation Procedure Step ID | reference |  | 18 |  |  |
| Priority | Priority | int | 9 |  |  |  |
| RelationshipType | Relationship Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
