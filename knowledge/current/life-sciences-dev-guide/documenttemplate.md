---
title: "DocumentTemplate"
domain: life-sciences-dev-guide
topic: documenttemplate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:57.814Z
estimatedTokens: 184
keywords: [DocumentTemplate, dynamic, document, generation, API, 56.0]
---

> Represents information about dynamic document generation. This
      object is available in API version 56.0 and later.

# DocumentTemplate

Represents information about dynamic document generation. This object is available in API version 56.0 and later.

## Supported Calls

create(), delete(), describeLayout(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), search(), undelete(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| IsActive | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the document template is active.The default value is false. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionSpecifies the type of document template.Possible values are:HTMLArchiveWebMicrosoftWordMicrosoftPowerpoint |
