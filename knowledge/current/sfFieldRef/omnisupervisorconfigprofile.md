---
title: "OmniSupervisorConfigProfile"
domain: sfFieldRef
topic: omnisupervisorconfigprofile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.374Z
estimatedTokens: 280
keywords: [OmniSupervisorConfigProfile, supervisor, profiles, Omni-Channel, configuration, User-level, configurations, override, profile-level, API, version, 41.0, later]
---

# OmniSupervisorConfigProfile

> Represents the supervisor profiles to which an Omni-Channel supervisor configuration applies. User-level configurations override profile-level configurations. This
		object is available in API version 41.0 and later.

# OmniSupervisorConfigProfile

Represents the supervisor profiles to which an Omni-Channel supervisor configuration applies. User-level configurations override profile-level configurations. This object is available in API version 41.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OmniSupervisorConfigProfile in the Omnistudio Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Omni Supervisor Configuration for Profile ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OmniSupervisorConfigId | Omni Supervisor Configuration ID | reference |  | 18 |  |  |
| ProfileId | Profile ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
