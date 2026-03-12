---
title: "AttachedContentNote"
domain: object-reference
topic: attachedcontentnote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:05.173Z
estimatedTokens: 430
keywords: [AttachedContentNote, read-only, ContentNote, objects, associated, object.This, API, version, 35.0, later, Calls, Special, Access, Rules, Usage]
---

# AttachedContentNote

> This read-only object contains all ContentNote objects associated with an object.This
		object is available in API version 35.0 and later.

# AttachedContentNote

This read-only object contains all ContentNote objects associated with an object.This object is available in API version 35.0 and later.

## Supported Calls

describeSObjects()

## Special Access Rules

-   Notes must be enabled.
-   Chatter must be enabled.

## Fields

| Field Name | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the attached ContentNote |
| ContentSize | TypeintPropertiesFilter, Group, Nillable, SortDescriptionSize of the note in bytes for notes smaller than 2 GB.In API version 66.0 and later, we recommend that you use the ContentSizeLong field even for notes smaller than 2 GB. |
| ContentSizeLong | TypelongPropertiesFilter, Group, Nillable, SortDescriptionThe size of the note in bytes up to 10 GB.This field is available in API version 66.0 and later. |
| FileExtension | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFile extension of the attached ContentNote. |
| FileType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of file for the note. All notes have a file type of SNOTE. |
| LinkedEntityId | TypereferencePropertiesFilter, Group, SortDescriptionID of the record the ContentNote is attached to. |
| TextPreview | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA preview of the note, up to 255 characters. |
| Title | TypestringPropertiesFilter, Group, SortDescriptionTitle of the note. |

## Usage

Use this object to list all ContentNote objects attached to an object.

To retrieve ContentNote objects, issue a describe call on an object, which returns a describe result for each note created or attached. You can’t directly query this object.
