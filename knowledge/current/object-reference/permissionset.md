---
title: "PermissionSet"
domain: object-reference
topic: permissionset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:14.760Z
estimatedTokens: 3103
keywords: [PermissionSet, permissions, that’s, grant, access, users, changing, their, profile, reassigning, profiles, API, version, 22.0, later]
---

# PermissionSet

> Represents a set of permissions that’s used to grant more
      access to one or more users without changing their profile or reassigning profiles. This object is available in API version 22.0 and later.

# PermissionSet

Represents a set of permissions that’s used to grant more access to one or more users without changing their profile or reassigning profiles. This object is available in API version 22.0 and later.

PermissionSet has a read-only child relationship with PermissionSetGroup. PermissionSet contains the aggregated permissions for the group.

You can use permission sets to grant access, but not to deny access.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), search(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only users who have one of these permissions can access this object:

-   View Setup and Configuration
-   Manage Session Permission Set Activations
-   Assign Permission Sets
-   Manage Profiles and Permission Sets

To view the following settings, assignments, and permissions for standard and custom objects in a specified permission set, the View Setup and Configuration permission is required.

-   Client settings
-   Field permissions
-   Layout assignments
-   Object permissions
-   Permission dependencies
-   Permission set tab settings
-   Permission set group components
-   Record types

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypestringPropertiesCreate, Filter, Nillable, Group, Sort, UpdateDescriptionA description of the permission set. Limit: 255 characters. |
| HasActivationRequired | TypebooleanPropertiesCreate, Defaulted on create, Filter, Group, Sort, UpdateDescriptionIndicates whether the permission set requires an associated active session (true) or not (false). |
| IsCustom | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the permission set is custom (created by an admin); if false, the permission set is standard and related to a specific permission set license. |
| IsOwnedByProfile | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the permission set is owned by a profile. Available in API version 25.0 and later. |
| Label | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe permission set label, which corresponds to Label in the user interface. Limit: 80 characters. |
| LicenseId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionThe ID of either the related PermissionSetLicense or UserLicense associated with this permission set. Available in API version 38.0 and later. Use this field instead of UserLicenseId, which is deprecated and only available up to API Version 37.0.This is a polymorphic relationship field.Relationship NameLicenseRelationship TypeLookupRefers ToPermissionSetLicense, UserLicense |
| Name | TypestringPropertiesCreate, Filter, Group, Sort, UpdateDescriptionThe unique name of the object in the API. This name can contain only underscores and alphanumeric characters, and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. Corresponds to API Name in the user interface. Limit: 80 characters. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix for a permission set that's been installed as part of a managed package. If the permission set isn't packaged or is part of an unmanaged package, this value is empty. Available in API version 23.0 and later. |
| PermissionsPermissionName | TypebooleanPropertiesCreate, Filter, UpdateDescriptionOne field for each permission. If true, users assigned to this permission set have the named permission. The number of fields varies depending on the permissions for the organization and license type. To get a list of available permissions in the SOAP API, use describeSObjects(). |
| PermissionSetGroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf the permission set is owned by a permission set group, this field returns the ID of the permission set group. If the permission set isn’t owned by a permission set group, this field returns a null value. Available in API version 45.0 and later.This is a relationship field.Relationship NamePermissionSetGroupRelationship TypeLookupRefers ToPermissionSetGroup |
| ProfileId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf the permission set is owned by a profile, this field returns the ID of the Profile. If the permission set isn’t owned by a profile, this field returns a null value. Available in API version 25.0 and later.This is a relationship field.Relationship NameProfileRelationship TypeLookupRefers ToProfile |
| Type | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionAvailable in API version 46.0 and later. |
| UserLicenseId | TypereferencePropertiesCreate, Filter, Group, Nillable, SortDescriptionID of the UserLicense associated with this permission set. This field is nillable in API version 26.0 and later and available up to API version 37.0 In API version 38.0 and later, use LicenseId. |

## Usage

Use the PermissionSet object to query existing permission sets.

For example, to search for all permission sets that contain the “Modify All Data” permission:

```

```

When combined with the PermissionSetAssignment object, you can create a nested query that returns all users assigned to a particular permission like “Modify All Data”:

```

```

If the permission set isn’t assigned to a user, you can also create or delete a permission set.

## User Licenses

The user license controls the permissions that are available in a permission set.

Every permission set can be associated with a user license or permission set license. If you plan to assign a permission set to multiple users with different user and permission set licenses, leave LicenseId empty. If only users with one type of license use this permission set, set the LicenseId to that single user or permission set license. If you want a permission set associated with a permission set license, then set LicenseId to the permission set license. To get the LicenseId, run this query:

```

```

Alternatively, to query a user or profile for the LicenseId.

```

```

## Child Objects

When using the API, think of each permission set or related set of access controls as an empty container that you fill with permission records.

In the API, a permission set can contain user, object, and field permissions, and setup entity access settings for other settings, such as Apex classes.

-   ObjectPermissions and FieldPermissions objects are available in API version 24.0 and later.
-   The SetupEntityAccess object is available in API version 25.0 and later.
-   The PermissionSetGroupComponent object is available in API version 45 and later.

Only user permissions are managed in the PermissionSet API object; all other permission types are managed in child API objects.

In these child objects, access is stored in a record, while the absence of a record indicates no access. To return a record in a SOQL query, a minimum permission or setting is required for each child object.

Because permissions are stored in related objects, it’s important to understand what questions to ask when using SOQL. For example, let’s say you want to know which permission sets have “Delete” on an object. You also want to know which ones include permissions that allow approval of a return merchandise authorization (where the approval checkbox is controlled with field permissions). Asking the right questions when using SOQL with permission sets ensures that you get the information you need, such as whether to migrate permissions or assign a permission set to a user.

For example, the following returns all permission sets where the “Read” permission is enabled for the Merchandise\_\_c object.

```

```

You can query for all permission sets that have “Read” on an object. However, you can’t query for permission sets that have no access on an object, because no records exist for that object. For example, the following returns no records because the object must have at least “Read” to return any records.

```

```

If you have at least the “Read” permission on an object, you can create a conditional query on other permissions in the same object. For example, the following returns any records where the object has at least the “Read” permission but not the “Edit” permission.

```

```

To set an object or field permission to no access, delete the record that contains the permission. For example, to disable all object permissions in the Merchandise\_\_c object for a particular permission set, first query to retrieve the ID of the object permission record.

```

```

Then delete the IDs returned from the query.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

If you try to update the object or field permissions by setting all permissions to false, the permission record is automatically deleted. Any subsequent queries for the record ID won’t return results and you must add a new permission record to grant access.

## View a Permission Set with Nested Queries

You can build on the PermissionSet object using child relationships that show all of the permissions in a single permission set. For example, the following returns all permission sets and displays the “Transfer Leads” permission, as well as any “Read” permissions on any objects and fields.

```

```

## Associated Profiles

In API version 25.0 and later, every profile is associated with a permission set that stores the profile’s user, object, and field permissions, as well as setup entity access settings. You can query permission sets that are owned by profiles but not modify them.

The following example returns all permission sets, including those owned by a profile.

```

```

The following returns all permission sets except those permissions owned by profiles.

```

```

Because permission sets have child objects in the API, you can query their values on permission sets owned by a profile. For example, the following returns all enabled object permission records for profiles only.

```

```

Once you have the IDs for permission sets that are owned and not owned by profiles, use the [PermissionSetAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionsetassignment.htm "Represents a user’s assignment to a permission set or permission set group. This object is available in API version 22.0 and later.") object to see if users can access objects or fields via their profile permissions or their permission sets. For example, the following SOQL query returns all users who have the “Read” permission on the Merchandise\_\_c object. It also specifies whether the permission is granted through a profile or permission set.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

For permission sets that are owned by profiles, don’t use Name and Label values that are returned in a query. Name and Label values from queries can change.

#### See Also

-   [ObjectPermissions](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_objectpermissions.htm "Represents the enabled object permissions for the parent PermissionSet. This object is available in API version 24.0 and later.")

-   [FieldPermissions](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fieldpermissions.htm "Represents the enabled field permissions for the parent PermissionSet. This object is available in API version 24.0 and later.")

-   [SetupEntityAccess](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_setupentityaccess.htm "Represents the enabled setup entity access settings (such as for Apex classes) for the parent PermissionSet. This object is available in API version 25.0 and later.")

-   [PermissionSetAssignment](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionsetassignment.htm "Represents a user’s assignment to a permission set or permission set group. This object is available in API version 22.0 and later.")

-   [Profile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profile.htm "Represents a profile, which defines a set of permissions to perform different operations. Operations can include creating a custom profile or querying, adding, updating, or deleting information.")

## Code Examples

```
SELECT Name, PermissionsModifyAllData
FROM PermissionSet
WHERE PermissionsModifyAllData=true
```

```
SELECT Name, (SELECT AssigneeId FROM Assignments)
FROM PermissionSet
WHERE PermissionsModifyAllData=true
```

```
SELECT Id, Name
FROM UserLicense
```

```
SELECT Id, Profile.UserLicenseId
FROM User
```

```
SELECT SobjectType, ParentId, PermissionsRead
FROM ObjectPermissions
WHERE PermissionsRead = True AND SobjectType = 'Merchandise__c'
```

## Related Topics

- PermissionSetAssignment (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionsetassignment.htm)
- ObjectPermissions (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_objectpermissions.htm)
- FieldPermissions (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fieldpermissions.htm)
- SetupEntityAccess (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_setupentityaccess.htm)
- Profile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profile.htm)
