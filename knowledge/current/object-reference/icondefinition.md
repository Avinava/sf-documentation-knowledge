---
title: "IconDefinition"
domain: object-reference
topic: icondefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.087Z
estimatedTokens: 311
keywords: [IconDefinition, icon-related, metadata, custom, tab, API, version, 43.0, later, Calls]
---

# IconDefinition

> Represents the icon-related metadata for a custom tab. This
		object is available in API version 43.0 and later.

# IconDefinition

Represents the icon-related metadata for a custom tab. This object is available in API version 43.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field Name | Details |
| --- | --- |
| ContentType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe tab icon’s content type, for example, “image/png.” |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique virtual Salesforce ID for the icon. |
| Height | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe tab icon’s height in pixels. If the icon content type is an SVG type, height and width values are not used. |
| TabDefinitionId | TypestringPropertiesFilter, Nillable, SortDescriptionThe TabDefinition ID.This is a relationship field.Relationship NameTabDefinitionRelationship TypeLookupRefers ToTabDefinition |
| Theme | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe icon’s theme. |
| Url | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe fully qualified URL for this icon. |
| Width | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe tab icon’s width in pixels. If the icon content type is an SVG type, height and width values are not used. |
