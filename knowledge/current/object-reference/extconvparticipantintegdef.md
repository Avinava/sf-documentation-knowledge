---
title: "ExtConvParticipantIntegDef"
domain: object-reference
topic: extconvparticipantintegdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.862Z
estimatedTokens: 553
keywords: [ExtConvParticipantIntegDef, integration, configuration, external, conversation, participants, communication, Salesforce, messaging, platforms, API, version, 66.0, later, Calls]
---

# ExtConvParticipantIntegDef

> Represents the integration configuration for external conversation
         participants, used for communication between Salesforce and external messaging
         platforms. This object is available in API version 66.0 and later.

# ExtConvParticipantIntegDef

Represents the integration configuration for external conversation participants, used for communication between Salesforce and external messaging platforms. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountKey | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionEncrypted JSON format key for secure storage of authentication credentials for external bot API calls. |
| BotProvider | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionBot provider for integration of authentication and request and response logic.Possible value:Custom |
| ChannelMode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPossible values for the type of channel:MessagingVoiceThe default value is Messaging. |
| ClientIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionAPI client ID of the bot provider. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionUnique name of the object in the API. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionLanguage of the master label. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the ExtConvParticipantIntegDef object. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf it's part of a managed package, the namespace of the package that contains integration definition for the external conversation participant. |
| ProjectIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIdentifier of the project in the provider framework to scope API calls and resource access. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionStatus of the integration.Possible values are:ActiveDeletedInactiveThe default value is Active. |
