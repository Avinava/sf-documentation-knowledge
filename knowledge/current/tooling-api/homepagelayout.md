---
title: "HomePageLayout"
domain: tooling-api
topic: homepagelayout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:45.003Z
estimatedTokens: 228
keywords: [HomePageLayout, home, layout, SOAP, Calls, REST, HTTP]
---

# HomePageLayout

> Represents a home page
        layout.

# HomePageLayout

Represents a home page layout.

This object is available in API version 35.0 and later.

## Supported SOAP Calls

query(), retrieve(), search()

## Supported REST HTTP Methods

GET

## Fields

| Field | Details |
| --- | --- |
| Id | TypestringPropertiesDefaulted on create, Filter, Group, idLookup, SortDescriptionID of the home page layout. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Name | TypestringPropertiesFilter, Group, idLookup, Namefield, SortDescriptionThe home page layout name. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA unique string to distinguish this type from any others. |
