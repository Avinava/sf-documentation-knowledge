---
title: "PermissionSetLicenseAssign"
domain: object-reference
topic: permissionsetlicenseassign
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.797Z
estimatedTokens: 850
keywords: [PermissionSetLicenseAssign, association, User, PermissionSetLicense, API, version, 29.0, later, Calls, Special, Access, Rules, Usage]
---

# PermissionSetLicenseAssign

> Represents the association between a User and a PermissionSetLicense.
  This object is available in API version 29.0 and later.

# PermissionSetLicenseAssign

Represents the association between a User and a PermissionSetLicense. This object is available in API version 29.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

The relationship name for PermissionSetLicenseAssign is PermissionSetLicenseAssignments.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

As of Summer ’20 and later, only users who have one of these permissions can access this object:

-   View Setup and Configuration
-   Assign Permission Sets

## Fields

| Field Name | Details |
| --- | --- |
| AssigneeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the User to assign the permission set license specified in PermissionSetLicenseId.This is a relationship field.Relationship NameAssigneeRelationship TypeLookupRefers ToUser |
| IsRevoked | TypebooleanPropertiesDefaulted on create, Filter, Group, Sort, UpdateDescriptionReserved for internal use. This field is available in API version 58.0 and later. |
| LastCreatedByChangeId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionID of the user access change record related to this permission set license assignment. This field is available only if user access policies are enabled. This field is available in API version 58.0 and later.This field is a relationship field.Relationship NameLastCreatedByChangeRelationship TypeLookupRefers ToUserAccessChange |
| LastDeletedByChangeId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionID of the user access change record related to this permission set license assignment being revoked. This field is available only if user access policies are enabled. This field is available in API version 58.0 and later.This field is a relationship field.Relationship NameLastCreatedByChangeRelationship TypeLookupRefers ToUserAccessChange |
| PermissionSetLicenseId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the permission set license the user is assigned to.This is a relationship field.Relationship NamePermissionSetLicenseRelationship TypeLookupRefers ToPermissionSetLicense |

## Usage

Use the PermissionSetLicenseAssign object for querying permission set license assignments to find out which permission set licenses are assigned to which users. Because each user can be assigned to many permission set licenses, each PermissionSetLicenseAssign ID represents the association of a single user and single permission set license.

For example, to search for all of the permission sets assigned to a particular user:

```

```

To search for all users assigned to a particular permission set license:

```

```

You can also create a new permission set license assignment, or use delete to remove a permission set license that’s been assigned to a user. To update an assignment, delete an existing assignment and insert a new one.

#### See Also

-   [PermissionSetLicense](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionsetlicense.htm "Represents a license that’s used to enable one or more users to receive a specified permission without changing their profile or reassigning profiles. You can use permission set licenses to grant access, but not to deny access. This object is available in API version 29.0 and later.")

## Code Examples

```
SELECT Id, PermissionSetLicenseId
FROM PermissionSetLicenseAssign
WHERE AssigneeId = '005D0000001RFek'
```

```
SELECT AssigneeId 
FROM PermissionSetLicenseAssign
WHERE PermissionSetLicenseId = '0PLD000000003mwOAA'
```

## Related Topics

- PermissionSetLicense (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionsetlicense.htm)
