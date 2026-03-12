---
title: "AnalyticsVisualization"
domain: object-reference
topic: analyticsvisualization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.325Z
estimatedTokens: 599
keywords: [AnalyticsVisualization, Tableau, viusalization, API, version, 64.0, later, Calls, Special, Access, Rules]
---

# AnalyticsVisualization

> Represents a Tableau Next viusalization. This object is available in API version 64.0 and later.

# AnalyticsVisualization

Represents a Tableau Next viusalization. This object is available in API version 64.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

To access this object, you must have Tableau Next enabled in your org and a Tableau Next permission set.

## Fields

| Field | Details |
| --- | --- |
| AnalyticsWorkspaceId | TypereferencePropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe ID of the Tableau Next workspace the visualization is associated with.This field is a relationship field.Relationship NameAnalyticsWorkspaceRefers ToAnalyticsWorkspace |
| Description | TypestringPropertiesCreate, Nillable, UpdateDescriptionThe description of the visualization. |
| DeveloperName | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe API name of the visualization. |
| Language | TypepicklistPropertiesCreate, Defaulted on create, Filter, Group, Nillable, Restricted picklist, Sort, UpdateDescriptionThe supported languages for the visualization. There are over 50+ supported language and dialect values. |
| LastDraftModifiedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last modified date for the visualization in draft mode. |
| LastPublishedDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe last published date for the visualization. |
| MasterLabel | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionThe label for the visualization. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix for the visualization. |
| OwnerId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe user ID of the user who created the visualization.This field is a relationship field.Relationship NameOwnerRefers ToUser |
| TemplateAssetSourceName | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the visualization was created from a template, this is name of the asset source. |
| TemplateSource | TypestringPropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionIf the visualization was created from a template, this is name of the template. |
| Version | TypedoublePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe API version for the visualization. |
