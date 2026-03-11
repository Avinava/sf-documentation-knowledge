---
title: "PostTemplate"
domain: tooling-api
topic: posttemplate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:38.527Z
keywords: [PostTemplate, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# PostTemplate

# PostTemplate

Represents an approval post template for Approvals in Chatter.

This object is available in API version 35.0 and later.

## Supported SOAP Calls

query(), retrieve(), search(), update()

## Supported REST HTTP Methods

GET, PATCH

## Fields

| Field | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionA description of the feed post template, limited to 255 characters. |
| EntityDefinition | TypeEntityDefinitionPropertiesFilter, Group, SortDescriptionA relationship lookup to the object type associated with this PostTemplate. You can’t interact directly with this field. Instead, use it in queries. |
| EntityDefinitionId | TypestringPropertiesFilter, Group, SortDescriptionThe durable ID for the object defined in the EntityDefinition field. |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe template name. |