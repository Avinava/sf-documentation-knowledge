---
title: "CompactLayout"
domain: tooling-api
topic: compactlayout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:44.036Z
estimatedTokens: 633
keywords: [CompactLayout, define, compact, layout, SOAP, Calls, REST, HTTP]
---

# CompactLayout

> Represents the values that define a
            compact page layout.

# CompactLayout

Represents the values that define a compact page layout.

This object is available in API version 32.0 and later.

## Supported SOAP Calls

create(), delete(), getDeleted(), getUpdated(), query(), retrieve(), search(), update(), upsert()

## Supported REST HTTP Methods

DELETE, GET, PATCH, POST

## Fields

| Field | Details |
| --- | --- |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe developer’s internal name for the compact layout (for example, “CL_c”) used in the API.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| FullName | TypestringPropertiesCreate, Group, NillableDescriptionThe unique name used as the compact layout identifier for API access. The fullName can contain only underscores and alphanumeric characters. It must be unique, begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanagedThis field is available in API version 38.0 and later. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe name of the compact layout in Setup. |
| Metadata | Typemns:CompactLayoutPropertiesCreate, Nillable, UpdateDescriptionThe compact layout metadata.Query this field only if the query result contains no more than one record. Otherwise, an error is returned. If more than one record exists, use multiple queries to retrieve the records. This limit protects performance. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace of the package of which the compact layout is a part. |
| SobjectType | TypeRestricted picklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe type of object used in the layout, such as an Account or Lead. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

CompactLayout is exposed in Tooling API to user profiles with the View Setup and Configuration permission.
