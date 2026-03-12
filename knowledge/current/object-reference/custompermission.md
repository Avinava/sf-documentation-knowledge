---
title: "CustomPermission"
domain: object-reference
topic: custompermission
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:07.745Z
estimatedTokens: 1401
keywords: [CustomPermission, permission, created, control, access, custom, process, app, sending, email, API, version, 31.0, later, Calls]
---

# CustomPermission

> Represents a permission created to control access to a custom
			process or app, such as sending email. This object is available in API version 31.0
		and later.

# CustomPermission

Represents a permission created to control access to a custom process or app, such as sending email. This object is available in API version 31.0 and later.

## Supported Calls

describeLayout(), describeSObjects(), query(), retrieve()

## Special Access Rules

As of Summer ’20 and later, only users who have one of these permissions can access this object:

-   View Setup and Configuration
-   Manage Session Permission Set Activations
-   Assign Permission Sets

## Fields

| Field Name | Details |
| --- | --- |
| Description | TypetextareaPropertiesFilter, Group, Nillable, SortDescriptionA description of the custom permission. Limit: 255 characters. |
| DeveloperName | TypestringPropertiesFilter, Group, SortDescriptionThe unique name of the custom permission in the API. This name can contain only underscores and alphanumeric characters and must be unique in your organization. It must begin with a letter, not include spaces, not end with an underscore, and not contain two consecutive underscores. The label corresponds to Name in the user interface. Limit: 80 characters.NoteWhen creating large sets of data, always specify a unique DeveloperName for each record. If no DeveloperName is specified, performance may slow while Salesforce generates one for each record.NoteOnly users with View DeveloperName OR View Setup and Configuration permission can view, group, sort, and filter this field. |
| IsLicensed | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionWhen enabled (true) indicates that the appropriate Salesforce license is required before accessing the permission. This field is available in API version 50.0 and later. |
| IsProtected | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether the custom permission is protected (true) or not (false). Protected components that have been installed in other organizations can’t be linked to or referenced by components created in the subscriber organization. A developer can delete a protected component contained in a managed package in a future release of the package without worrying about failing installations. However, after a component is marked as unprotected and is released globally, the developer can’t delete it. The default value is false. This field is available in API version 50.0 and later. |
| Language | TypepicklistPropertiesFilter, Group, Restricted picklist, SortDescriptionThe language of the custom permission. Valid values are:Chinese (Simplified): zh_CNChinese (Traditional): zh_TWDanish: daDutch: nl_NLEnglish: en_USFinnish: fiFrench: frGerman: deItalian: itJapanese: jaKorean: koNorwegian: noPortuguese (Brazil): pt_BRRussian: ruSpanish: esSpanish (Mexico): es_MX Spanish (Mexico) defaults to Spanish for customer-defined translations.Swedish: svThai: th The Salesforce user interface is fully translated to Thai, but Help is in English. |
| MasterLabel | TypestringPropertiesFilter, Group, SortDescriptionThe custom permission label, which corresponds to Label in the user interface. Limit: 80 characters. |
| NamespacePrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe namespace prefix that is associated with this object. Each Developer Edition org that creates a managed package has a unique namespace prefix. Limit: 15 characters. You can refer to a component in a managed package by using the namespacePrefix__componentName notation.The namespace prefix can have one of the following values.In Developer Edition orgs, NamespacePrefix is set to the namespace prefix of the org for all objects that support it, unless an object is in an installed managed package. In that case, the object has the namespace prefix of the installed managed package. This field’s value is the namespace prefix of the Developer Edition org of the package developer.In orgs that are not Developer Edition orgs, NamespacePrefix is set only for objects that are part of an installed managed package. All other objects have no namespace prefix. |

## Usage

Use the CustomPermission object to determine users’ access to custom permissions.

For example, to query all permission sets where the Button1 permission is enabled:

```

```

To query all permission sets and profiles with custom permissions:

```

```

To query for all SetupEntityAccess rows with custom permissions:

```

```

#### See Also

-   [CustomPermissionDependency](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custompermissiondependency.htm "Represents the dependency between two custom permissions when one custom permission requires that you enable another custom permission. This object is available in API version 32.0 and later.")

-   [PermissionSet](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm "Represents a set of permissions that’s used to grant more access to one or more users without changing their profile or reassigning profiles. This object is available in API version 22.0 and later.")

-   [Profile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profile.htm "Represents a profile, which defines a set of permissions to perform different operations. Operations can include creating a custom profile or querying, adding, updating, or deleting information.")

-   [SetupEntityAccess](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_setupentityaccess.htm "Represents the enabled setup entity access settings (such as for Apex classes) for the parent PermissionSet. This object is available in API version 25.0 and later.")

## Code Examples

```
SELECT Id, DeveloperName,
(select Id, Parent.Name, Parent.Profile.Name from SetupEntityAccessItems)
FROM CustomPermission
WHERE DeveloperName = 'Button1'
```

```
SELECT Assignee.Name, PermissionSet.Id,
PermissionSet.Profile.Name,
PermissionSet.isOwnedByProfile,
PermissionSet.Label
FROM PermissionSetAssignment
WHERE PermissionSetId
IN (SELECT ParentId
   FROM SetupEntityAccess
   WHERE SetupEntityType =
'CustomPermission')
```

```
SELECT Id,ParentId,Parent.Name, SetupEntityId
FROM SetupEntityAccess
WHERE SetupEntityType='CustomPermission'
AND ParentId
IN (SELECT Id
   FROM PermissionSet
   WHERE isOwnedByProfile = false)
```

## Related Topics

- CustomPermissionDependency (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_custompermissiondependency.htm)
- PermissionSet (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_permissionset.htm)
- Profile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_profile.htm)
- SetupEntityAccess (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_setupentityaccess.htm)
