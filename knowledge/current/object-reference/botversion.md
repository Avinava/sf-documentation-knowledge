---
title: "BotVersion"
domain: object-reference
topic: botversion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.603Z
estimatedTokens: 421
keywords: [BotVersion, version, bot, agent, defined, BotDefinition, record, API, 63.0, later, Calls]
---

# BotVersion

> Represents a version of a bot or agent defined by a BotDefinition
         record. This object is available in API version 63.0 and later.

# BotVersion

Represents a version of a bot or agent defined by a BotDefinition record. This object is available in API version 63.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| BotDefinitionId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionRequired. This field relates a bot version to its parent BotDefinition record.This field is a relationship field.Relationship NameBotDefinitionRefers ToBotDefinition |
| CopilotPrimaryLanguage | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe primary language that the bot or agent communicates in. |
| CopilotSecondaryLanguages | TypestringPropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionA comma-separated list of additional languages that the bot or agent supports. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name for this object. |
| Status | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionRequired. Indicates whether the bot version is active or inactive. Only one version for a related BotDefinition can be active at once.Possible values are:ActiveInactiveThe default value is Inactive. |
| ToneType | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionDefines the tone of the bot.Possible values are:Casual—Formal—Neutral—The default value is Casual. |
| VersionNumber | TypeintPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe number for this version of the bot or agent. |
