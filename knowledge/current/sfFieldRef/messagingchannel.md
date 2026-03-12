---
title: "MessagingChannel"
domain: sfFieldRef
topic: messagingchannel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.181Z
estimatedTokens: 783
keywords: [MessagingChannel, communication, channel, end, user, send, message, agent, SMS, number, Facebook, another, messaging, API, version]
---

# MessagingChannel

> Represents a communication channel that an end user can use to send a
			message to an agent. A communication channel can be an SMS number, a Facebook page, or
			another supported messaging channel. This object is available in API version 40.0
		and later.

# MessagingChannel

Represents a communication channel that an end user can use to send a message to an agent. A communication channel can be an SMS number, a Facebook page, or another supported messaging channel. This object is available in API version 40.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MessagingChannel](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_messagingchannel.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BusinessHoursId | Business Hours ID | reference |  | 18 |  |  |
| ChannelAddressIdentifier | Channel Address Identifier | string |  | 36 |  |  |
| ConsentType | Consent Type | picklist |  | 255 |  |  |
| ConversationEndResponse | End Conversation | textarea |  | 65536 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefaultResponse | Default Response Text | textarea |  | 4096 |  |  |
| Description | Description | textarea |  | 65536 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| DoubleOptInPrompt | Double Opt-In Prompt | textarea |  | 65536 |  |  |
| EngagedResponse | Start Conversation | textarea |  | 65536 |  |  |
| FallbackQueueId | Queue ID | reference |  | 18 |  |  |
| Id | Messaging Channel ID | id |  | 18 |  |  |
| InitialResponse | Conversation Acknowledgement | textarea |  | 65536 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsLinkedRecordOpenedAsSubTab | Open linked record as a subtab within the Messaging Session | boolean |  |  |  |  |
| IsRequireDoubleOptIn | Require Double Opt-In? | boolean |  |  |  |  |
| IsRestrictedToBusinessHours | Is Restricted to Business Hours | boolean |  |  |  |  |
| IsoCountryCode | ISO Country Code | string |  | 2 |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Modified On | datetime |  |  |  |  |
| LinkingPreference | Select record type to link | picklist |  | 255 |  |  |
| MasterLabel | Channel Name | string |  | 80 |  |  |
| MessageType | Type | picklist |  | 255 |  |  |
| MessagingPlatformKey | Messaging Platform Key | string |  | 150 |  |  |
| OfflineAgentsResponse | Offline Agents Response | textarea |  | 65536 |  |  |
| OptInPrompt | Opt-In Prompt | textarea |  | 65536 |  |  |
| OutsideBusinessHoursResponse | Outside Business Hours Response | textarea |  | 65536 |  |  |
| PlatformType | Platform Type | picklist |  | 255 |  |  |
| RoutingConfigurationId | Routing Configuration ID | reference |  | 18 |  |  |
| RoutingType | Routing Type | picklist |  | 255 |  |  |
| SessionHandlerId | Routing Type ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetQueueId | Queue ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
