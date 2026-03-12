---
title: "BotDefinition"
domain: object-reference
topic: botdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.597Z
estimatedTokens: 401
keywords: [BotDefinition, top, level, Einstein, Bots, Agentforce, Agents, API, version, 60.0, later, Calls, Special, Access, Rules]
---

# BotDefinition

> Represents a top level object for Einstein Bots or Agentforce Agents.
      This object is available in API version 60.0 and later.

# BotDefinition

Represents a top level object for Einstein Bots or Agentforce Agents. This object is available in API version 60.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

To access this object, Agents must be enabled in your org.

## Fields

| Field | Details |
| --- | --- |
| AgentTemplate | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf this BotDefinition represents an agent, this field represents the name of the agent template used to create it. |
| AgentType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe agent type. For example, Agentforce Service Agent (ASA) or Agentforce Employee Agent (AEA). |
| BotUserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe user ID associated with the bot definition.Relationship NameBotUserRefers ToUser |
| Description | TypetextareaPropertiesFilter, Nillable, SortDescriptionA description for the bot or agent. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for this object. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe master label of the bot. |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThis field represents the configuration type of the bot. The default value is Bot.Possible values are:Bot—Default Einstein Bot configuration.ExternalCopilot— An external-facing agent. For example, Agenforce Service Agent.InternalCopilot— An internal-facing agent. For example, Agentforce (Default). |
