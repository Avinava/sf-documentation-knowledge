---
title: "FolderedContentDocument"
domain: object-reference
topic: folderedcontentdocument
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:10.564Z
estimatedTokens: 414
keywords: [FolderedContentDocument, relationship, parent, child, ContentFolderItem, ContentWorkspace, Calls]
---

# FolderedContentDocument

> Represents the relationship between a parent and child
			ContentFolderItem in a ContentWorkspace.

# FolderedContentDocument

Represents the relationship between a parent and child ContentFolderItem in a ContentWorkspace.

## Supported Calls

describeSObjects()

## Fields

| Field Name | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesFilter, Group, SortDescriptionID of the ContentDocument that can be in a folder.This is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| ContentSize | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe size of the document in bytes for files smaller than 2 GB.In API version 66.0 and later, we recommend that you use the ContentSizeLong field even for documents smaller than 2 GB. |
| ContentSizeLong | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe size of the document in bytes up to 10 GB.This field is available in API version 66.0 and later. |
| FileExtension | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFile extension of the ContentDocument. |
| FileType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFile type of the ContentDocument. |
| IsFolder | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates that the FolderedContentDocument is a folder, rather than a file. |
| ParentContentFolderId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the ContentFoldr the ContentDocument resides in.This is a relationship field.Relationship NameParentContentFolderRelationship TypeLookupRefers ToContentFolder |
| Title | TypestringPropertiesFilter, Group, idLookup, SortDescriptionName of the file or folder in a ContentFolder. |
