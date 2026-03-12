---
title: "LiveChatUserConfig"
domain: object-reference
topic: livechatuserconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.441Z
estimatedTokens: 1684
keywords: [LiveChatUserConfig, setting, console, settings, Chat, users, API, version, 24.0, later, Calls, Special, Access, Rules, Usage]
---

# LiveChatUserConfig

> Represents a setting that controls the console settings for Chat
   users. This object is available in API version 24.0 and later.

# LiveChatUserConfig

Represents a setting that controls the console settings for Chat users. This object is available in API version 24.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update()

## Special Access Rules

As of Summer ’20 and later, only authenticated internal and external users can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| AutoGreeting | TypetextareaPropertiesCreate, NillableDescriptionThe text that is automatically sent from an agent to a visitor when a chat session starts. |
| Capacity | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionLimits the amount of active chat sessions an agent can engage in. |
| CriticalWaitTime | TypeintPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe amount of time before a chat flashes to alert an agent to answer it. |
| CustomAgentName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe custom name of the agent associated with the Live Agent configuration. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Nillable, SortDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| HasLogoutSound | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionDetermines whether a sound plays when an agent logs out of the console. |
| HasNotifications | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionDetermines whether desktop notifications are enabled for the configuration. Available in API version 25.0 and later. |
| HasRequestSound | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionDetermines whether a sound plays when a chat request comes in. |
| HasSneakPeek | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionDetermines whether an agent sees a real-time preview of the messages typed by a visitor. |
| HasTransferConferenceGreeting | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionDetermines whether to enable sending an autogreeting when you transfer to another agent or invite an agent to a conference chat.The default value is false. Available in API version 53.0 and later. |
| IsAutoAwayOnDecline | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, SortDescriptionDetermines whether agents’ status is automatically changed to Away when they decline a chat request. Available in API version 26.0 and later. |
| Language | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe language of the configuration. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, SortDescriptionThe name of the configuration. |
| OptionsHasAgentFileTransfer | TypebooleanPropertiesCreate, FilterDescriptionDetermines whether agents can initiate a file transfer from a chat customer. Available in API version 31.0 and later. |
| OptionsHasAgentSneakPeek | TypebooleanPropertiesCreate, FilterDescriptionDetermines whether Sneak Peek is enabled for agents. Available in API version 29.0 and later. |
| OptionsHasAssistanceFlag | TypebooleanPropertiesCreate, FilterDescriptionDetermines whether assistance flags are enabled for agents. Available in API version 29.0 and later. |
| OptionsHasChatConferencing | TypebooleanPropertiesCreate, FilterDescriptionDetermines whether agents can invite other agents into a customer chat. Available in API version 34.0 and later. |
| OptionsHasChatMonitoring | TypebooleanPropertiesCreate, FilterDescriptionDetermines whether supervisors can view agents’ ongoing chats. Available in API version 29.0 and later. |
| OptionsHasChatTransferToAgent | TypebooleanPropertiesCreate, FilterDescriptionSpecifies whether an agent can transfer a chat directly to another agent. Available in API version 36.0 and later. |
| OptionsHasChatTransferToButton | TypebooleanPropertiesCreate, FilterDescriptionSpecifies whether an agent can transfer a chat to an agent assigned to a particular chat button. Available in API version 36.0 and later. |
| OptionsHasChatTransferToSkill | TypebooleanPropertiesCreate, FilterDescriptionSpecifies whether an agent can transfer a chat to agents assigned to a particular skill. Available in API version 36.0 and later. |
| OptionsHasTransferConferenceGreeting | TypebooleanPropertiesCreate, Filter, UpdateDescriptionSpecifies whether an agent can transfer a chat to an autogreeting or conference greeting. Available in API version 53.0 and later. |
| OptionsHasVisitorBlocking | TypebooleanPropertiesCreate, FilterDescriptionDetermines whether an agent can block IP addresses of troublesome visitors. Available in API version 34.0 and later. |
| OptionsHasWhisperMessage | TypebooleanPropertiesCreate, FilterDescriptionDetermines whether supervisors can send private messages to agents within an agent’s chat with a customer. Available in API version 29.0 and later. |
| OptionsIsAutoAwayOnPushTimeout | TypebooleanPropertiesCreate, FilterDescriptionDetermines whether an agent’s status automatically changes to Away if the agent doesn’t respond to a chat request within the specified push time-out limit. Available in API version 34.0 and later. |
| SupervisorDefaultAgentStatus | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe default agent status by which to filter agents in the Agent Status list in the supervisor panel. |
| SupervisorDefaultButtonId | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe default button ID by which to filter agents in the Agent Status list in the supervisor panel. |
| SupervisorDefaultSkillId | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe default skill ID by which to filter agents in the Agent Status list in the supervisor panel. |

## Usage

Use this object to query and manage agent configurations in Chat.
