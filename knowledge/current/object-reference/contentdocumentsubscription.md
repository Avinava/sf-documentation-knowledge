---
title: "ContentDocumentSubscription"
domain: object-reference
topic: contentdocumentsubscription
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.097Z
estimatedTokens: 268
keywords: [ContentDocumentSubscription, subscription, user, commenting, file, library, API, version, 42.0, later, Calls, Special, Access, Rules]
---

# ContentDocumentSubscription

> Represents a subscription for a user following or commenting on a file
      in a library. This object is available in API version 42.0 and later.

# ContentDocumentSubscription

Represents a subscription for a user following or commenting on a file in a library. This object is available in API version 42.0 and later.

## Supported Calls

delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

Only users with Modify All Data permission have access to this object.

## Fields

| Field | Details |
| --- | --- |
| ContentDocumentId | TypereferencePropertiesFilter, Group, SortDescriptionID of the file.This is a relationship field.Relationship NameContentDocumentRelationship TypeLookupRefers ToContentDocument |
| IsCommentSub | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether the user made comments on the file. |
| IsDocumentSub | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionSpecifies whether the user follows the file. |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user following or commenting on the file.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
