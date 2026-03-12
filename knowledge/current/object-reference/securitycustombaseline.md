---
title: "SecurityCustomBaseline"
domain: object-reference
topic: securitycustombaseline
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:16.721Z
estimatedTokens: 480
keywords: [SecurityCustomBaseline, ability, user-defined, custom, security, baselines, define, org’s, standards, API, version, 39.0, later, Calls, Special]
---

# SecurityCustomBaseline

> Provides the ability to read, create, and delete user-defined custom
			security baselines, which define an org’s security standards. This object is
		available in API version 39.0 and later.

# SecurityCustomBaseline

Provides the ability to read, create, and delete user-defined custom security baselines, which define an org’s security standards. This object is available in API version 39.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

You must have the “View Health Check” permission to read a custom baseline, and the “Manage Health Check” permission to create, edit, or delete one.

## Fields

| Field Name | Details |
| --- | --- |
| Baseline | TypetextareaPropertiesCreate, Nillable, UpdateDescriptionThe definition of an org’s security settings standards. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your org. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| IsDefault | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionSets the baseline as the default in Security Health Check. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language of the presence status. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionLabel for the category node. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with the package. |
