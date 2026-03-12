---
title: "AnalyticsDashboard"
domain: object-reference
topic: analyticsdashboard
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.254Z
estimatedTokens: 589
keywords: [AnalyticsDashboard, Tableau, dashboard, API, version, 64.0, later, Calls, Special, Access, Rules]
---

# AnalyticsDashboard

> Represents a Tableau Next dashboard. This object is available in API version 64.0 and later.

# AnalyticsDashboard

Represents a Tableau Next dashboard. This object is available in API version 64.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve(), search()

## Special Access Rules

To access this object, you must have Tableau Next enabled in your org and a Tableau Next permission set.

## Fields

| Field | Details |
| --- | --- |
| AnalyticsWorkspaceId | TypereferencePropertiesFilter, Group, SortDescriptionThe ID of the Tableau Next workspace the dashboard is associated with.This field is a relationship field.Relationship NameAnalyticsWorkspaceRefers ToAnalyticsWorkspace |
| Description | TypetextareaPropertiesNillableDescriptionThe description of the dashboard. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe API name of the dashboard. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe supported languages for the visualization. There are over 50+ supported language and dialect values. |
| LastDraftModifiedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last modified date for the dashboard in draft mode. |
| LastPublishedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last published date for the dashboard. |
| MasterLabel | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe label for the dashboard. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix for the dashboard. |
| OwnerId | TypereferencePropertiesFilter, Group, SortDescriptionThe user ID of the user who created the dashboard.This field is a relationship field.Relationship NameOwnerRefers ToUser |
| Style | TypetextareaPropertiesNillableDescriptionThe widget style for the dashboard, represented as a JSON string. For example,{"widgetStyle":{"backgroundColor":"#ffffff","borderEdges":[],"borderColor":"#cccccc","borderWidth":1,"borderRadius":0}} |
| TemplateAssetSourceName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the dashboard was created from a template, this is name of the asset source. |
| TemplateSource | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the dashboard was created from a template, this is name of the template. |
| Version | TypedoublePropertiesFilter, Nillable, SortDescriptionThe API version for the dashboard. |
