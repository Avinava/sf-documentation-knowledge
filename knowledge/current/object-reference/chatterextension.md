---
title: "ChatterExtension"
domain: object-reference
topic: chatterextension
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:06.526Z
estimatedTokens: 766
keywords: [ChatterExtension, Rich, Publisher, App, that’s, integrated, Chatter, API, version, 41.0, later, Calls]
---

# ChatterExtension

> Represents a Rich Publisher App that’s integrated with the Chatter
      publisher. This object is available in API version 41.0 and later.

# ChatterExtension

Represents a Rich Publisher App that’s integrated with the Chatter publisher. This object is available in API version 41.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Fields

| Field | Details |
| --- | --- |
| CompositionComponentEnumOrId | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe ID of the composition component for the Rich Publisher App. This field requires a value. |
| Description | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe description of your custom Rich Publisher App. This field requires a value. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe name of the developer who is responsible for the app.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| ExtensionName | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe name of your extension. This field requires a value. |
| HeaderText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe text to show in the header of your app composer. Header text is required for Lightning type extensions. |
| HoverText | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe text to show when a user mouses over your extension’s icon. Mouse-over text is required for Lightning type extensions. |
| IconId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionThe icon to show in the Chatter publisher. Use an existing file asset ID from your org. This field requires a value.This is a relationship field.Relationship NameIconRelationship TypeLookupRefers ToContentAsset |
| IsProtected | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionAn auto-generated value. It currently has no impact. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe language used for this instance of the ChatterExtension. This field requires a value. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe master label for the ChatterExtension object. This field requires a value. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe prefix to use for the extension’s namespace. |
| RenderComponentEnumOrId | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe rendering component of the Rich Publisher App that you provide. It’s comprised of the lightning:availableForChatterExtensionRenderer interface. This field requires a value. |
| Type | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, Sort, UpdateDescriptionDescribes the type of the extension. Currently, the only value supported is Lightning. Included to allow for other possible types in the future. |
