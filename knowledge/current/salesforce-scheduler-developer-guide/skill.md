---
title: "Skill"
domain: salesforce-scheduler-developer-guide
topic: skill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.844Z
estimatedTokens: 400
keywords: [Skill, service, resources, API, version, 24.0, later, Calls]
---

# Skill

> Represents a skill that service resources have. This object is
  available in API version 24.0 and later.

# Skill

Represents a skill that service resources have. This object is available in API version 24.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

For information about WDC skills on a user’s profile, see the ProfileSkill topic.

## Supported Calls

create(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe description of the skill. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. In managed packages, this field prevents naming conflicts on package installations. With this field, a developer can change the object’s name in a managed package and the changes are reflected in a subscriber’s organization.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance slows down while Salesforce generates one for each record. |
| LastViewedDate | TypedatetimePropertiesFilter, Nillable, SortDescriptionThe timestamp for when the current user last viewed the skill. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of the skill. |
