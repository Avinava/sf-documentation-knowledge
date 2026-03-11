---
title: "DelegateGroup"
domain: metadata-api
topic: delegategroup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.807Z
keywords: [DelegateGroup, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# DelegateGroup

# DelegateGroup

Represents a group of users who have the same administrative privileges. These groups are different from public groups used for sharing.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

DelegateGroup components have the suffix .delegateGroup and are stored in the delegateGroups folder. The file prefix must match the developer name of the delegate group. For example, a delegate group with a developer name of MyDelegateGroup would have a file name of MyDelegateGroup.delegateGroup.

## Version

DelegateGroup components are available in API version 36.0 and later.

## Special Access Rules

Only users with the “View Setup and Configuration” permission can be delegated administrators. As of Spring ’20 and later, only users with “View Setup” or “Configuration” permission can access this object.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| customObjects | string[] | The custom objects associated with the group. Delegated administrators can customize nearly every aspect of each of those custom objects, including creating a custom tab. However, they can’t create or modify relationships on the objects or set organization-wide sharing defaults. Delegated administrators must have access to custom objects to access the merge fields on those objects from formulas. |
| groups | string[] | The groups with users assigned by delegated administrators. |
| label | string | Required. The delegated group’s non-API name. |
| loginAccess | boolean | Required. Allows users in this group to log in as users in the role hierarchy that they administer (true) or not (false). Depending on your organization settings, individual users must grant login access to allow their administrators to log in as them. |
| permissionSetGroups | string[] | The permission set groups that can be assigned to users in specified roles and all subordinate roles by delegated administrators. |
| permissionSets | string[] | The permission sets that can be assigned to users in specified roles and all subordinate roles by delegated administrators. |
| profiles | string[] | The profiles that can be assigned to users by delegated administrators. |
| roles | string[] | The roles and subordinates for which delegated administrators of the group can create and edit users. |

## Declarative Metadata Sample Definition

The following is an example of a DelegateGroup component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").