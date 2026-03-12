---
title: "ObjectPermissions"
domain: object-reference
topic: objectpermissions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:13.356Z
estimatedTokens: 1547
keywords: [ObjectPermissions, enabled, permissions, parent, PermissionSet, API, version, 24.0, later, Calls, Special, Access, Rules, Permission, Dependencies]
---

# ObjectPermissions

> Represents the enabled object permissions for
            the parent PermissionSet.
      This object is available in API version 24.0 and later.

# ObjectPermissions

Represents the enabled object permissions for the parent PermissionSet. This object is available in API version 24.0 and later.

To grant a user access to an object, associate an ObjectPermissions record with a PermissionSet that’s assigned to a user. ObjectPermissions records are only supported in PermissionSet, not in Profile.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve(), update(), upsert()

## Special Access Rules

As of Summer ’20 and later, only users with the View Setup and Configuration permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe Id of this object’s parent PermissionSet.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToPermissionSet |
| PermissionsCreate | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIf true, users assigned to the parent PermissionSet can create records for this object. Requires PermissionsRead for the same object to be true. |
| PermissionsDelete | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIf true, users assigned to the parent PermissionSet can delete records for this object. Requires PermissionsRead and PermissionsEdit for the same object to be true. |
| PermissionsEdit | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIf true, users assigned to the parent PermissionSet can edit records for this object. Requires PermissionsRead for the same object to be true. |
| PermissionsModifyAllRecords | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIf true, users assigned to the parent PermissionSet can edit all records for this object, regardless of sharing settings. Requires PermissionsRead, PermissionsDelete, PermissionsEdit, and PermissionsViewAllRecords for the same object to be true. |
| PermissionsRead | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIf true, users assigned to the parent PermissionSet can view records for this object. |
| PermissionsViewAllFields | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIf true, users assigned to the parent PermissionSet can view all fields and field data for this object. Available in API version 63.0 and later. |
| PermissionsViewAllRecords | TypebooleanPropertiesCreate, Filter, UpdateDescriptionIf true, users assigned to the parent PermissionSet can view all records for this object, regardless of sharing settings. Requires PermissionsRead for the same object to be true. |
| SobjectType | TypepicklistPropertiesCreate, Filter, Group, Restricted picklist, SortDescriptionThe object’s API name. For example, Merchandise__c. |

## Permission Dependencies

Some user permissions have dependencies on object permissions. For example, if a permission set has the “Transfer Leads” permission, it also has “Read” and “Create” on the leads object.

You can query from ObjectPermissions up to the parent PermissionSet object. For example:

```

```

## Determining Object Access with “Modify All Data”

When using SOQL to query object permissions, be aware that some object permissions are enabled because a user permission requires them.

The exception to this rule is when “Modify All Data” is enabled. While it enables all object permissions, it doesn’t physically store any object permission records in the database. As a result, unlike object permissions that are required by a user permission—such as “View All Data” or “Import Leads”—the query still returns permission sets with “Modify All Data,” but the object permission record will contain an invalid ID that begins with “000”. This ID indicates that the object has full access due to “Modify All Data” and the object permission record can’t be updated or deleted. To remove full access from these objects, disable “Modify All Data” and then delete the resulting object permission record. This ensures that when using SOQL to find all the objects that have full access, it returns all objects that have this access regardless of whether it’s due to “Modify All Data” or because an administrator set full access.

For example, the following will return all permission sets that have “Read” on the Merchandise\_\_c object, regardless of whether it’s explicitly defined on the object or implicitly defined through “Modify All Data.”

```

```

## Nesting Object Permissions

You can nest ObjectPermissions in a PermissionSet query. For example, the following returns any permission sets where “Transfer Leads” is true. Additionally, the result set will include the “Read” object permission on leads. This is done by nesting the SOQL with an object permission query using the relationship name for object permissions: ObjectPerms.

```

```

As a result, it’s possible to traverse the relationship between the PermissionSet and any child-related objects (in this case, ObjectPermissions). You can do this from the PermissionSet object by using the child relationship (ObjectPerms, FieldPerms, and so on) or from the child object by referencing the PermissionSet with Parent.permission\_set\_attribute.

It’s important to consider when to use a conditional WHERE statement to restrict the result set. To query based on an attribute on the permission set object, nest the SOQL with the child relationship. However, to query based on an attribute on the child object, you must reference the permission set parent attribute in your query.

The following two queries return the same columns with different results, based on whether you use the child relationship or parent notation.

```

```

versus:

```

```

#### See Also

-   [PermissionSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm "Represents a set of permissions that’s used to grant more access to one or more users without changing their profile or reassigning profiles. This object is available in API version 22.0 and later.")

-   [FieldPermissions](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fieldpermissions.htm "Represents the enabled field permissions for the parent PermissionSet. This object is available in API version 24.0 and later.")

## Code Examples

```
SELECT Parent.Name, Parent.PermissionsTransferAnyLead, PermissionsRead, PermissionsCreate
FROM ObjectPermissions
WHERE SobjectType = 'Lead'
```

```
SELECT Id, Parent.label, SobjectType, PermissionsRead,
   Parent.PermissionsModifyAllData, ParentId
FROM ObjectPermissions
WHERE PermissionsRead = true and SobjectType = 'Merchandise__c'
```

```
SELECT Id,Name,PermissionsTransferAnyLead,
(SELECT Id, PermissionsRead from ObjectPerms where SobjectType='Lead')
FROM PermissionSet
WHERE PermissionsTransferAnyLead = true
```

```
SELECT Id, Name, PermissionsModifyAllData,
(SELECT Id, SobjectType, PermissionsRead from Objectperms)
FROM PermissionSet
WHERE PermissionsModifyAllData=true
```

```
SELECT Id, SObjectType, PermissionsRead, Parent.Id, Parent.Name, Parent.PermissionsModifyAllData
FROM ObjectPermissions
WHERE SObjectType='Merchandise__c'
```

## Related Topics

- PermissionSet (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm)
- FieldPermissions (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fieldpermissions.htm)
