---
title: "VirtualVisitConfig"
domain: sfFieldRef
topic: virtualvisitconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:16.695Z
estimatedTokens: 452
namespace: NamespacePrefix
keywords: [VirtualVisitConfig, configuration, external, video, provider, API, version, 54.0, later]
---

# VirtualVisitConfig

> Represents the configuration of an external video provider. This object
      is available in API version 54.0 and later.

**Namespace:** `NamespacePrefix`

# VirtualVisitConfig

Represents the configuration of an external video provider. This object is available in API version 54.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see VirtualVisitConfig in the Virtual Calls Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ComprehendServiceType | Speech Analysis Service Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| ExperienceCloudSiteUrl | Experience Cloud Page API Name | string |  | 255 |  |  |
| ExternalRoleIdentifier | External Role Identifier | string |  | 1600 |  |  |
| Id | Video Call Configuration ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| MessagingRegion | AWS Video Waiting Room and Messaging Region | string |  | 255 |  |  |
| NamedCredentialId | Named Credential ID | reference |  | 18 |  |  |
| NamespacePrefix | Namespace Prefix | string |  | 15 |  |  |
| StorageBucketName | Storage Bucket Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |
| VideoCallApptTypeValue | Video Call Appointment Type Value | string |  | 255 |  |  |
| VideoControlRegion | AWS API Endpoint Region | string |  | 255 |  |  |
| VisitRegion | AWS Video Region | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
