---
title: "SetupEntityAccess"
domain: object-reference
topic: setupentityaccess
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:17.001Z
estimatedTokens: 1172
keywords: [SetupEntityAccess, enabled, setup, entity, access, settings, Apex, classes, parent, PermissionSet, API, version, 25.0, later, Calls]
---

# SetupEntityAccess

> Represents the enabled setup entity access settings (such as for Apex
         classes) for the parent PermissionSet. This object is available in API version 25.0
      and later.

# SetupEntityAccess

Represents the enabled setup entity access settings (such as for Apex classes) for the parent PermissionSet. This object is available in API version 25.0 and later.

To grant users access to an entity, associate the appropriate SetupEntityAccess record with a PermissionSet that’s assigned to a user.

## Supported Calls

create(), delete(), describeSObjects(), query(), retrieve()

## Special Access Rules

As of Spring ’20 and later, only users with "View Setup and Configuration" permission can access this object.

## Fields

| Field Name | Details |
| --- | --- |
| ParentId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the entity’s parent PermissionSet.This is a relationship field.Relationship NameParentRelationship TypeLookupRefers ToPermissionSet |
| SetupEntityId | TypereferencePropertiesCreate, Filter, Group, SortDescriptionThe ID of the entity for which access is enabled, such as an Apex class or Visualforce page. |
| SetupEntityType | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionThe type of setup entity for which access is enabled. Valid values are:ApexClass for Apex classesApexPage for Visualforce pagesIn API version 64.0 and later, BotDefinition for agentsIn API version 28.0 and later, ConnectedApplication for OAuth connected appsIn API version 48.0 and later, CustomEntityDefinition for Custom Settings and Custom Metadata TypesIn API version 31.0 and later, CustomPermission for custom permissionsIn API version 62.0 and later, EmailRoutingAddress for email routing addresses.In API version 60.0 and later, ExternalClientApplication for external client apps.In API version 58.0 and later, ExternalCredentialParameter for external credential principals.In API version 58.0 and later, FlowDefinition for flowsIn API version 62.0 and later, MessagingChannel for messaging channelsIn API version 58.0 and later, OrgWideEmailAddress for organization-wide email addressesIn API version 28.0 and later, ServiceProvider for service providersIn API version 60.0 and later, StandardInvocableActionType for standard invocable actions.In API version 28.0 and later, TabSet for apps |

## Usage

Because SetupEntityAccess is a child of the PermissionSet object, the usage is similar to other PermissionSet child objects like FieldPermissions and ObjectPermissions.

For example, the following code returns all permission sets that grant access to any setup entities for which access is enabled:

```

```

The following code returns permission sets that grant access only to Apex classes:

```

```

The following code returns permission sets that grant access to any setup entities, and are not owned by a profile:

```

```

You may want to return only those permission sets that have access to a specific setup entity. To do this, query the parent object. For example, this code returns all permission sets that grant access to the helloWorld Apex class:

```

```

While it’s possible to return permission sets that have access to a ConnectedApplication, ServiceProvider, or TabSet by SetupEntityId, it’s not possible to return permission sets that have access to these SetupEntityType fields by any other AppMenuItem attribute, such as Name or Description. For example, to find out if a user has access to the Recruiting app, you’d run two queries. First, query to get the AppMenuItem ID:

```

```

Let’s say the previous query returned the AppMenuItem ApplicationId 02uD0000000GIiMIAW. Using this ID, you can now run a query to find out if a user has access to the Recruiting app:

```

```

#### See Also

-   [PermissionSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm "Represents a set of permissions that’s used to grant more access to one or more users without changing their profile or reassigning profiles. This object is available in API version 22.0 and later.")

-   [FieldPermissions](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fieldpermissions.htm "Represents the enabled field permissions for the parent PermissionSet. This object is available in API version 24.0 and later.")

-   [ObjectPermissions](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_objectpermissions.htm "Represents the enabled object permissions for the parent PermissionSet. This object is available in API version 24.0 and later.")

-   [ApexClass](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexclass.htm "Represents an Apex class.")

-   [ApexPage](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexpage.htm "Represents a single Visualforce page.")

## Code Examples

```
SELECT Id, ParentId, Parent.Name, SetupEntityId
FROM SetupEntityAccess
```

```
SELECT Id, ParentId, Parent.Name, SetupEntityId
FROM SetupEntityAccess
WHERE SetupEntityType='ApexClass'
```

```
SELECT Id, ParentId, Parent.Name, SetupEntityId
FROM SetupEntityAccess
WHERE ParentId
IN (SELECT Id
   FROM PermissionSet
   WHERE isOwnedByProfile = false)
```

```
SELECT Id, Name,
   (SELECT Id, Parent.Name, Parent.Profile.Name
   FROM SetupEntityAccessItems)
FROM ApexClass
WHERE Name = 'helloWorld'
```

```
SELECT Id, Name, Label
FROM AppMenuItem
WHERE Name = 'Recruiting'
```

## Related Topics

- PermissionSet (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm)
- FieldPermissions (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_fieldpermissions.htm)
- ObjectPermissions (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_objectpermissions.htm)
- ApexClass (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexclass.htm)
- ApexPage (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_apexpage.htm)
