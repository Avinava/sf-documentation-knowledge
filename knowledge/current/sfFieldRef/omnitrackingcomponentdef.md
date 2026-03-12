---
title: "OmniTrackingComponentDef"
domain: sfFieldRef
topic: omnitrackingcomponentdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.399Z
estimatedTokens: 400
keywords: [OmniTrackingComponentDef, FlexCard, OmniScript, member, OmniTrackingGroup, tracks, user, interactions, OmniAnalytics, API, version, 60.0, later]
---

# OmniTrackingComponentDef

> Represents a FlexCard or OmniScript that is a member of an OmniTrackingGroup,
         which tracks user interactions in OmniAnalytics. This object is available in API
      version 60.0 and later.

# OmniTrackingComponentDef

Represents a FlexCard or OmniScript that is a member of an OmniTrackingGroup, which tracks user interactions in OmniAnalytics. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OmniTrackingComponentDef in the Omnistudio Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ComponentType | Component Type | picklist |  | 255 |  |  |
| ComponentVersion | Component Version | double |  |  | 18 | 0 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Omni Tracking Component Definition ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastRunDate | Last run date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| MqJob | Mq job ID | string |  | 40 |  |  |
| MqJobStatus | Mq job status | string |  | 11 |  |  |
| OmniTrackingComponentDefKey | Omni Tracking Component Definition Key | string |  | 40 |  |  |
| OmniTrackingGroupId | Omni Tracking Group ID | reference |  | 18 |  |  |
| PayloadOutput | Payload output | textarea |  | 131072 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
