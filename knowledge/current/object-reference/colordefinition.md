---
title: "ColorDefinition"
domain: object-reference
topic: colordefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:06.627Z
estimatedTokens: 239
keywords: [ColorDefinition, color-related, metadata, custom, tab, API, version, 43.0, later, Calls]
---

# ColorDefinition

> Represents the color-related metadata for a custom tab. This
		object is available in API version 43.0 and later.

# ColorDefinition

Represents the color-related metadata for a custom tab. This object is available in API version 43.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field Name | Details |
| --- | --- |
| Color | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe color described in web color RGB format—for example, “00FF00”. |
| Context | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe color context, which determines whether the color is the main color (or primary) for the tab. |
| DurableId | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique virtual Salesforce ID for the color. |
| TabDefinitionId | TypestringPropertiesFilter, Nillable, SortDescriptionThe TabDefinition ID.This is a relationship field.Relationship NameTabDefinitionRelationship TypeLookupRefers ToTabDefinition |
| Theme | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe icon’s theme. |
