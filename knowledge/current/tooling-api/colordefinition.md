---
title: "ColorDefinition"
domain: tooling-api
topic: colordefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:46:37.414Z
keywords: [ColorDefinition, Note, Supported, SOAP, Calls, REST, HTTP, Methods, Fields]
---

# ColorDefinition

# ColorDefinition

Represents color metadata for a tab. Available in API version 43.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

In API version 45.0 and later, only users with the “View Setup and Configuration” permission can access ColorDefinition.

## Supported SOAP Calls

query()

## Supported REST HTTP Methods

Query, GET

## Fields

| Field Name | Details |
| --- | --- |
| Color | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe color specified in web color RGB format—for example, 00FF00. |
| Context | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe color context, which determines whether the color is the main color (or primary) for the tab. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| TabDefinitionId | TypestringPropertiesFilter, Nillable, SortDescriptionThe ID of the tab this definition belongs to. Defaults to null. |
| Theme | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user interface theme this definition is associated with. |