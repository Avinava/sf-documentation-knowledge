---
title: "OmniTrackingGroup"
domain: sfFieldRef
topic: omnitrackinggroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.411Z
estimatedTokens: 379
keywords: [OmniTrackingGroup, group, FlexCard, OmniScript, components, their, user, interactions, tracked, together, OmniAnalytics, API, version, 60.0, later]
---

# OmniTrackingGroup

> Represents a group of FlexCard and OmniScript components that have their user
         interactions tracked together in OmniAnalytics. This object is available in API
      version 60.0 and later.

# OmniTrackingGroup

Represents a group of FlexCard and OmniScript components that have their user interactions tracked together in OmniAnalytics. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OmniTrackingGroup in the Omnistudio Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| EndDate | End Date | date |  |  |  |  |
| GroupType | Group Type | picklist |  | 255 |  |  |
| Id | Omni Tracking Group ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| MaxAgeInDays | Max Age In Days | int | 9 |  |  |  |
| OmniExtTrackingDefId | Omni External Tracking Definition ID | reference |  | 18 |  |  |
| OmniTrackingGroupKey | Omni Tracking Group Key | string |  | 40 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
