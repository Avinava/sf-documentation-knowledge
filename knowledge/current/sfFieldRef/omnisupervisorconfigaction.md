---
title: "OmniSupervisorConfigAction"
domain: sfFieldRef
topic: omnisupervisorconfigaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.365Z
estimatedTokens: 284
keywords: [OmniSupervisorConfigAction, actions, supervisors, Omni-Channel, supervisor, configuration, API, version, 56.0, later]
---

# OmniSupervisorConfigAction

> Represents the actions available to the supervisors of an Omni-Channel
         supervisor configuration. This object is available in API version 56.0 and later.

# OmniSupervisorConfigAction

Represents the actions available to the supervisors of an Omni-Channel supervisor configuration. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OmniSupervisorConfigAction in the Omnistudio Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DisplayOrder | Display Order | int | 9 |  |  |  |
| Id | Omni Supervisor Configuration Action ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OmniSupervisorActionType | Omni Supervisor Action Type | picklist |  | 255 |  |  |
| OmniSupervisorConfigId | Omni Supervisor Configuration ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
