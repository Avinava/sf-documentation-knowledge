---
title: "MessagingTemplate"
domain: object-reference
topic: messagingtemplate
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:12.868Z
estimatedTokens: 275
keywords: [MessagingTemplate, Messaging, template, send, pre-formatted, messages, API, version, 47.0, later, Calls]
---

# MessagingTemplate

> Represents a Messaging template used to send pre-formatted messages. This
    object is available in API version 47.0 and later.

# MessagingTemplate

Represents a Messaging template used to send pre-formatted messages. This object is available in API version 47.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the Messaging template. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name for the Messaging template.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the Messaging template. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe label of the Messaging template. |
| Message | TypetextareaPropertiesCreate, UpdateDescriptionThe body text of the Messaging template. |
