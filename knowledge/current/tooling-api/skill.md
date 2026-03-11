---
title: "Skill"
domain: tooling-api
topic: skill
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.781Z
keywords: [Skill, Supported, SOAP, API, Calls, REST, Methods, Fields]
---

# Skill

# Skill

Represents the settings for a skill used for field service or to route chats to agents in Chat, such as the name of the skill and which agents the skills are assigned to. This object is available in API version 65.0 and later.

## Supported SOAP API Calls

create(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Supported REST API Methods

GET, HEAD, PATCH, POST, Query

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionSpecifies the description of the skill. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization. This field is automatically generated, but you can supply your own value if you create the record using the API. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language for the Skill. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe label for Skill. |