---
title: "LiveChatAgentConfig"
domain: metadata-api
topic: livechatagentconfig
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:40.412Z
estimatedTokens: 2018
keywords: [LiveChatAgentConfig, configuration, organization’s, Chat, deployment, how, chats, assigned, agent, whether, sounds, enabled, File, Suffix, Directory]
---

# LiveChatAgentConfig

> Represents the configuration of an
            organization’s Chat deployment, such as how many chats can be assigned to an
            agent and whether chat sounds are enabled.

# LiveChatAgentConfig

Represents the configuration of an organization’s Chat deployment, such as how many chats can be assigned to an agent and whether chat sounds are enabled.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

LiveChatAgentConfig configurations are referenced in the <developer\_name>.liveChatAgentConfig file in the liveChatAgentConfigs directory.

## Version

LiveChatAgentConfig is available in API version 28.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| assignments | AgentConfigAssignments | Specifies how agent configurations are assigned to Chat users. Agent configurations can be assigned to sets of users or sets of profiles. |
| autoGreeting | string | Specifies the greeting that displays when a customer begins a chat with an agent. |
| capacity | int | Specifies the maximum number of chats in which an agent can be engaged at a time. |
| criticalWaitTime | int | Specifies the number of seconds an agent can wait to answer an engaged chat before the chat tab flashes to alert the agent to answer it. |
| customAgentName | string | Specifies the custom name for an agent, if one has been set. Available in API version 29.0 and later. |
| disableTransferConferenceGreeting | boolean | Indicates whether the greeting is disabled for agents during chat transfer and chat conferencing (true) or not (false). Available in API version 53.0 and later. |
| enableAgentFileTransfer | boolean | Indicates whether file transfer is enabled for agents (true) or not (false). Available in API version 31.0 and later. |
| enableAgentSneakPeek | boolean | Specifies whether a supervisor can see the content of an agent’s message before they send it to a customer (true) or not (false). |
| enableAssistanceFlag | boolean | Indicates whether agents can raise an assistance flag to notify a supervisor that they need help. Available in API version 35.0 and later. |
| enableAutoAwayOnDecline | boolean | Indicates whether an agent appears as “away” (true) or not (false) when an agent declines a chat with a customer. |
| enableAutoAwayOnPushTimeout | boolean | Indicates whether an agent appears as “away” (true) or not (false) when a chat request that's been pushed to the agent times out. Available in API version 34.0 and later. |
| enableChatConferencing | boolean | Indicates whether chat conferencing is enabled for agents (true) or not (false). Available in API version 34.0 and later. |
| enableChatMonitoring | boolean | Indicates whether chat monitoring is enabled for support supervisors (true) or not (false). Available in API version 29.0 and later. |
| enableChatTransferToAgent | boolean | Indicates whether agents can transfer a chat to another agent (true) or not (false). Available in API version 36.0 and later. |
| enableChatTransferToButton | boolean | Indicates whether agents can transfer a chat to a button (true) or not (false). Available in API version 36.0 and later. |
| enableChatTransferToSkill | boolean | Indicates whether agents can transfer a chat to a skill group (true) or not (false). Available in API version 36.0 and later. |
| enableLogoutSound | boolean | Indicates whether a sound plays (true) or not (false) when an agent logs out of Chat. |
| enableNotifications | boolean | Indicates whether notifications of incoming chats appear for agents (true) or not (false). |
| enableRequestSound | boolean | Indicates whether a sound plays (true) or not (false) when a customer requests to chat with an agent. |
| enableSneakPeek | boolean | Indicates whether previews of customers’ messages are displayed as customers type (true) or not (false) in the agent’s Chat window. Available in API version 29.0 and later. |
| enableVisitorBlocking | boolean | Indicates whether an agent can block a visitor by IP address (true) or not (false). Available in API version 34.0 and later. |
| enableWhisperMessage | boolean | Indicates whether support supervisors can send whisper messages to agents during a chat (true) or not (false). Available in API version 29.0 and later. |
| label | string | Required. Specifies the name of the configuration for agents’ default chat settings. |
| supervisorDefaultAgentStatusFilter | SupervisorAgentStatusFilter (enumeration of type string) | Specifies the Chat status for filtering the Agent Status list in the Supervisor Panel. Valid values are:OnlineAwayOfflineAvailable in API version 29.0 and later. |
| supervisorDefaultButtonFilter | string | Specifies the default button for filtering the Agent Status list in the Supervisor Panel. Available in API version 29.0 and later. |
| supervisorDefaultSkillFilter | string | Specifies the default skill for filtering the Agent Status list in the Supervisor Panel. Available in API version 29.0 and later. |
| supervisorSkills | SupervisorAgentConfigSkills | Specifies the list of agent skills that are assigned to a supervisor, as specified in their assigned Chat configuration. Available in API version 29.0 and later. |
| transferableButtons | AgentConfigButtons | Specifies the list of chat buttons that agents can transfer chats to. Available in API version 31.0 and later. |
| transferableSkills | AgentConfigSkills | Specifies the list of skill groups that agents can transfer chats to. Available in API version 31.0 and later. |

## AgentConfigAssignments

Represents the assignments of an organization’s profiles and users to a Chat configuration.

| Field Name | Field Type | Description |
| --- | --- | --- |
| profiles | AgentConfigProfileAssignments | Specifies the profiles that are associated with a specific agent configuration. |
| users | AgentConfigUserAssignments | Specifies the users that are associated with a specific agent configuration. |

## AgentConfigButtons

Represents the chat buttons that agents who are associated with the Chat configuration can transfer chats to.

| Field Name | Field Type | Description |
| --- | --- | --- |
| button | string[] | Specifies the chat buttons that agents can transfer chats to. |

## AgentConfigProfileAssignments

Represents the profiles associated with a specific Chat configuration.

| Field Name | Field Type | Description |
| --- | --- | --- |
| profile | string | Specifies the custom name of the profile associated with a specific agent configuration. |

## AgentConfigSkills

Represents the skill groups that agents who are associated with the Chat configuration can transfer chats to.

| Field Name | Field Type | Description |
| --- | --- | --- |
| skill | string[] | Specifies the skill groups that agents can transfer chats to. |

## AgentConfigUserAssignments

Represents the users associated with a specific Chat configuration.

| Field Name | Field Type | Description |
| --- | --- | --- |
| user | string | Specifies the username of the user associated with a specific agent configuration. |

## SupervisorAgentConfigSkills

Represents the agent skills associated with a supervisor’s Chat configuration. Available in API version 29.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| skill | string | Specifies the agent skills available for filtering the Agent Status list in the Supervisor Panel. |

## Declarative Metadata Sample Definition

This is a sample of a liveChatAgentConfig file.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<LiveChatAgentConfig xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>My Agent Configuration 1</label>
    <autoGreeting>Hi, how can I help you?</autoGreeting>
    <capacity>5</capacity>
    <enableAutoAwayOnDecline>true</enableAutoAwayOnDecline>
    <enableLogoutSound>true</enableLogoutSound>
    <enableNotifications>true</enableNotifications>
    <enableRequestSound>true</enableRequestSound>
    <enableSneakPeek>true</enableSneakPeek>
    <enableWhisperMessage>true</enableWhisperMessage>
    <assignments>
        <profiles>
            <profile>standard</profile>
        </profiles>
        <users>
            <user>jdoe@acme.com</user>
        </users>
    </assignments>
</LiveChatAgentConfig>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
