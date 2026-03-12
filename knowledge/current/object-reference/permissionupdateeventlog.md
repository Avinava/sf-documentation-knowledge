---
title: "PermissionUpdateEventLog"
domain: object-reference
topic: permissionupdateeventlog
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.817Z
estimatedTokens: 656
keywords: [PermissionUpdateEventLog, Permission, events, represent, changes, user, permissions, setup, entity, access, occur, profiles, event, tracks, clone]
---

# PermissionUpdateEventLog

> Permission update events represent changes to object, field, and user
         permissions and setup entity access that occur in profiles and permission sets. The event
         type also tracks if you clone profiles or change whether session activation is required in
         permission sets or permission set groups. This object is available in API version 65.0
      and later.

# PermissionUpdateEventLog

Permission update events represent changes to object, field, and user permissions and setup entity access that occur in profiles and permission sets. The event type also tracks if you clone profiles or change whether session activation is required in permission sets or permission set groups. This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| Context | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe context for what is happening for this update. |
| Description | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA description of the update that occurred in the profile, permission set, or permission set group. |
| FeatureIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the feature, such as a profile, permission set, or permission set group, that was updated. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. |
| PermissionType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of permission, such as user, object, or field, or setup entity access, such as tab settings or Apex class access, that was updated. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. |
| UpdateType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionFor object permissions, user permissions, and setup entity access, the type of update that occurred. For example, a permission was updated or deleted. For other changes in profiles, permission sets, or permission set groups, this information is tracked in the DESCRIPTION field. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who made the permission update. |
