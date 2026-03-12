---
title: "ServiceChannel"
domain: sfFieldRef
topic: servicechannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.388Z
estimatedTokens: 548
keywords: [ServiceChannel, channel, work, items, received, organization—for, cases, chats, leads, API, version, 32.0, later]
---

# ServiceChannel

> Represents a channel of work items that are received from your
			organization—for example, cases, chats, or leads. This object is available
		in API version 32.0 and later.

# ServiceChannel

Represents a channel of work items that are received from your organization—for example, cases, chats, or leads. This object is available in API version 32.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ServiceChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_servicechannel.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AcwExtensionDuration | Extension duration (seconds) | int | 9 |  |  |  |
| AfterConvoWorkMaxTime | Duration (seconds) | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomSoundId | Static Resource ID | reference |  | 18 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| DoesMinimizeWidgetOnAccept | Minimize Omni-Channel component when work is accepted | boolean |  |  |  |  |
| DoesOverridePresenceAudio | Override agents' audio settings | boolean |  |  |  |  |
| HasAcwExtensionEnabled | Let agent extend timer | boolean |  |  |  |  |
| HasAfterConvoWorkTimer | Override After Conversation Work settings in presence configuration | boolean |  |  |  |  |
| HasAutoAcceptEnabled | Automatically accept work requests | boolean |  |  |  |  |
| Id | Service Channel ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Service Channel Name | string |  | 80 |  |  |
| MaxExtensions | Max Extensions | picklist |  | 255 |  |  |
| RelatedEntity | Custom Object Definition ID | picklist |  | 255 |  |  |
| RoutingConfigurationId | Routing Configuration ID | reference |  | 18 |  |  |
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
