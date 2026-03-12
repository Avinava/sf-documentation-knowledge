---
title: "ContentFolderItem"
domain: object-reference
topic: contentfolderitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.106Z
estimatedTokens: 401
keywords: [ContentFolderItem, file, ContentDocument, folder, ContentFolder, resides, ContentWorkspace, API, version, 35.0, later, Calls, Special, Access, Rules]
---

# ContentFolderItem

> Represents a file (ContentDocument) or folder (ContentFolder) that resides in a
		ContentFolder in a ContentWorkspace. This object is available in API version 35.0 and
		later.

# ContentFolderItem

Represents a file (ContentDocument) or folder (ContentFolder) that resides in a ContentFolder in a ContentWorkspace. This object is available in API version 35.0 and later.

## Supported Calls

describeSObjects(), describeLayout(), query(), retrieve()

## Special Access Rules

## Fields

| Field Name | Details |
| --- | --- |
| ContentSize | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe size of the file or folder in bytes, when the size is smaller than 2 GB.In API version 66.0 and later, we recommend that you use the ContentSizeLong field even for files smaller than 2 GB. |
| ContentSizeLong | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe size of the file or folder in bytes up to 10 GB.This field is available in API version 66.0 and later. |
| FileExtension | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the file extension if the ContentFolderItem is a file. |
| FileType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionSpecifies the type of file if the ContentFolderItem is a file. |
| IsFolder | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that the ContentFolderItem is a folder, and not a file. |
| ParentContentFolderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the ContentFolder that the ContentFolderItem resides in.This is a relationship field.Relationship NameParentContentFolderRelationship TypeLookupRefers ToContentFolder |
| Title | TypestringPropertiesFilter, Group, SortDescriptionThe name of the file or folder. |
