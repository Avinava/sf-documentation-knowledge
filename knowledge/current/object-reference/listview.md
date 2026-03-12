---
title: "ListView"
domain: object-reference
topic: listview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:12.283Z
estimatedTokens: 361
keywords: [ListView, view, records, specific, criteria, API, version, 32.0, later, Calls, Usage]
---

# ListView

> Represents a list view. A list view shows a set of records for an
   object, based on specific criteria. This object is available in API version 32.0 and
  later.

# ListView

Represents a list view. A list view shows a set of records for an object, based on specific criteria. This object is available in API version 32.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve(), search()

## Fields

| Name | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe fully qualified developer name of the list view. |
| IsSoqlCompatible | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhether the list view can be used with SOQL.. |
| LastModifiedById | TypeUserPropertiesFilter, SortDescriptionThe ID of the user who last modified the list view. |
| LastReferencedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the list view was last referenced, with a precision of one second. |
| LastViewedDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe date and time when the list view was last viewed, with a precision of one second. |
| Name | TypestringPropertiesFilter, Group, idLookup, SortDescriptionThe name of the list view. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the list view. |
| SobjectType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe API name of the sObject for the list view. |

## Usage

Use this object to retrieve the metadata for a pipeline inspection view.
