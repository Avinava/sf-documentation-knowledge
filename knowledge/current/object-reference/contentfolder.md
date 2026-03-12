---
title: "ContentFolder"
domain: object-reference
topic: contentfolder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.101Z
estimatedTokens: 481
keywords: [ContentFolder, folder, content, library, adding, files, API, version, 34.0, later, Calls, Special, Access, Rules, Associated]
---

# ContentFolder

> Represents a folder in a content library for adding files. This
		object is available in API version 34.0 and later.

# ContentFolder

Represents a folder in a content library for adding files. This object is available in API version 34.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), getDeleted(), getUpdated(), query(), retrieve(), undelete(), update(), upsert()

## Special Access Rules

-   Salesforce CRM Content or Chatter must be enabled to access ContentFolder.
-   All users with a content feature license can modify folders in their personal library.
-   To modify a folder, the user must be a member of the library and have permission to modify folders.

## Fields

| Field Name | Details |
| --- | --- |
| Name | TypestringPropertiesCreate, Filter, Group, idLookup, Sort, UpdateDescriptionName of the folder. |
| ParentContentFolderId | TypereferencePropertiesCreate, Filter, Group, Nillable, Sort, UpdateDescriptionID of the ParentFolder.This is a relationship field.Relationship NameParentContentFolderRelationship TypeLookupRefers ToContentFolder |

## Associated Objects

This object has the following associated objects. If the API version isn’t specified, they’re available in the same API versions as this object. Otherwise, they’re available in the specified API version and later.

[ContentFolderChangeEvent](atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm "A ChangeEvent object is available for each object that supports Change Data Capture. You can subscribe to a stream of change events using Change Data Capture to receive data tied to record changes in Salesforce. Changes include record creation, updates to an existing record, deletion of a record, and undeletion of a record. A change event isn’t a Salesforce object—it doesn’t support CRUD operations or queries. It’s included in the object reference so you can discover which Salesforce objects support change events.") (API version 62.0)

Change events are available for the object.

## Related Topics

- ContentFolderChangeEvent (atlas.en-us.object_reference.meta/object_reference/sforce_api_associated_objects_change_event.htm)
