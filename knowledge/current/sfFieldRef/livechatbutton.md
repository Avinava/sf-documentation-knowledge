---
title: "LiveChatButton"
domain: sfFieldRef
topic: livechatbutton
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:02.481Z
estimatedTokens: 895
keywords: [LiveChatButton, button, visitors, chats, Chat, users, API, version, 24.0, later]
---

# LiveChatButton

> Represents a button that allows visitors to request chats with Chat
         users. This object is available in API version 24.0 and later.

# LiveChatButton

Represents a button that allows visitors to request chats with Chat users. This object is available in API version 24.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [LiveChatButton](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_livechatbutton.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Animation | Animation | picklist |  | 255 |  |  |
| AutoGreeting | Auto Greeting | textarea |  | 1000 |  |  |
| ChasitorIdleTimeout | Customer Time-Out (seconds) | int | 9 |  |  |  |
| ChasitorIdleTimeoutWarning | Customer Time-Out Warning (seconds) | int | 9 |  |  |  |
| ChatPageId | Visualforce Page ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomAgentName | Custom Agent Name | string |  | 255 |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| HasQueue | Enable queue | boolean |  |  |  |  |
| Id | Chat Button ID | id |  | 18 |  |  |
| InviteEndPosition | End Position | picklist |  | 255 |  |  |
| InviteImageId | Static Resource ID | reference |  | 18 |  |  |
| InviteStartPosition | Start Position | picklist |  | 255 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRoutingFlowEnabled | Use a flow for routing (recommended) | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Name | string |  | 80 |  |  |
| NumberOfReroutingAttempts | Number of Rerouting Attempts | int | 9 |  |  |  |
| OfflineImageId | Static Resource ID | reference |  | 18 |  |  |
| OnlineImageId | Static Resource ID | reference |  | 18 |  |  |
| OptionsHasChasitorIdleTimeout | Enable customer timeout | boolean |  |  |  |  |
| OptionsHasInviteAfterAccept | Allow invitation to be triggered again after accepting | boolean |  |  |  |  |
| OptionsHasInviteAfterReject | Allow invitation to be triggered again after rejecting | boolean |  |  |  |  |
| OptionsHasRerouteDeclinedRequest | Reroute Declined Requests | boolean |  |  |  |  |
| OptionsIsAutoAccept | isAutoAccept | boolean |  |  |  |  |
| OptionsIsInviteAutoRemove | Auto Remove Invitation | boolean |  |  |  |  |
| OverallQueueLength | Overall Queue Size | int | 9 |  |  |  |
| PerAgentQueueLength | Queue Size Per Agent | int | 9 |  |  |  |
| PostchatPageId | Visualforce Page ID | reference |  | 18 |  |  |
| PostchatUrl | Post-Chat URL | string |  | 255 |  |  |
| PrechatFormPageId | Visualforce Page ID | reference |  | 18 |  |  |
| PrechatFormUrl | Prechat Form URL | string |  | 255 |  |  |
| PushTimeout | Push Time-Out (seconds) | int | 9 |  |  |  |
| QueueId | Queue ID | reference |  | 18 |  |  |
| RoutingConfigurationId | Routing Configuration ID | reference |  | 18 |  |  |
| RoutingType | Routing Type | picklist |  | 255 |  |  |
| SiteId | Site ID | reference |  | 18 |  |  |
| SkillId | Skill ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TimeToRemoveInvite | Display Time | int | 9 |  |  |  |
| Type | Type | picklist |  | 255 |  |  |
| WindowLanguage | Language | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
