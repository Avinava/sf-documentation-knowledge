---
title: "AnalyticsVizViewDef"
domain: object-reference
topic: analyticsvizviewdef
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.346Z
estimatedTokens: 510
keywords: [AnalyticsVizViewDef, Tableau, viusalization, view, definition, API, version, 64.0, later, Calls, Special, Access, Rules]
---

# AnalyticsVizViewDef

> Represents a Tableau Next viusalization view definition. This object is available in API version 64.0 and later.

# AnalyticsVizViewDef

Represents a Tableau Next viusalization view definition. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

To access this object, you must have Tableau Next enabled in your org and a Tableau Next permission set.

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the visualization view definition. |
| IsOriginal | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the view definition is original (true) or not (false).The default value is false. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe supported languages for the visualization view definition.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe label for the visualization view definition. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix for the visualization view definition. |
| OwnerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe user ID of the user who created the visualization view definition.This field is a relationship field.Relationship NameOwnerRefers ToUser |
| Version | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe API version for the visualization view definition. |
| VisualizationId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThis field is a relationship field.Relationship NameVisualizationRefers ToAnalyticsVisualization |
