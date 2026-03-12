---
title: "ContentUserSubscription"
domain: object-reference
topic: contentusersubscription
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.183Z
estimatedTokens: 199
keywords: [ContentUserSubscription, subscription, user, another, API, version, 42.0, later, Calls, Special, Access, Rules]
---

# ContentUserSubscription

> Represents a subscription for a user following another user. This object
    is available in API version 42.0 and later.

# ContentUserSubscription

Represents a subscription for a user following another user. This object is available in API version 42.0 and later.

## Supported Calls

delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

Only users with Modify All Data permission have access to this object.

## Fields

| Field | Details |
| --- | --- |
| SubscribedToUserId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who is followed by another user.This is a relationship field.Relationship NameSubscribedToUserRelationship TypeLookupRefers ToUser |
| SubscriberUserId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who follows another user.This is a relationship field.Relationship NameSubscriberUserRelationship TypeLookupRefers ToUser |
