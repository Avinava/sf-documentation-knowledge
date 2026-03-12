---
title: "UserPermissionAccess"
domain: object-reference
topic: userpermissionaccess
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:18.870Z
estimatedTokens: 339
keywords: [UserPermissionAccess, permissions, accessibility, current, user, API, version, 41.0, later, Calls, Usage]
---

# UserPermissionAccess

> Represents the permissions accessibility for a current user.
  Available in API version 41.0 and later.

# UserPermissionAccess

Represents the permissions accessibility for a current user. Available in API version 41.0 and later.

## Supported Calls

describeSObjects(), query()

## Fields

| Field | Details |
| --- | --- |
| LastCacheUpdate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe last modified date and time of either the user info or org info, whichever is later. |
| Permissions<PermissionName> | TypebooleanPropertiesFilterDescriptionThe name of the permission, such as PermissionsActivateContract or PermissionsAuthorApex and whether it’s available to the user (true) or not (false). |

## Usage

API users without PermissionsViewSetup can use this object to check if their own sessions have access to a feature.

#### See Also

-   [Profile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profile.htm "Represents a profile, which defines a set of permissions to perform different operations. Operations can include creating a custom profile or querying, adding, updating, or deleting information.")

-   [PermissionSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm "Represents a set of permissions that’s used to grant more access to one or more users without changing their profile or reassigning profiles. This object is available in API version 22.0 and later.")

## Related Topics

- Profile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profile.htm)
- PermissionSet (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm)
