---
title: "ContentFolderLink"
domain: object-reference
topic: contentfolderlink
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.110Z
estimatedTokens: 266
keywords: [ContentFolderLink, association, library, root, folder, API, version, 34.0, later, Calls, Special, Access, Rules]
---

# ContentFolderLink

> Defines the association between a library and its root folder.
		This object is available in API version 34.0 and later.

# ContentFolderLink

Defines the association between a library and its root folder. This object is available in API version 34.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve()

## Special Access Rules

-   Salesforce CRM Content must be enabled to access ContentFolderLink.
-   ContentFolderLink is read-only in the context of a library.

## Fields

| Field Name | Details |
| --- | --- |
| ContentFolderId | TypereferencePropertiesFilter, Group, SortDescriptionID of the folder.This is a relationship field.Relationship NameContentFolderRelationship TypeLookupRefers ToContentFolder |
| EnableFolderStatus | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the status of enabling folders for the library. Valid values are:C — Completed folder enablementS — Started folder enablementF — Failed folder enablementThis field is available in API version 39.0 and later. |
| ParentEntityId | TypereferencePropertiesFilter, Group, SortDescriptionName of the entity the folder hierarchy is linked to. |
