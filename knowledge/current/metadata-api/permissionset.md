---
title: "PermissionSet"
domain: metadata-api
topic: permissionset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:41.700Z
estimatedTokens: 5038
keywords: [PermissionSet, Represents, set, permissions, that's, used, grant, access, users, without, changing, their, profile, reassigning, profiles., permission, deny, access., Declarative, Metadata]
---

# PermissionSet

> Represents a set of permissions that's used to grant
            more access to one or more users without changing their profile or reassigning profiles.
            You can use permission sets to grant access but not to deny access.

# PermissionSet

Represents a set of permissions that's used to grant more access to one or more users without changing their profile or reassigning profiles. You can use permission sets to grant access but not to deny access.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In API version 40.0 and later, when you retrieve permission set metadata, all content exposed in Metadata API for the permission sets is included. The metadata includes Apex associated with the permission set, CRUD, and so on. Likewise, when you deploy a permission set, you must include all of its metadata to avoid accidentally overwriting the permission set’s contents.

In API version 39.0 and earlier, retrieving or deploying permission set metadata returns only app and system permissions assigned to the permission set. Junction metadata (such as Apex, CRUD) are included only if the metadata for the related component is also included in the package definition.

In API version 29.0 and later, you can retrieve and deploy access settings for these managed components in profiles and permission sets:

For more information, see the Managed Component Access section of [Sample package.xml Manifest Files](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/manifest_samples.htm) in the Metadata API Developer Guide.

## Declarative Metadata File Suffix and Directory Location

Permission sets are stored in the permissionsets directory. The file name matches the permission set API name and the extension is .permissionset. For example, a permission set with the name *User\_Management\_Perms* is stored in permissionsets/User\_Management\_Perms.permissionset.

## Version

Permission sets are available in API version 22.0 and later.

## Special Access Rules

As of Summer ’20 and later, only users who have one of these permissions can access this type:

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

| Field | Field Type | Description |
| --- | --- | --- |
| agentAccesses | PermissionSetAgentAccess[] | Indicates which agents are visible to users assigned to this permission set. Available in API version 63.0 and later. |
| applicationVisibilities | PermissionSetApplicationVisibility[] | Indicates which apps are visible to users assigned to this permission set. Available in API version 29.0 and later. In API version 29.0, this field supports custom apps only. In API version 30.0 and later, this field supports both standard and custom apps. |
| classAccesses | PermissionSetApexClassAccess[] | Indicates which top-level Apex classes have methods that users assigned to this permission set can execute. Available in API version 23.0 and later. |
| customMetadataTypeAccesses | PermissionSetCustomMetadataTypeAccess[] | Indicates the custom metadata types that are read-accessible to a user assigned to this permission set. Available in API version 47.0 and later. |
| customPermissions | PermissionSetCustomPermissions[] | Indicates which custom permissions are available to users assigned to this permission set. Available in API version 31.0 and later. |
| customSettingAccesses | PermissionSetCustomSettingAccesses[] | Indicates the custom settings that are read-accessible to a user assigned to this permission set. Available in API version 47.0 and later. |
| description | string | The permission set description. Limit: 255 characters. |
| emailRoutingAddressAccesses | PermissionSetEmailRoutingAddressAccess[] | Indicates the Email Routing Address permissions that are available to users assigned to a permission set. Available in API version 62.0 and later. |
| externalCredentialPrincipalAccesses | PermissionSetExternalCredentialPrincipalAccess[] | Indicates which external credential principals are available to users assigned to this permission set. Available in API version 59.0 and later. |
| externalDataSourceAccesses | PermissionSetExternal DataSourceAccess[] | Indicates which data sources with identity type of Per User are available to users assigned to this permission set. Available in API version 27.0 and later. |
| fieldPermissions | PermissionSetFieldPermissions[] | Indicates which fields are accessible to a user assigned to this permission set, and the kind of access available (readable or editable). Available in API version 23.0 and later. |
| flowAccesses | PermissionSetFlowAccess[] | Indicates which flows can be accessed by a user assigned to this permission set. Available in API version 47.0 and later. |
| hasActivationRequired | boolean | Indicates whether the permission set requires an associated active session (true) or not (false). Available in API version 37.0 and later. |
| label | string | Required. The permission set label. Limit: 80 characters. |
| license | string | Either the related permission set license or the user license associated with this permission set. Available in API version 38.0 and later. Use this field instead of userLicense, which is deprecated and only available up to API Version 37.0. |
| objectPermissions | PermissionSetObjectPermissions[] | Indicates the objects that are accessible to a user assigned to this permission set, and the kind of access available (create, read, edit, delete, and so on). Available in API version 23.0 and later. |
| pageAccesses | PermissionSetApexPageAccess[] | Indicates which Visualforce pages that users assigned to this permission set can execute. Available in API version 23.0 and later. |
| recordTypeVisibilities | PermissionSetRecordTypeVisibility[] | Indicates which record types are visible to users assigned to this permission set. Available in API version 29.0 and later. This field is never retrieved or deployed for inactive record types. |
| ServicePresenceStatusAccesses | PermissionSetServicePresenceStatusAccess[] | Indicates which Service presence statuses that the user assigned to this profile can execute. Available in API version 64.0 and later. |
| tabSettings | PermissionSetTabVisibility[] | Indicates the tab visibility settings for this permission set. Available in API version 26.0 and later. |
| userLicense | string | Deprecated. The user license for the permission set. A user license determines the baseline of features that the user can access. Every user must have exactly one user license. Available up to API version 37.0. In API version 38.0 and later, use license. |
| userPermissions | PermissionSetUserPermissions[] | Specifies an app or system permission (such as “API Enabled”) and whether it's enabled for this permission set. In API version 28.0 and earlier, this field retrieves all user permissions, enabled or disabled. In API version 29.0 and later, this field retrieves only enabled user permissions. In API Version 40.0 and later, if a permission isn’t specified for a deployment, it’s disabled. |

## PermissionSetAgentAccess

PermissionSetAgentAccess represents the agent access configuration for users assigned through a permission set.

| Field Name | Field Type | Description |
| --- | --- | --- |
| agentName | string | Required. The name of the employee agent. |
| enabled | boolean | Required. Indicates whether users assigned to this permission set can use the Agentforce Employee Agent (true) or not (false). |

## PermissionSetApplicationVisibility

[PermissionSetApplicationVisibility](#PermissionSetApplicationVisibility_title) determines whether an app is visible to a user assigned to this permission set.

| Field Name | Field Type | Description |
| --- | --- | --- |
| application | string | Required. The app name. |
| visible | boolean | Required. Indicates whether this app is visible to users assigned to this permission set (true) or not (false). |

## PermissionSetApexClassAccess

[PermissionSetApexClassAccess](#PermissionSetApexClassAccess_title) represents the Apex class access for users assigned to a permission set.

| Field | Field Type | Description |
| --- | --- | --- |
| apexClass | string | Required. The Apex class name. |
| enabled | boolean | Required. Indicates whether users assigned to this permission set can execute methods in the top-level class (true) or not (false). |

## PermissionSetCustomMetadataTypeAccess

[PermissionSetCustomMetadataTypeAccess](#PermissionSetCustomMetadataTypeAccess_title) represents the custom metadata type access for users assigned to a permission set. Available in API version 47.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether the records for this custom metadata type are readable (true) or not (false). |
| name | string | Required. The custom metadata type name. |

## PermissionSetCustomPermissions

PermissionSetCustomPermissions represents the custom permissions access for users assigned to a permission set. Only enabled custom permissions are retrieved.

| Field Name | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether the custom permission is enabled (true) or not (false). |
| name | string | Required. The custom permission name. |

## PermissionSetCustomSettingAccesses

PermissionSetCustomSettingAccesses represents the custom setting access for users assigned to a permission set. Available in API version 47.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether the records for this custom setting are readable (true) or not (false). |
| name | string | Required. The custom setting name. |

## PermissionSetEmailRoutingAddressAccess

PermissionSetEmailRoutingAddressAccess represents the Email Routing Address access for users assigned to a permission set. Only enabled email routing addresses are retrieved.

| Field | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether the custom permission is enabled (true) or not (false). |
| name | string | Required. Represents an organization's Email-to-Case routing address. |

## PermissionSetExternalCredentialPrincipalAccess

[PermissionSetExternalCredentialPrincipalAccess](#PermissionSetExternalCredentialPrincipalAccess_title) represents the access to the external credential’s principals. Users assigned to the permission set can make callouts using a named credential that references the external credential. Available in API version 59.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether external credential principal access is enabled on the permission set (true) or not (false). |
| externalCredentialPrincipal | string | Required. The name of the external credential and principal, separated by a dash. For example, myExternalCredential-myPrincipal.If the external credential and principal are part of a package, include the package’s namespace prefix with the principal’s name using this format: namespacePrefix__myExternalCredential-myPrincipal. Use two underscores (__) between the namespace prefix and the external credential principal’s name. |

## PermissionSetExternalDataSourceAccess

[PermissionSetExternalDataSourceAccess](#PermissionSetExternalDataSourceAccess_title) represents the data source access for users with identity type of Per User. Available in API version 27.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether the data source is enabled (true) or not (false). |
| externalDataSource | string | The name of the external data source. |

## PermissionSetFieldPermissions

[PermissionSetFieldPermissions](#PermissionSetFieldPermissions_title) represents the field permissions for users assigned to a permission set. In API version 30.0 and later, permissions for required fields can’t be retrieved or deployed. In API version 54.0 and later, only field permissions enabled in the permission set are returned in queries.

As of API version 38.0, you can change field permissions to make a field editable using the Metadata API for fields that you can't change through the user interface. For example, you can deploy Asset.ProductCode as an editable field even though you can't through the user interface.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

If the View All Fields object permission is enabled for an object in the permission set, the individual fields aren't returned under fieldPermissions. However, if you later disable the View All Fields object permission, the fields are returned under fieldPermissions and you can remove access to the fields manually.

| Field | Field Type | Description |
| --- | --- | --- |
| editable | boolean | Required. Indicates whether the field can be edited by the users assigned to this permission set (true) or not (false). |
| field | string | Required. The API name of the field (such as Warehouse__c.Description__c).When referencing shared Activity fields, specify Event or Task. For example, Event.Meeting__c. |
| readable | boolean | Indicates whether the field can be read by the users assigned to this permission set (true) or not (false). |

## PermissionSetFlowAccess

[PermissionSetFlowAccess](#PermissionSetFlowAccess_title) represents which flows a permission set grants access to. Available in API version 47.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether users assigned this permission set can access the flow (true) or not (false) The default value is false. |
| flow | string | Required. The name of the flow to which access is granted. |

## PermissionSetObjectPermissions

[PermissionSetObjectPermissions](#permissionSetObjectPermissions_title) represents the object permissions for a permission set. Use one of these elements for each permission.

| Field | Field Type | Description |
| --- | --- | --- |
| allowCreate | boolean | Required. Indicates whether the object referenced by the object field can be created by the users assigned to this permission set (true) or not (false). |
| allowDelete | boolean | Required. Indicates whether the object referenced by the object field can be deleted by the users assigned to this permission set (true) or not (false). |
| allowEdit | boolean | Required. Indicates whether the object referenced by the object field can be edited by the users assigned to this permission set (true) or not (false). |
| allowRead | boolean | Required. Indicates whether the object referenced by the object field can be viewed by the users assigned to this permission set (true) or not (false). |
| modifyAllRecords | boolean | Required. Indicates whether all records for the object referenced by the object field can be viewed, edited, or deleted by the users assigned to this permission set (true) or not (false), regardless of the sharing settings for the object. Includes private records (records with no parent object). Similar to the Modify All Data user permission, but limited to the individual object level. |
| object | string | Required. The API name of the object (such as Warehouse__c). |
| viewAllFields | string | Indicates whether all fields and field data for the object referenced by the object field can be viewed by the users assigned to this permission set (true) or not (false). Available in API version 63.0 and later. |
| viewAllRecords | boolean | Required. Indicates whether all records for the object referenced by the object field can be viewed by the users assigned to this permission set (true) or not (false), regardless of the sharing settings for the object. This setting includes private records (records with no parent object). The viewAllRecords field is similar to the View All Data user permission but limited to the individual object level. |

## PermissionSetApexPageAccess

[PermissionSetApexPageAccess](#PermissionSetApexPageAccess_title) represents the Visualforce page access for users assigned to a permission set.

| Field | Field Type | Description |
| --- | --- | --- |
| apexPage | string | Required. The Visualforce page name. |
| enabled | boolean | Required. Indicates whether users assigned to this permission set can execute the Visualforce page (true) or not (false). |

## PermissionSetRecordTypeVisibility

[PermissionSetRecordTypeVisibility](#PermissionSetRecordTypeVisibility_title) represents the visibility of record types for this permission set.

| Field | Field Type | Description |
| --- | --- | --- |
| recordType | string | Required. The record type name, for example Account.MyRecordType. |
| visible | boolean | Required. Indicates whether the record type is visible to users assigned to this permission set (true) or not (false). |

## PermissionSetTabSetting

[PermissionSetTabSetting](#PermissionSetTabVisibility_title) represents the tab settings for a permission set.

| Field | Field Type | Description |
| --- | --- | --- |
| tab | string | Required. The tab name. |
| visibility | PermissionSetTabVisibility (enumeration of type string) | Required. Indicates the visibility settings for the tab. Valid values are:Available—The tab is available on the All Tabs page. Individual users can customize their display to make the tab visible in any app.None—The tab isn’t available on the All Tabs page or visible in any apps.Visible—The tab is available on the All Tabs page and appears in the visible tabs for its associated app. Individual users can customize their display to hide the tab or make it visible in other apps. |

## PermissionSetUserPermission

In API version 28.0 and earlier, [PermissionSetUserPermission](#permissionSetUserPermissions_title) represents an app or system permission for a permission set. In API version 29.0 and later, this field retrieves only enabled user permissions. Use one of these elements for each permission.

| Field | Field Type | Description |
| --- | --- | --- |
| enabled | boolean | Required. Indicates whether the permission is enabled (true) or disabled (false). |
| name | string | Required. The name of the permission. |

## PermissionSetServicePresenceStatusAccess

Represents the presence statuses that reps assigned to this profile have access. Available in API version 64.0 and later.

| Field | Field Type | Description |
| --- | --- | --- |
| servicePresenceStatus | string | Required. The name of Service Presence Status. |
| enabled | boolean | Required. Indicates whether the rep assigned to this profile has access to the presence status (true) or not (false). |

## Declarative Metadata Sample Definition

The following is an example of a PermissionSet component.

```

```

The following is an example package.xml manifest used to retrieve the PermissionSet metadata for an organization. When you retrieve permission sets, also retrieve the related components with assigned permissions. For example, to retrieve objectPermissions and fieldPermissions for a custom object, you must also retrieve the CustomObject component.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>Grants all rights needed for an HR administrator to manage employees.</description>
    <label>HR Administration</label>
    <userLicense>Salesforce</userLicense>
    <applicationVisibilities>
        <application>JobApps__Recruiting</application>
        <visible>true</visible>
    </applicationVisibilities>
    <userPermissions>
        <enabled>true</enabled>
        <name>ApiEnabled</name>
    </userPermissions>
    <objectPermissions>
        <allowCreate>true</allowCreate>
        <allowDelete>true</allowDelete>
        <allowEdit>true</allowEdit>
        <allowRead>true</allowRead>
        <viewAllRecords>true</viewAllRecords>
        <modifyAllRecords>true</modifyAllRecords>
        <viewAllFields>true</viewAllFields>
        <object>Job_Request__c</object>
    </objectPermissions>
    <fieldPermissions>
        <editable>true</editable>
        <field>Job_Request__c.Salary__c</field>
        <readable>true</readable>
    </fieldPermissions>
    <pageAccesses>
        <apexPage>Job_Request_Web_Form</apexPage>
        <enabled>true</enabled>
    </pageAccesses>
    <classAccesses>
      <apexClass>Send_Email_Confirmation</apexClass>
      <enabled>true</enabled>
    </classAccesses>
    <tabSettings>
        <tab>Job_Request__c</tab>
        <visibility>Available</visibility>
    </tabSettings>
    <recordTypeVisibilities>
        <recordType>Recruiting.DevManager</recordType>
        <visible>true</visible>
    </recordTypeVisibilities>
</PermissionSet>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Job_Request__c</members>
        <name>CustomTab</name>
    </types>
    <types>
        <members>Job_Request__c</members>
        <name>CustomObject</name>
    </types>
    <types>
        <members>JobApps__Recruiting</members>
        <name>CustomApplication</name>
    </types>
    <types>
        <members>Recruiting.DevManager</members>
        <name>RecordType</name>
    </types>
    <types>
        <members>*</members>
        <name>PermissionSet</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
