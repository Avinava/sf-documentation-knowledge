---
title: "AnalyticsWorkspace"
domain: object-reference
topic: analyticsworkspace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.353Z
estimatedTokens: 295
keywords: [AnalyticsWorkspace, Tableau, workspace, API, version, 54.0, later, Calls, Special, Access, Rules]
---

# AnalyticsWorkspace

> Represents a Tableau Next workspace. This object is available in API version 54.0 and later.

# AnalyticsWorkspace

Represents a Tableau Next workspace. This object is available in API version 54.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve(), search()

## Special Access Rules

To access this object, you must have Tableau Next enabled in your org and a Tableau Next permission set.

## Fields

| Field | Details |
| --- | --- |
| Description | TypetextareaPropertiesNillableDescriptionThe description for the workspace. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe API name for the workspace. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe supported languages for the workspace.Possible values are:da—Danishde—Germanen_US—Englishes—Spanishes_MX—Spanish (Mexico)fi—Finnishfr—Frenchit—Italianja—Japaneseko—Koreannl_NL—Dutchno—Norwegianpt_BR—Portuguese (Brazil)ru—Russiansv—Swedishth—Thaizh_CN—Chinese (Simplified)zh_TW—Chinese (Traditional) |
| MasterLabel | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe label for the workspace. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix for the workspace. |
