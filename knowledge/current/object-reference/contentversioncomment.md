---
title: "ContentVersionComment"
domain: object-reference
topic: contentversioncomment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.223Z
estimatedTokens: 217
keywords: [ContentVersionComment, comment, version, file, API, 42.0, later, Calls, Special, Access, Rules]
---

# ContentVersionComment

> Represents a comment on a version of a file. This object is available in
    API version 42.0 and later.

# ContentVersionComment

Represents a comment on a version of a file. This object is available in API version 42.0 and later.

## Supported Calls

delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

Only users with Modify All Data permission have access to this object.

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesFilter, Group, SortDescriptionID of the file.This is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| ContentVersionId | TypereferencePropertiesFilter, Group, SortDescriptionID of the version of the file.This is a relationship field.Relationship NameContentVersionRelationship TypeLookupRefers ToContentVersion |
| UserComment | TypetextareaPropertiesFilter, Nillable, SortDescriptionID of the user who commented on the file. |
