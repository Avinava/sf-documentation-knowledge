---
title: "AgentWorkConversationalData"
domain: object-reference
topic: agentworkconversationaldata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.108Z
estimatedTokens: 1008
keywords: [AgentWorkConversationalData, Stores, conversation, data, agent, work, sessions, interactions, transfer, operational, metrics, API, version, 66.0, later]
---

# AgentWorkConversationalData

> Stores conversation data for agent work sessions, such as agent interactions,
         transfer information, and operational metrics. This object is available in API version
      66.0 and later.

# AgentWorkConversationalData

Stores conversation data for agent work sessions, such as agent interactions, transfer information, and operational metrics. This object is available in API version 66.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

You must have the Agentforce Contact Center Admin (Salesforce Voice) permission set enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| AgentChannelRecordingId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIdentifier for the recording associated with the agent channel conversation.This field is a relationship field.Relationship NameAgentChannelRecordingRefers ToVoiceCallRecording |
| AgentConnectDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the agent connected to the conversation. |
| AgentCustomerMergeTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp when the service rep and customer conversations are merged after consultation. |
| AgentDisconnectDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when the agent disconnected from the conversation. |
| AgentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of an agent or a rep involved in the conversation.This field is a polymorphic relationship field.Relationship NameAgentRefers ToBotDefinition, ExternalConversationBotDef, User |
| AgentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType of agent handling the conversation.Possible values are:ExternalBotHumanInternalBot |
| AgentWorkId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the AgentWork record associated with the conversational data.This field is a relationship field.Relationship NameAgentWorkRefers ToAgentWork |
| ChannelSessionRecordId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIdentifier of the channel session for the conversation.This field is a relationship field.Relationship NameChannelSessionRecordRefers ToVoiceCall |
| LongestPauseDuration | TypeintPropertiesFilter, Group, Nillable, SortDescriptionDuration of the longest pause during the conversation, measured in seconds. |
| Name | TypestringPropertiesAutonumber, Defaulted on create, Filter, idLookup, SortDescriptionName of the agent work conversational data record. |
| NextAgentWorkConvId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the next record in a sequence of conversations.This field is a relationship field.Relationship NameNextAgentWorkConvRefers ToAgentWorkConversationalData |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionID of the owner of the conversational data record.This field is a polymorphic relationship field.Relationship NameOwnerRefers ToGroup, User |
| OwnershipEndDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when ownership of the conversation ended. |
| OwnershipStartDateTime | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp for when ownership of this conversation started. |
| PauseCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of times the conversation was paused. |
| PrevAgentWorkConvId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the previous record in a sequence of conversations.This field is a relationship field.Relationship NamePrevAgentWorkConvRefers ToAgentWorkConversationalData |
| QualityScore | TypedoublePropertiesFilter, Nillable, SortDescriptionValue of the Mean Opinion Score (MOS) that measures voice call quality. |
| TotalPauseDuration | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal duration of all pauses during the conversation, measured in seconds. |
| TransferType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionType of transfer for the conversation.Possible values are:ColdWarm |
