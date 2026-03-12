---
title: "WorkTypeSvcTerrSchdPrio"
domain: sfFieldRef
topic: worktypesvcterrschdprio
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:17.820Z
estimatedTokens: 385
keywords: [WorkTypeSvcTerrSchdPrio, priority, combination, service, territory, work, procedure, fetching, appointment, slots, API, version, 59.0, later]
---

# WorkTypeSvcTerrSchdPrio

> Represents the priority of the combination of the service territory, work
         type, and work procedure while fetching appointment slots. This object is available in
      API version 59.0 and later.

# WorkTypeSvcTerrSchdPrio

Represents the priority of the combination of the service territory, work type, and work procedure while fetching appointment slots. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see WorkTypeSvcTerrSchdPrio in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Work Type Service Territory Scheduling Priority ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentServiceTerritoryId | Territory ID | reference |  | 18 |  |  |
| Priority | Priority | int | 8 |  |  |  |
| ServiceTerritoryId | Territory ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |
| WorkProcedureId | Work Procedure ID | reference |  | 18 |  |  |
| WorkTypeId | Work Type ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
