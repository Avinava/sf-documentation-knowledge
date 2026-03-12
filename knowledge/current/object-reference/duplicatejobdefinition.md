---
title: "DuplicateJobDefinition"
domain: object-reference
topic: duplicatejobdefinition
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.266Z
estimatedTokens: 308
keywords: [DuplicateJobDefinition, Setup, defining, job, identifies, duplicate, record, items, globally, Calls, Special, Access, Rules]
---

# DuplicateJobDefinition

> Setup object defining a job that identifies duplicate record items
   globally.

# DuplicateJobDefinition

Setup object defining a job that identifies duplicate record items globally.

This object is available in API versions 42.0 and later.

## Supported Calls

describeSObjects(), getDeleted(), getUpdated(), query(), retrieve()

## Special Access Rules

As of Summer ’20 and later, only users with the View Setup and Configuration permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe name of the user who created a duplicate job.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language in the user’s personal settings. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe label of the duplicate job. |
| SobjectSubtype | TypepicklistPropertiesDefaulted on create, Filter, Group, Restricted picklist, SortDescriptionThe object subtype. Valid values are Person Account or None. |
| SobjectType | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe object type: account, contact, or lead. |
