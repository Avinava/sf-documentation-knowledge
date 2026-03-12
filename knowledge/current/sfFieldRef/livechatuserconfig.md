---
title: "LiveChatUserConfig"
domain: sfFieldRef
topic: livechatuserconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.571Z
estimatedTokens: 802
keywords: [LiveChatUserConfig, setting, console, settings, Chat, users, API, version, 24.0, later]
---

# LiveChatUserConfig

> Represents a setting that controls the console settings for Chat
   users. This object is available in API version 24.0 and later.

# LiveChatUserConfig

Represents a setting that controls the console settings for Chat users. This object is available in API version 24.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LiveChatUserConfig](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_livechatuserconfig.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AutoGreeting | Auto Greeting | textarea |  | 1000 |  |  |
| Capacity | Chat Capacity | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CriticalWaitTime | Critical Wait Alert Time (seconds) | int | 9 |  |  |  |
| CustomAgentName | Custom Agent Name | string |  | 255 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| HasLogoutSound | Play a notification sound if Omni Channel loses connection | boolean |  |  |  |  |
| HasNotifications | Notifications Enabled | boolean |  |  |  |  |
| HasRequestSound | Play a notification sound for chat requests | boolean |  |  |  |  |
| HasSneakPeek | Sneak Peek Enabled | boolean |  |  |  |  |
| HasTransferConferenceGreeting | Disable Auto Greeting on Transfer/Conference | boolean |  |  |  |  |
| Id | Chat Agent Configuration ID | id |  | 18 |  |  |
| IsAutoAwayOnDecline | Auto Away on Decline | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Chat Agent Configuration Name | string |  | 80 |  |  |
| OptionsHasAgentFileTransfer | Agent File Transfer Enabled | boolean |  |  |  |  |
| OptionsHasAgentSneakPeek | Agent Sneak Peek Enabled | boolean |  |  |  |  |
| OptionsHasAssistanceFlag | Assistance Flag Enabled | boolean |  |  |  |  |
| OptionsHasChatConferencing | Chat Conferencing Enabled | boolean |  |  |  |  |
| OptionsHasChatMonitoring | Chat Monitoring Enabled | boolean |  |  |  |  |
| OptionsHasChatTransferToAgent | Chat Transfer To Agents Enabled | boolean |  |  |  |  |
| OptionsHasChatTransferToButton | Chat Transfer To Chat Buttons Enabled | boolean |  |  |  |  |
| OptionsHasChatTransferToSkill | Chat Transfer To Skills Enabled | boolean |  |  |  |  |
| OptionsHasTransferConferenceGreeting | HasTransferConferenceGreeting | boolean |  |  |  |  |
| OptionsHasVisitorBlocking | Visitor Blocking Enabled | boolean |  |  |  |  |
| OptionsHasWhisperMessage | Whisper Messages Enabled | boolean |  |  |  |  |
| OptionsIsAutoAwayOnPushTimeout | Auto Away on Push Time-Out | boolean |  |  |  |  |
| SupervisorDefaultAgentStatus | Default Agent Status Filter | picklist |  | 255 |  |  |
| SupervisorDefaultButtonId | Chat Button ID | reference |  | 18 |  |  |
| SupervisorDefaultSkillId | Skill ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
