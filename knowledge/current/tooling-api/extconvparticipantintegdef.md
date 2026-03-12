---
title: "ExtConvParticipantIntegDef"
domain: tooling-api
topic: extconvparticipantintegdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:44.593Z
estimatedTokens: 625
keywords: [ExtConvParticipantIntegDef, integration, configuration, external, conversation, participants, communication, Salesforce, messaging, platforms, API, version, 66.0, later, Calls]
---

# ExtConvParticipantIntegDef

> Represents the integration configuration for external conversation participants, used
      for communication between Salesforce and external messaging platforms. This object is
      available in API version 66.0 and later.

# ExtConvParticipantIntegDef

Represents the integration configuration for external conversation participants, used for communication between Salesforce and external messaging platforms. This object is available in API version 66.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| AccountKey | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe encrypted JSON format key for secure storage of authentication credentials for external bot API calls. |
| BotProvider | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe provider of bot integration that handles authentication and request and response logic.Possible value:Custom |
| ChannelMode | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionPossible values for channel type are:MessagingVoiceThe default value is Messaging. |
| ClientIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe API client ID of the bot provider. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the MasterLabel. |
| ManageableState | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe manageable state of the specified component that’s contained in a package.Possible values are:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this object. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf it's part of a managed package, the namespace of the package that contains integration definition for the external conversation participant. |
| ProjectIdentifier | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe ID of the project in the provider framework to scope API calls and resource access. |
| Status | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe status of the integration.Possible values are:ActiveDeletedInactiveThe default value is Active. |
