---
title: "PresenceUserConfig"
domain: sfFieldRef
topic: presenceuserconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.480Z
estimatedTokens: 694
keywords: [PresenceUserConfig, configuration, determines, presence, user’s, settings, API, version, 32.0, later]
---

# PresenceUserConfig

> Represents a configuration that determines a presence user’s
   settings. This object is available in API version 32.0 and later.

# PresenceUserConfig

Represents a configuration that determines a presence user’s settings. This object is available in API version 32.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PresenceUserConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_presenceuserconfig.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AcwExtensionDuration | Extension duration (seconds) | int | 9 |  |  |  |
| AfterConvoWorkMaxTime | Duration (seconds) | int | 9 |  |  |  |
| Capacity | Capacity | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomSoundId | Static Resource ID | reference |  | 18 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| HasAcwExtensionEnabled | Let agent extend timer | boolean |  |  |  |  |
| HasAfterConvoWorkTimer | Give agents wrap-up time after conversations | boolean |  |  |  |  |
| Id | Presence Configuration ID | id |  | 18 |  |  |
| InterruptibleCapacity | Interruptible Capacity | int | 9 |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Presence Configuration Name | string |  | 80 |  |  |
| MaxExtensions | Max Extensions | picklist |  | 255 |  |  |
| OptionsIsAllowAnyDestinationFlowForTransferEnabled | IsAllowAnyDestinationFlowForTransferEnabled | boolean |  |  |  |  |
| OptionsIsAllowAnyDestinationProfileForTransferEnabled | IsAllowAnyDestinationProfileForTransferEnabled | boolean |  |  |  |  |
| OptionsIsAllowAnyDestinationQueueForTransferEnabled | IsAllowAnyDestinationQueueForTransferEnabled | boolean |  |  |  |  |
| OptionsIsAutoAcceptEnabled | IsAutoAcceptEnabled | boolean |  |  |  |  |
| OptionsIsDeclineEnabled | IsDeclineEnabled | boolean |  |  |  |  |
| OptionsIsDeclineReasonEnabled | IsDeclineReasonEnabled | boolean |  |  |  |  |
| OptionsIsDisconnectSoundEnabled | IsDisconnectSoundEnabled | boolean |  |  |  |  |
| OptionsIsRequestSoundEnabled | IsRequestSoundEnabled | boolean |  |  |  |  |
| PresenceStatusOnDeclineId | Service Presence Status ID | reference |  | 18 |  |  |
| PresenceStatusOnPushTimeoutId | Service Presence Status ID | reference |  | 18 |  |  |
| SoundLength | Sound Length (Seconds) | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
