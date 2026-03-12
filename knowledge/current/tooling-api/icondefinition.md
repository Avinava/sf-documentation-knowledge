---
title: "IconDefinition"
domain: tooling-api
topic: icondefinition
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.852Z
estimatedTokens: 402
keywords: [IconDefinition, Represents, icon, such, used, tab., API, version, 43.0, later., Note, Supported, SOAP, Calls, REST, HTTP, Fields]
---

# IconDefinition

> Represents an icon, such as used for a tab. Available in API
        version 43.0 and later.

# IconDefinition

Represents an icon, such as used for a tab. Available in API version 43.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

In API version 45.0 and later, only users with the “ViewSetup and Configuration” permission can access IconDefinition.

## Supported SOAP Calls

query()

## Supported REST HTTP Methods

Query, GET

## Fields

| Field Name | Details |
| --- | --- |
| ContentType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe tab icon’s content type, for example, image/png. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionUnique identifier for the field. Always retrieve this value before using it, as the value isn’t guaranteed to stay the same from one release to the next. To simplify queries, use this field. |
| Height | TypeintPropertiesFilter, Group, Nillable, SortDescriptionHeight of the icon in pixels. If the icon content type is SVG, the Height and Width values are not used. |
| TabDefinitionId | TypestringPropertiesFilter, Nillable, SortDescriptionThe ID of the tab this definition belongs to. Defaults to null. |
| Theme | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user interface theme this definition is associated with. |
| Url | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe fully qualified URL for this icon. The default icon is a cloud. |
| Width | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe icon’s width in pixels. If the icon content type is SVG, the Height and Width values are not used. |
