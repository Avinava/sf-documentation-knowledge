---
title: "PermissionSetGroup"
domain: metadata-api
topic: permissionsetgroup
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:41.167Z
estimatedTokens: 845
keywords: [PermissionSetGroup, group, permission, permissions, groups, organize, job, functions, tasks, package, needed, Declarative, Metadata, File, Suffix]
---

# PermissionSetGroup

> Represents a group of permission
                sets and the permissions within them. Use permission set groups to
            organize permissions based on job functions or tasks. Then, you can package the groups
            as needed.

# PermissionSetGroup

Represents a group of permission sets and the permissions within them. Use permission set groups to organize permissions based on job functions or tasks. Then, you can package the groups as needed.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## Declarative Metadata File Suffix and Directory Location

Permission set groups are stored in the permissionsetgroups directory. The file name matches the permission set API name and the extension is .permissionsetgroup. For example, a permission set group with the name Finance\_Mgmt\_PermSetGroup is stored in permissionsetgroups/Finance\_Mgmt\_PermSetGroup.permissionsetgroup.

## Version

Permission set groups are available in API version 45.0 and later.

## Special Access Rules

As of Summer ’20 and later, to view this type, users must have one of these permissions:

-   View Setup and Configuration
-   Manage Session Permission Set Activations
-   Assign Permission Sets

To edit this type, users must have the Manage Profiles and Permission Sets permission.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| description | string | The permission set group description provided by the permission set group creator. |
| hasActivationRequired | boolean | Indicates whether the permission set group requires an associated active session (true) or not (false). The default value is false. This field is available in API version 53.0 and later. |
| label | string | Required. The permission set group label. |
| mutingPermissionSets | string | A permission set containing permissions to disable in the permission set group. This field is available in API version 46.0 and later. |
| permissionSets | string | A permission set or permission sets included in the permission set group. |
| status | string | Indicates permission set group recalculation status. Valid values are:Updated—The group is current.Outdated—The group requires recalculation.Updating—The group is in recalculation mode.Failed—The group recalculation failed. |

## Declarative Metadata Sample Definition

When adding a permission set group, you can do something like this. Individual permissions are included in the permission set referenced, not in the permission set group.

```

```

The permission set Billing\_PS contains the individual permissions included in Finance\_Mgmt\_PermSetGroup.

```

```

This example package.xml manifest retrieves the PermissionSetGroup metadata for an org. When you retrieve permission set groups, also retrieve the related components. For example, to retrieve PermissionSetGroup, you must also retrieve PermissionSet.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PermissionSetGroup xmlns="http://soap.sforce.com/2006/04/metadata">
     <fullName>Finance_Mgmt_PermSetGroup</fullName>
     <description>Finance_Mgmt_PermSetGroup desc</description>
     <label>Finance_Mgmt_PermSetGroup</label>
     <permissionSets>Billing_PS</permissionSets>
</PermissionSetGroup>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
     <fullName>Billing_PS</fullName>
     <description>Billing_PS</description>
     <label>Billing_PS</label>
     <hasActivationRequired>false</hasActivationRequired>
     <license>Salesforce</license>
     <userPermissions>
          <enabled>true</enabled>
          <name>ViewSetup</name>
     </userPermissions>
     <userPermissions>
          <enabled>true</enabled>
          <name>ViewRoles</name>
     </userPermissions>
     <userPermissions>
          <enabled>true</enabled>
          <name>EditBillingInfo</name>
    </userPermissions>
</PermissionSet>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
     <types>
          <members>Finance_Mgmt_PermSetGroup</members>
          <name>PermissionSetGroup</name>
     </types>
     <types>
          <members>Billing_PS</members>
          <name>PermissionSet</name>
     </types>
     <version>45.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
