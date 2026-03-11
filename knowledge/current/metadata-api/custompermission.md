---
title: "CustomPermission"
domain: metadata-api
topic: custompermission
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:51.583Z
keywords: [CustomPermission, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, CustomPermissionDependencyRequired, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# CustomPermission

# CustomPermission

Represents a permission that grants access to a custom feature. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CustomPermission components have the suffix .customPermission and are stored in the customPermissions folder.

## Version

CustomPermission components are available in API version 31.0 and later.

## Special Access Rules

As of Summer ’20 and later, only users who have one of these permissions can access this object:

-   View Setup and Configuration
-   Manage Session Permission Set Activations
-   Assign Permission Sets

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| connectedApp | string | The name of the connected app that’s associated with this permission. Limit: 80 characters. |
| description | string | The custom permission description. Limit: 255 characters. |
| isLicensed | boolean | Required. Read-only. Indicates whether the appropriate Salesforce license is required before accessing the permission (true) or not (false). |
| label | string | Required. The custom permission label. Limit: 80 characters. |
| requiredPermission | CustomPermissionDependencyRequired[] | Indicates which custom permissions are required by the parent custom permission. This field is available in API version 32.0 and later. |

## CustomPermissionDependencyRequired

CustomPermissionDependencyRequired determines whether a custom permission is required by the parent custom permission. A required custom permission must be enabled when its parent is enabled.

| Field Name | Field Type | Description |
| --- | --- | --- |
| customPermission | string | Required. The custom permission name. |
| dependency | boolean | Required. Indicates whether this custom permission is required by the parent custom permission (true) or not (false). |

## Declarative Metadata Sample Definition

The following is an example of a CustomPermission component.

```

```

The following is an example package.xml that references the previous definition, as well as other custom permissions that are associated with a connected app.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").