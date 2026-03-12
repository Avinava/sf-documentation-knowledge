---
title: "Territory2Model"
domain: sfFieldRef
topic: territory2model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.257Z
estimatedTokens: 459
keywords: [Territory2Model, territory, model, Sales, Territories, enabled]
---

# Territory2Model

> Represents a territory model. Available if Sales Territories has
		been enabled.

# Territory2Model

Represents a territory model. Available if Sales Territories has been enabled.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Territory2Model](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_territory2model.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActivatedDate | Activated Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeactivatedDate | Deactivated Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 255 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| Id | Territory Model ID | id |  | 18 |  |  |
| IsCloneSource | Clone source | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsOppUnassignmentDone | Whether the job that archives opportunity unassignment PK chunking has finished for a territory model | boolean |  |  |  |  |
| IsSharingGroupDeleteDone | Whether the job that archives deleted sharing groups has finished for a territory model | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastOppTerrAssignEndDate | Last successful opportunity territory assignment date | datetime |  |  |  |  |
| LastRunRulesEndDate | Last successful model realign date | datetime |  |  |  |  |
| Name | Label | string |  | 80 |  |  |
| State | State | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
