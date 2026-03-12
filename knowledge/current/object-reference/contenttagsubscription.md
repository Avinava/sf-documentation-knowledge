---
title: "ContentTagSubscription"
domain: object-reference
topic: contenttagsubscription
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.149Z
estimatedTokens: 142
keywords: [ContentTagSubscription, subscription, user, tag, file, API, version, 42.0, later, Calls, Special, Access, Rules]
---

# ContentTagSubscription

> Represents a subscription for a user following a tag on a file. This
    object is available in API version 42.0 and later.

# ContentTagSubscription

Represents a subscription for a user following a tag on a file. This object is available in API version 42.0 and later.

## Supported Calls

delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

Only users with Modify All Data permission have access to this object.

## Fields

| Field | Details |
| --- | --- |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the user following the tag on the file.This is a relationship field.Relationship NameUserRelationship TypeLookupRefers ToUser |
