---
title: "PermissionSetAssignment"
domain: object-reference
topic: permissionsetassignment
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.770Z
estimatedTokens: 1285
keywords: [PermissionSetAssignment, user’s, assignment, permission, group, API, version, 22.0, later, Calls, Special, Access, Rules, Usage]
---

# PermissionSetAssignment

> Represents a user’s assignment to a permission set or permission set
   group. This object is available in API version 22.0 and later.

# PermissionSetAssignment

Represents a user’s assignment to a permission set or permission set group. This object is available in API version 22.0 and later.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update()

## Special Access Rules

As of Summer ’20 and later, only users who have one of these permissions can access this object:

-   View Setup and Configuration
-   Assign Permission Sets
-   Manage User

## Fields

| Field Name | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user that is assigned the permission set indicated in PermissionSetId or the permission set group indicated in PermissionSetGroupId.This is a relationship field.Relationship NameAssigneeRelationship TypeLookupRefers ToUser |
| ExpirationDate | TypedateTimePropertiesCreate, Filter, Nillable, Sort, UpdateDescriptionThe date that the assignment of the permission set or permission set group expires for the specified user. This field is available in API version 52.0 and later. |
| IsActive | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the assignment is active (true) or not (false). Defaults to false. This field is available in API version 52.0 and later. |
| IsRevoked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the assignment was revoked (true) or not (false). Defaults to false. This field is available only if user access policies are enabled. This field is available in API version 57.0 and later. |
| LastCreatedByChangeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionThe ID of the user access change record related to this permission set or permission set group assignment. This field is available only if user access policies are enabled. This field is available in API version 57.0 and later.This field is a relationship field.Relationship NameLastCreatedByChangeRelationship TypeLookupRefers ToUserAccessChange |
| LastDeletedByChangeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the user access change record related to this permission set or permission set group assignment being revoked. This field is available only if user access policies are enabled. This field is available in API version 57.0 and later.This field is a relationship field.Relationship NameLastCreatedByChangeRelationship TypeLookupRefers ToUserAccessChange |
| PermissionSetGroupId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the permission set group assigned to the user specified in AssigneeId. This field is available in API version 45.0 and later.This is a relationship field.Relationship NamePermissionSetGroupRelationship TypeLookupRefers ToPermissionSetGroup |
| PermissionSetId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of the permission set assigned to the user specified in AssigneeId.This is a relationship field.Relationship NamePermissionSetRelationship TypeLookupRefers ToPermissionSet |

## Usage

Finding Permission Set Assignments

Use the PermissionSetAssignment object to query permission set assignments to find out which permission sets are assigned to which users. Because each user can be assigned to many permission sets and each permission set can be assigned to many users, each PermissionSetAssignment ID represents the association of a single user and single permission set.

For example, to search for all permission sets assigned to a particular user:

```

```

To search for all users assigned to a particular permission set:

```

```

You can also create a new permission set assignment, or use delete to remove a permission set that's assigned to a user. To update an assignment, delete an existing assignment and insert a new one.

User Licenses

When assigning a permission set, if the PermissionSet has a UserLicenseId, its UserLicenseId and the Profile UserLicenseId must match. To determine a user's license assignment, query the user's profile and then query the profile's license.

For example, to find a user's profile ID:

```

```

To find a permission set's UserLicenseId:

```

```

If the IDs match, the assignment succeeds.

To find all the permission sets with no license that are assigned to any user:

```

```

Revoked Assignments from User Access Policies

After you revoke a permission set or permission set group assignment via a user access policy, the IsRevoked field is updated to true. The PermissionSetAssignment record isn’t deleted. If the permission set or permission set group is assigned to the user again, the IsRevoked field is then updated to false.

To find permission set or permission set group assignments that were revoked:

```

```

#### See Also

-   [PermissionSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm "Represents a set of permissions that’s used to grant more access to one or more users without changing their profile or reassigning profiles. This object is available in API version 22.0 and later.")

## Code Examples

```
SELECT Id, PermissionSetId
FROM PermissionSetAssignment
WHERE AssigneeId = '005600000017cKt'
```

```
SELECT Id, AssigneeId
FROM PermissionSetAssignment
WHERE PermissionSetId = '0PS30000000000e'
```

```
SELECT Id, ProfileId
FROM User
WHERE Id = '005D0000001GMAT'
```

```
SELECT Id, LicenseId
FROM PermissionSet
WHERE Id = '0PS30000000000e'
```

```
SELECT Id, Assignee.Name, PermissionSet.Name
FROM PermissionSetAssignment
WHERE PermissionSet.LicenseId = null
```

## Related Topics

- PermissionSet (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm)
