---
title: "LiveChatObjectAccessDefinition"
domain: object-reference
topic: livechatobjectaccessdefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.381Z
estimatedTokens: 461
keywords: [LiveChatObjectAccessDefinition, parent, record, LiveChatObjectAccessConfig, objects, API, version, 53.0, later, Calls, Special, Access, Rules]
---

# LiveChatObjectAccessDefinition

> Represents the parent record for one or more LiveChatObjectAccessConfig
         objects. This object is available in API version 53.0 and later.

# LiveChatObjectAccessDefinition

Represents the parent record for one or more LiveChatObjectAccessConfig objects. This object is available in API version 53.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, enable Chat. To see the list of objects you can find or create in the UI using this API, enable the "Turns on findOrCreate in chat API" permission. You can find this permission in the Chat Settings page of the Setup UI.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. The name:must be 40 characters or fewermust begin with a lettercan contain only underscores and alphanumeric characterscan’t include spacescan’t end with an underscorecan’t contain 2 consecutive underscoresIn managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe combined language and locale ISO code, which controls the language for labels displayed in an application.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label for this object's record. This display value is the internal label that doesn’t get translated. |
