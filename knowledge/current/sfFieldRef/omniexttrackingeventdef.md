---
title: "OmniExtTrackingEventDef"
domain: sfFieldRef
topic: omniexttrackingeventdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.231Z
estimatedTokens: 384
keywords: [OmniExtTrackingEventDef, FlexCard, OmniScript, user, interaction, data, third-party, Analytics, system, Google, accept, API, version, 60.0, later]
---

# OmniExtTrackingEventDef

> Represents a format for FlexCard or OmniScript user interaction data that a
         third-party Analytics system such as Google Analytics can accept. This object is
      available in API version 60.0 and later.

# OmniExtTrackingEventDef

Represents a format for FlexCard or OmniScript user interaction data that a third-party Analytics system such as Google Analytics can accept. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OmniExtTrackingEventDef in the Omnistudio Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ComponentType | Component Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Omni External Tracking Event Definition ID | id |  | 18 |  |  |
| InclusionRule | Inclusion Rule | textarea |  | 32768 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| OmniExtTrackingDefId | Omni External Tracking Definition ID | reference |  | 18 |  |  |
| OmniExtTrackingEventDefKey | Omni External Tracking Event Definition Key | string |  | 40 |  |  |
| PayloadTemplate | Payload Template | textarea |  | 32768 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
