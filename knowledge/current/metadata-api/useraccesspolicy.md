---
title: "UserAccessPolicy"
domain: metadata-api
topic: useraccesspolicy
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:43.481Z
estimatedTokens: 1647
keywords: [UserAccessPolicy, Represents, user, access, policy., Important, Parent, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, UserAccessPolicyAction, UserAccessPolicyFilter, Declarative, Metadata]
---

# UserAccessPolicy

> Represents a user access policy.

# UserAccessPolicy

Represents a user access policy.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## Parent Type

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

UserAccessPolicy components have the suffix .useraccesspolicy and are stored in the useraccesspolicies folder.

## Version

UserAccessPolicy components are available in API version 57.0 and later.

## Special Access Rules

To create or modify user access policies, users must have the Manage User Access Policies permission.

## Fields

| Field Name | Description |
| --- | --- |
| booleanFilter | Field TypestringDescriptionRequired. The logic that determines how your user criteria filters are applied in the user access policy. For example, if you have two user access policy filters with the sortOrder equal to 1 and 2, respectively, the booleanFilter can be 1 AND 2 or 1 OR 2. |
| description | Field TypestringDescriptionDescription of the user access policy. |
| isProtected | Field TypebooleanDescriptionAn auto-generated value that doesn’t impact the behavior of the metadata type. The default value is false. |
| masterLabel | Field TypestringDescriptionRequired. A user-friendly name for the user access policy, which is defined when the user access policy is created. |
| order | Field TypeintDescriptionIndicates the order for which active policy is applied when a user meets the criteria for multiple policies. Must be an integer from 0 to 10,000. Only the active policy with the lowest order value is applied. This field is required only if the status field is set to Active.Available in API version 61.0 and later. |
| status | Field TypeUserAccessPolicyStatus (enumeration of type string)DescriptionRequired. The status of the user access policy.Values are:ActiveCompletedDesignFailedMigrateTestingUpdatingIf you deploy a policy with a status of Active, the status is changed to Design. A Salesforce admin can then set the status to Active by automating the policy in Setup. |
| triggerType | Field TypeUserAccessPolicyTriggerType (enumeration of type string)DescriptionThe type of user record trigger for which this user access policy runs.Values are:Create—The user access policy runs when a user who matches the policy criteria is created.CreateAndUpdate—The user access policy runs when a user who matches the policy criteria is either created or updated.Update—The user access policy runs when a user who matches the policy criteria is updated. |
| userAccessPolicyActions | Field TypeUserAccessPolicyAction[]DescriptionThe actions applied by the user access policy to grant access to or revoke access from an access mechanism. |
| userAccessPolicyFilters | Field TypeUserAccessPolicyFilter[]DescriptionThe filters used to define the users that the user access policy is applied to. |

## UserAccessPolicyAction

Represents an action applied by a user access policy.

| Field Name | Description |
| --- | --- |
| action | Field TypeUserAccessPolicyActionType (enumeration of type string)DescriptionRequired. Indicates whether the user access policy grants or revokes the target access mechanism.Values are:GrantRevoke |
| target | Field TypestringDescriptionRequired. Developer name of the access mechanism that the user access policy applies. |
| type | Field TypeUserAccessPolicyActionTargetType (enumeration of type string)DescriptionRequired. The type of access mechanism that the user access policy applies.Values are:GroupPackageLicensePermissionSetPermissionSetGroupPermissionSetLicenseQueue |

## UserAccessPolicyFilter

Represents a user criteria filter for a user access policy.

| Field Name | Description |
| --- | --- |
| columnName | Field TypestringDescriptionIf type is set to User, this is the user field that your user criteria filter is based on. If you set type to any value other than User, then this field isn’t used. |
| operation | Field TypeUserAccessPolicyFilterOperation (enumeration of type string)DescriptionRequired. The operator of the user criteria filter.Values are:equalsequalsIgnoreCase—Available in API version 59.0 and later.in— Available in API version 58.0 and later.includes—Available in API version 59.0 and later.notEqualsSelect in if you want to reference multiple profiles or roles in the same user criteria filter via the target field. |
| sortOrder | Field TypeintDescriptionRequired. The numeric reference used to identify the specific user criteria filter. |
| target | Field TypestringDescriptionRequired. If type is set to User, then set this field to User as well. If type is set to any other value, then set this field to the developer name of the specific resource used in the user criteria filter. |
| type | Field TypeUserAccessPolicyFilterTargetType (enumeration of type string)DescriptionRequired. The type of resource that the user criteria filter is based on.Values are:GroupPackageLicensePermissionSetPermissionSetGroupPermissionSetLicenseProfileQueueUserUserRole |
| value | Field TypestringDescriptionIf type is set to User, this field is the value of the user field specified in columnName that your user filter is operating on. If you set type to any value other than User, then this field isn’t used. |

## Declarative Metadata Sample Definition

The following is an example of a UserAccessPolicy component.

```

```

To reference multiple profiles or roles, in UserAccessPolicyFilter, set the operator field to in. Then, reference the resources’ developer names in the target field, separated by commas.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<UserAccessPolicy xmlns="http://soap.sforce.com/2006/04/metadata">
    <booleanFilter>1 AND 2</booleanFilter>
    <description>Policy to assign Sales Rep PSG to active Sales Reps.</description>
    <masterLabel>Sales Rep Migration</masterLabel>
    <order>3</order>
    <status>Design</status>
    <triggerType>CreateAndUpdate</triggerType>
    <userAccessPolicyActions>
        <action>Grant</action>
        <target>SalesRepPSG</target>
        <type>PermissionSetGroup</type>
    </userAccessPolicyActions>
    <userAccessPolicyFilters>
        <operation>equals</operation>
        <sortOrder>1</sortOrder>
        <target>SalesRepCustomProfile</target>
        <type>Profile</type>
    </userAccessPolicyFilters>
    <userAccessPolicyFilters>
        <columnName>IsActive</columnName>
        <operation>equals</operation>
        <sortOrder>2</sortOrder>
        <target>User</target>
        <type>User</type>
        <value>true</value>
    </userAccessPolicyFilters>
</UserAccessPolicy>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<UserAccessPolicy xmlns="http://soap.sforce.com/2006/04/metadata">
    <booleanFilter>1</booleanFilter>
    <description>Policy to remove AMER Sales group from employees with one of two roles</description>
    <masterLabel>Remove AMER Sales Group</masterLabel>
    <status>Design</status>
    <userAccessPolicyActions>
        <action>Revoke</action>
        <target>AMERSalesPublicGroup</target>
        <type>Group</type>
    </userAccessPolicyActions>
    <userAccessPolicyFilters>
        <operation>in</operation>
        <sortOrder>1</sortOrder>
        <target>SalesOps,InsideSalesRep</target>
        <type>UserRole</type>
    </userAccessPolicyFilters>
</UserAccessPolicy>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>UserAccessPolicy</name>
    </types>
    <version>61.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
