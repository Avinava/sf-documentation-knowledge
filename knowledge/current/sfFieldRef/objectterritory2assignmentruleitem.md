---
title: "ObjectTerritory2AssignmentRuleItem"
domain: sfFieldRef
topic: objectterritory2assignmentruleitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.031Z
estimatedTokens: 385
keywords: [ObjectTerritory2AssignmentRuleItem, row, selection, criteria, ObjectTerritory2AssignmentRule, created, deleted, BooleanFilter, corresponding, Sales, Territories, enabled]
---

# ObjectTerritory2AssignmentRuleItem

> A single row of selection criteria for an
            ObjectTerritory2AssignmentRule object. ObjectTerritory2AssignmentRuleItem can only be
            created or deleted if the BooleanFilter field on its corresponding
            ObjectTerritory2AssignmentRule object is a null value.
            Available if Sales Territories has been enabled.

# ObjectTerritory2AssignmentRuleItem

A single row of selection criteria for an ObjectTerritory2AssignmentRule object. ObjectTerritory2AssignmentRuleItem can only be created or deleted if the BooleanFilter field on its corresponding ObjectTerritory2AssignmentRule object is a null value. Available if Sales Territories has been enabled.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ObjectTerritory2AssignmentRuleItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_objectterritory2assignmentruleitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Field | Field Name | picklist |  | 255 |  |  |
| Id | Object Territory Assignment Rule Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Operation | Operation | picklist |  | 255 |  |  |
| RuleId | Object Territory Assignment Rule ID | reference |  | 18 |  |  |
| SortOrder | Sort Order | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Value | Value | string |  | 1000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
