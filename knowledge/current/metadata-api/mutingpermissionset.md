---
title: "MutingPermissionSet"
domain: metadata-api
topic: mutingpermissionset
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:41.281Z
estimatedTokens: 955
keywords: [MutingPermissionSet, Represents, set, disabled, permissions, used, conjunction, PermissionSetGroup., Declarative, Metadata, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Sample]
---

# MutingPermissionSet

> Represents a set of disabled permissions and is
      used in conjunction with PermissionSetGroup.

# MutingPermissionSet

Represents a set of disabled permissions and is used in conjunction with [PermissionSetGroup](atlas.en-us.api_meta.meta/api_meta/meta_permissionsetgroup.htm "Represents a group of permission sets and the permissions within them. Use permission set groups to organize permissions based on job functions or tasks. Then, you can package the groups as needed.").

This type extends the [PermissionSet](atlas.en-us.api_meta.meta/api_meta/meta_permissionset.htm "Represents a set of permissions that's used to grant more access to one or more users without changing their profile or reassigning profiles. You can use permission sets to grant access but not to deny access.") metadata type.

## Declarative Metadata File Suffix and Directory Location

Muting permission sets are stored in the mutingpermissionsets directory. The file name matches the muting permission set API name and the extension is .mutingpermissionset. For example, a mutingpermissionsets with the name Finance\_Mgmt\_MutingPermSet is stored in mutingpermissionsets/Finance\_Mgmt\_MutingPermSet.mutingpermissionset.

## Version

This object is available in API version 46.0 and later.

## Special Access Rules

As of Summer ’20 and later, only users who have one of these permissions can access this type:

-   View Setup and Configuration
-   Manage Session Permission Set Activations
-   Assign Permission Sets
-   Manage Profiles and Permission Sets

To view the following settings, assignments, and permissions for standard and custom objects in a specified muting permission set, the View Setup and Configuration permission is required.

-   Client settings
-   Field permissions
-   Layout assignments
-   Object permissions
-   Permission dependencies
-   Permission set tab settings
-   Permission set group components
-   Record types

## Fields

MutingPermissionSet has the same fields as [PermissionSet](atlas.en-us.api_meta.meta/api_meta/meta_permissionset.htm "Represents a set of permissions that's used to grant more access to one or more users without changing their profile or reassigning profiles. You can use permission sets to grant access but not to deny access."), plus a single field, label, used to name a MutingPermissionSet. Unlike PermissionSet, settings enabled by MutingPermissionSet are turned off for the permission set group that it’s a component of.

| Field | Field Type | Description |
| --- | --- | --- |
| label | string | Required. The name of the muting permission set. |

## Declarative Metadata Sample Definition

The following example deploys a MutingPermissionSet used in a Permission Set Group intended for users submitting job applications for a custom application. The muting permission set has administrative permissions enabled to ensure that they’re muted in the Permission Set Group.

```

```

The following is an example package.xml manifest used to retrieve the MutingPermissionSet metadata for an organization.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [PermissionSet](atlas.en-us.api_meta.meta/api_meta/meta_permissionset.htm "Represents a set of permissions that's used to grant more access to one or more users without changing their profile or reassigning profiles. You can use permission sets to grant access but not to deny access.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<MutingPermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>Job Apps User Muted</label>
    <description>Mutes any administrative tasks for the Job Apps user</description>
    <hasActivationRequired>false</hasActivationRequired>
    <license>Salesforce</license>
    <applicationVisibilities>
        <application>JobApps__Approval</application>
        <visible>true</visible>
    </applicationVisibilities>
    <classAccesses>
        <apexClass>ApprovalUtility</apexClass>
        <enabled>true</enabled>
    </classAccesses>
    <customPermissions>
        <enabled>true</enabled>
        <name>JobAppApprover</name>
    </customPermissions>
    <fieldPermissions>
        <editable>false</editable>
        <field>Job_Request__c.Salary__c</field>
        <readable>true</readable>
    </fieldPermissions>
    <objectPermissions>
        <allowCreate>true</allowCreate>
        <allowDelete>true</allowDelete>
        <allowEdit>true</allowEdit>
        <allowRead>true</allowRead>
        <customizeSetup>true</customizeSetup>
        <deleteSetup>true</deleteSetup>
        <modifyAllRecords>true</modifyAllRecords>
        <object>Approval_Confirmation__c</object>
        <viewAllRecords>true</viewAllRecords>
        <viewSetup>true</viewSetup>
    </objectPermissions>
    <pageAccesses>
        <apexPage>Job_Approval_Web_Form</apexPage>
        <enabled>true</enabled>
    </pageAccesses>
    <recordTypeVisibilities>
        <recordType>Approval_Confirmation__c.DevManager</recordType>
        <visible>true</visible>
    </recordTypeVisibilities>
    <tabSettings>
        <tab>Approval_Confirmation__c</tab>
        <visibility>Visible</visibility>
    </tabSettings>
</MutingPermissionSet>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Job_Apps_User</members>
        <name>PermissionSetGroup</name>
    </types>
    <types>
        <members>Job_Apps_User_Muted</members>
        <name>MutingPermissionSet</name>
    </types>
    <version>49.0</version>
</Package>
```

## Related Topics

- PermissionSetGroup (atlas.en-us.api_meta.meta/api_meta/meta_permissionsetgroup.htm)
- PermissionSet (atlas.en-us.api_meta.meta/api_meta/meta_permissionset.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
