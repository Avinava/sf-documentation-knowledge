---
title: "ContentFolderMember"
domain: object-reference
topic: contentfoldermember
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.115Z
estimatedTokens: 252
keywords: [ContentFolderMember, association, file, folder, API, version, 34.0, later, Calls, Special, Access, Rules]
---

# ContentFolderMember

> Defines the association between a file and a folder. This object
		is available in API version 34.0 and later.

# ContentFolderMember

Defines the association between a file and a folder. This object is available in API version 34.0 and later.

## Supported Calls

describeSObjects(), delete(), query(), retrieve(), update()

## Special Access Rules

-   Salesforce CRM Content or Chatter must be enabled to access ContentFolderMember.
-   All users with a content feature license can modify folders in their personal library.
-   To modify ContentFolderMember, the user must be a member of the library and have permission to modify folders.

## Fields

| Field Name | Details |
| --- | --- |
| ChildRecordId | TypereferencePropertiesFilter, Group, SortDescriptionID of the file.This is a relationship field.Relationship NameChildRecordRelationship TypeLookupRefers ToContentDocument |
| ParentContentFolderId | TypereferencePropertiesFilter, Group, Sort, UpdateDescriptionID of the folder the file is in.This is a relationship field.Relationship NameParentContentFolderRelationship TypeLookupRefers ToContentFolder |
