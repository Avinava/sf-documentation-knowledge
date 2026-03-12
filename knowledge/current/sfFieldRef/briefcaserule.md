---
title: "BriefcaseRule"
domain: sfFieldRef
topic: briefcaserule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.362Z
estimatedTokens: 419
keywords: [BriefcaseRule, rule, records, briefcase, definition, API, version, 50.0, later]
---

# BriefcaseRule

> Represents a rule that specifies records for a briefcase definition.
		This object is available in API version 50.0 and later.

# BriefcaseRule

Represents a rule that specifies records for a briefcase definition. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [BriefcaseRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_briefcaserule.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BriefcaseId | Briefcase Definition ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FilterLogic | Filter Logic | string |  | 255 |  |  |
| Id | Briefcase Rule ID | id |  | 18 |  |  |
| IsAscendingOrder | Ascending | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OptionsIsRelatedFilesRule | IsRelatedFilesRule | boolean |  |  |  |  |
| OrderBy | Order By | picklist |  | 255 |  |  |
| ParentRuleId | Briefcase Rule ID | reference |  | 18 |  |  |
| QueryScope | Scope | picklist |  | 255 |  |  |
| RecordLimit | Limit | int | 9 |  |  |  |
| RelationshipField | Custom Field Definition ID | picklist |  | 255 |  |  |
| RelationshipType | Relationship Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetEntity | Target Object | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
