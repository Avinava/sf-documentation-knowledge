---
title: "PermissionSet"
domain: tooling-api
topic: permissionset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:45.503Z
estimatedTokens: 1020
keywords: [PermissionSet, permissions, that’s, grant, access, users, changing, their, profile, reassigning, profiles, API, version, 28.0, later]
---

# PermissionSet

> Represents a set of permissions that’s used to grant more
            access to users without changing their profile or reassigning profiles. Available
        in API version 28.0 and later.

# PermissionSet

Represents a set of permissions that’s used to grant more access to users without changing their profile or reassigning profiles. Available in API version 28.0 and later.

## Supported SOAP Calls

describeSObjects(), query(), retrieve(), search()

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
| Description | TypestringPropertiesFilter, Nillable, Group, SortDescriptionA description of the permission set. Limit: 255 characters. |
| HasActivationRequired | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the permission set requires an associated active session (true) or not (false). |
| IsCustom | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the permission set is custom (created by an admin); if false, the permission set is standard and related to a specific permission set license. |
| IsOwnedByProfile | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIf true, the permission set is owned by a profile. Available in API version 25.0 and later. |
| Label | TypestringPropertiesFilter, Group, SortDescriptionThe permission set label, which corresponds to Label in the user interface. Limit: 80 characters. |
| ManageableState | TypeManageableState enumerated listPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionIndicates the manageable state of the specified component that is contained in a package:betadeleteddeprecateddeprecatedEditableinstalledinstalledEditablereleasedunmanaged |
| Name | TypestringPropertiesFilter, Group, SortDescriptionThe permission set group name. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix associated with this object. Each Developer Edition organization that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation. This field is available in API version 30.0 and later.The namespace prefix can have one of the following values:In Developer Edition organizations, the namespace prefix is set to the namespace prefix of the organization for all objects that support it. There is an exception if an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition organization of the package developer.In organizations that are not Developer Edition organizations, NamespacePrefix is only set for objects that are part of an installed managed package. There is no namespace prefix for all other objects. |
| PermissionSetGroupId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf the permission set is owned by a permission set group, this field returns the ID of the permission set group. If the permission set isn’t owned by a permission set group, this field returns a null value. Available in API version 45.0 and later. |
| ProfileId | TypereferencePropertiesFilter, Group, Nillable, SortDescriptionIf the permission set is owned by a profile, this field returns the ID of the profile. If the permission set isn’t owned by a profile, this field returns a null value. |
| Type | TypepicklistPropertiesDefaulted on create, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe permission set type. |
