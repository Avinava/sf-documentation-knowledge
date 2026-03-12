---
title: "DuplicateJobDefinition"
domain: tooling-api
topic: duplicatejobdefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.340Z
estimatedTokens: 306
keywords: [DuplicateJobDefinition, Setup, defining, job, identifies, duplicate, record, items, globally, Tooling, API, version, 42.0, later, SOAP]
---

# DuplicateJobDefinition

> Setup object defining a job that
        identifies duplicate record items globally. Available in Tooling API version 42.0 and
            later.

# DuplicateJobDefinition

Setup object defining a job that identifies duplicate record items globally. Available in Tooling API version 42.0 and later.

## Supported SOAP Calls

create(), query(), retrieve(), update(), upsert()

## Supported REST HTTP Methods

GET and POST

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe developer name of the DuplicateJobDefinition.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language in the user’s personal settings. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe label of the DuplicateJobDefinition. |
| SobjectSubtype | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Restricted picklist, Sort, UpdateDescriptionThe object subtype. Valid values are PersonAccount and None. |
| SobjectType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe object type:Account, Contact, or Lead. |
