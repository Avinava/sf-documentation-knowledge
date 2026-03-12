---
title: "ContentNotification"
domain: object-reference
topic: contentnotification
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.146Z
estimatedTokens: 293
keywords: [ContentNotification, notification, file, API, version, 42.0, later, Calls, Special, Access, Rules]
---

# ContentNotification

> Represents a notification for a file. This object is available in
    API version 42.0 and later.

# ContentNotification

Represents a notification for a file. This object is available in API version 42.0 and later.

## Supported Calls

delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

Only users with Modify All Data permission have access to this object.

## Fields

| Field | Details |
| --- | --- |
| EntityIdentifierId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the object with the notification. |
| EntityType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of object with the notification. One of the following.ContentDocumentContentTagNameContentVersionContentWorkspaceContentWorkspacePermissionUser |
| Nature | TypestringPropertiesFilter, Group, Nillable, SortDescriptionType of notification. |
| Subject | TypetextareaPropertiesFilter, Nillable, SortDescriptionSubject of the notification. |
| Text | TypetextareaPropertiesFilter, Nillable, SortDescriptionText of the notification. |
| UsersId | TypereferencePropertiesFilter, Group, SortDescriptionID of the user who received the notification.This is a relationship field.Relationship NameUsersRelationship TypeLookupRefers ToUser |
