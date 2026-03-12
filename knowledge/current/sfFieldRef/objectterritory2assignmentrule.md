---
title: "ObjectTerritory2AssignmentRule"
domain: sfFieldRef
topic: objectterritory2assignmentrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.026Z
estimatedTokens: 410
keywords: [ObjectTerritory2AssignmentRule, territory, assignment, rule, that’s, associated, Account, ObjectTerritory2AssignmentRuleItem, created, deleted, BooleanFilter, corresponding, Sales, Territories, enabled]
---

# ObjectTerritory2AssignmentRule

> Represents a territory assignment rule that’s associated with an
   object, such as Account. ObjectTerritory2AssignmentRuleItem can be created or deleted if the
   BooleanFilter field on its corresponding ObjectTerritory2AssignmentRule is
    null. Available if Sales Territories has been
  enabled.

# ObjectTerritory2AssignmentRule

Represents a territory assignment rule that’s associated with an object, such as Account. ObjectTerritory2AssignmentRuleItem can be created or deleted if the BooleanFilter field on its corresponding ObjectTerritory2AssignmentRule is null. Available if Sales Territories has been enabled.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ObjectTerritory2AssignmentRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_objectterritory2assignmentrule.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BooleanFilter | Boolean Filter | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| Id | Object Territory Assignment Rule ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Rule Name | string |  | 80 |  |  |
| ObjectType | Object Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Territory2ModelId | Territory Model ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
