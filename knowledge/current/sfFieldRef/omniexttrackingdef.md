---
title: "OmniExtTrackingDef"
domain: sfFieldRef
topic: omniexttrackingdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.225Z
estimatedTokens: 360
keywords: [OmniExtTrackingDef, connection, OmniTrackingGroup, OmniAnalytics, third-party, Analytics, system, Google, API, version, 60.0, later]
---

# OmniExtTrackingDef

> Represents a connection between an OmniTrackingGroup in OmniAnalytics and a
         third-party Analytics system such as Google Analytics. This object is available in API
      version 60.0 and later.

# OmniExtTrackingDef

Represents a connection between an OmniTrackingGroup in OmniAnalytics and a third-party Analytics system such as Google Analytics. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OmniExtTrackingDef in the Omnistudio Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| Id | Omni External Tracking Definition ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| OmniExtTrackingDefKey | Omni External Tracking Definition Key | string |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TrackingFrameworkInformation | Tracking Framework Information | textarea |  | 32768 |  |  |
| TrackingServiceProvider | Tracking Service Provider | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
