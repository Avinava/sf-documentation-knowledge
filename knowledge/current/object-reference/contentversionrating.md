---
title: "ContentVersionRating"
domain: object-reference
topic: contentversionrating
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.234Z
estimatedTokens: 237
keywords: [ContentVersionRating, rating, version, file, API, 42.0, later, Calls, Special, Access, Rules]
---

# ContentVersionRating

> Represents a rating on a version of a file. This object is
    available in API version 42.0 and later.

# ContentVersionRating

Represents a rating on a version of a file. This object is available in API version 42.0 and later.

## Supported Calls

delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

Only users with Modify All Data permission have access to this object.

## Fields

| Field | Details |
| --- | --- |
| ContentVersionId | TypereferencePropertiesFilter, Group, SortDescriptionID of the version of the file.This is a relationship field.Relationship NameContentVersionRelationship TypeLookupRefers ToContentVersion |
| Rating | TypeintPropertiesFilter, Group, Nillable, SortDescriptionRating of the file. |
| UserComment | TypetextareaPropertiesFilter, Nillable, SortDescriptionComment made by the user who rated the file. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who rated the file.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
