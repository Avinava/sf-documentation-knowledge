---
title: "UserLogin"
domain: object-reference
topic: userlogin
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.826Z
estimatedTokens: 341
keywords: [UserLogin, settings, affect, user’s, ability, log, organization, access, UserPermissions.ManageUsers, permission, API, version, 29.0, later, Calls]
---

# UserLogin

> Represents the settings that affect a user’s ability to log
      into an organization. To access this object, you need the
        UserPermissions.ManageUsers permission. This object is available
    in API version 29.0 and later.

# UserLogin

Represents the settings that affect a user’s ability to log into an organization. To access this object, you need the UserPermissions.ManageUsers permission. This object is available in API version 29.0 and later.

## Supported Calls

describeSObjects(), query(), retrieve(), update()

## Fields

| Field Name | Details |
| --- | --- |
| IsFrozen | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the user account associated with this object is frozen. If a user's account is frozen, they can't log in, but their account isn't deactivated. |
| IsPasswordLocked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIf true, the user account associated with this object is locked because of too many login failures. From the API, you can set this field to false, but not true.NoteIf the Lockout effective period is set to Forever (must be reset by admin) in your org’s Password Policies Setup page, this field isn’t set to false. |
| UserId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the associated user account. This field can’t be updated. |

## Usage

To query for all frozen users in your organization:

```

```

To freeze or unfreeze multiple users, [use Data Loader](https://help.salesforce.com/s/articleView?id=000387522&type=1&language=en_US).

## Code Examples

```
SELECT Id, UserId
FROM UserLogin
WHERE IsFrozen = true
```
