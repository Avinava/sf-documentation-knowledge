---
title: "ContentWorkspaceSubscription"
domain: object-reference
topic: contentworkspacesubscription
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.270Z
estimatedTokens: 189
keywords: [ContentWorkspaceSubscription, subscription, user, library, API, version, 42.0, later, Calls, Special, Access, Rules]
---

# ContentWorkspaceSubscription

> Represents a subscription for a user following a library. This
    object is available in API version 42.0 and later.

# ContentWorkspaceSubscription

Represents a subscription for a user following a library. This object is available in API version 42.0 and later.

## Supported Calls

delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

Only users with Modify All Data permission have access to this object.

## Fields

| Field | Details |
| --- | --- |
| ContentWorkspaceId | TypereferencePropertiesFilter, Group, SortDescriptionID of the library.This is a relationship field.Relationship NameContentWorkspaceRelationship TypeLookupRefers ToContentWorkspace |
| UserId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user following the library.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
