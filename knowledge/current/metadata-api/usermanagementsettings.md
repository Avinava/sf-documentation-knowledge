---
title: "UserManagementSettings"
domain: metadata-api
topic: usermanagementsettings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:42.819Z
estimatedTokens: 2364
keywords: [UserManagementSettings, selection, user, management, options, appear, Settings, Setup, extends, Metadata, inherits, fullName, File, Suffix, Directory]
---

# UserManagementSettings

> Represents a selection of user management
            options that appear on the User Management Settings Setup page.
        This type extends the Metadata metadata type and inherits its
                        fullName field.

# UserManagementSettings

Represents a selection of user management options that appear on the User Management Settings Setup page. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

UserMangementSettings are stored in the UserManagement.settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

Manage org-wide settings for certain options. User Management Settings are available in API version 46.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| enableConcealPersonalInfo | boolean | Indicates if personal information fields in user records are hidden from external users (true) or not (false). When this field is set to true, 10 personal information fields are hidden. The default value is false. This field is unavailable for orgs created in Winter ’22 or later.Salesforce recommends that you use the enableEnhancedConcealPersonalInfo field instead of enableConcealPersonalInfo. Before you set the enableEnhancedConcealPersonalInfo field to true, make sure that enableConcealPersonalInfo is set to false. |
| enableContactlessExternalIdentityUsers | boolean | If true and your org has the External Identity license, you can create contactless users. Having users without contact information reduces the overhead of managing customers. Purchase the External Identity license to access the Customer 360 Identity product.The default is false. Available in API version 47.0 and later. |
| enableEnhancedConcealPersonalInfo | boolean | Indicates if personal information fields in user records are hidden from external users (true) or not (false). When this field is set to true, you can choose which fields are classified as personal information and hidden on the User Management Settings Setup page. The default value is false. This field is available in API version 53.0 and later.Before you set the enableEnhancedConcealPersonalInfo field to true, make sure that enableConcealPersonalInfo is set to false. |
| enableEnhancedPermsetMgmt | boolean | If you enable Enhanced Permission Set Component Views (true), you can work with permission sets more easily. For example, when you have large numbers of Apex class assignments for permission sets, you can enable a paginated result set, standard filtering, and sorting. |
| enableEnhancedProfileMgmt | boolean | If you enable Enhanced Profile Lists Views (true), you can quickly view, customize, and edit list data. |
| enableEnhcUiUserAccessPolicies | boolean | Indicates whether you create and manage user access policies through an improved user interface (true) or not (false). The default value is false. If user access policies aren’t enabled, this field has no effect. If user access policies are enabled, this field is automatically set to true, but you can change it to false. Available in API version 60.0 and later. |
| enableNewProfileUI | boolean | If you enable Enhanced Profile User Interface (true), you can use the streamlined, enhanced profile user interface to browse, search, and modify settings. You can use only one user interface at a time. |
| enableProfileFiltering | boolean | With profile filtering enabled (true), you can restrict who sees profile names to the users who require the access for their job roles. If profile filtering is disabled (false), users can see all profiles in a Salesforce org, regardless of which permissions they have.ImportantProfile names are also exposed when users with permissions to perform the following tasks take these actions:Create a tab or record type with a wizard step that includes the assignment of tabs and record types to profiles.Configure a login flow where viewing profile lists is required to make flow associations.Set up delegated admins where looking up profiles is needed to identify assignable profiles.Administer an org as a delegated customer admin.Administer an org as a delegated admin to view and assign profiles of the delegated group.This field is available in API version 50.0 and later. |
| enableRestrictEmailDomains | boolean | Indicates whether the Email Domain Allowlist is visible (true) or hidden (false) in Setup. The default value is false.This field is available in API version 53.0 and later. |
| enableScrambleUserData | boolean | If you enable Let Users Scramble Their User Data (true), users can request that Salesforce remove all their personal data. Because Salesforce can’t delete information, it scrambles their data. Scrambling a user’s data is unrecoverable. So this org-wide setting serves as an extra precaution. If a user requests it, you scramble the data programmatically with the obfuscateUser Apex method. You can use the method, for example, in a custom Apex trigger, workflow, or the Developer Console.This field is available in API version 47.0 and later. |
| enableUserSelfDeactivate | boolean | If you enable User Self Deactivate (true), users can deactivate their Experience Cloud site or Chatter accounts. |
| enhancedPermSetList | boolean | Indicates whether you manage permission sets with an updated user interface on the Permissions Setup page (true) or not (false). The default value is false. Available in API version 63.0 and later. |
| enhancedUserListView | boolean | Indicates whether you manage users with an updated user interface on the Users Setup page (true) or not (false). The default value is false. Available in API version 62.0 and later. |
| enhancedUserRoleListView | boolean | Indicates whether you manage roles with an updated user interface on the Roles Setup page (true) or not (false). The default value is false. Available in API version 63.0 and later. |
| groupSummaryUIEnhancement | boolean | Indicates whether you use an improved user interface to add or remove public group members through the group’s summary page true or not (false). If this field is set to true, you can still manage public group membership through the group’s detail page. The default value is true. Available in API version 62.0 and later. |
| permsetsInFieldCreation | boolean | If true, users can assign field-level security to permission sets instead of to profiles when creating a field on an object, setting field-level security on a field, or changing a field type on a field. The default is false.Available in API version 56.0 and later. |
| psaExpirationUIEnabled | boolean | Indicates if admins can use an updated user interface that includes an assignment expiration for permission sets and permission set groups (true) or not (false). The default value is false. This field is available in API version 52.0 and later. |
| restrictedProfileCloning | boolean | When enabled (true), only permissions accessible to your org are enabled when you clone profiles. When disabled (false), all permissions currently enabled in the source profile are also enabled for the cloned profile, even if your org can't currently access them.This field is available in API version 50.0 and later. |
| userAccessPoliciesEnabled | boolean | Indicates if user access policies are enabled (true) or not (false). With user access policies, you can automate and migrate your users’ assignments to managed package licenses, permission sets, and other access mechanisms based on criteria that you set. The default value is false. This field is available in API version 58.0 and later. |
| userFieldHistoryTracking | boolean | Indicates if user field history tracking is enabled (true) or not (false). With user field history tracking, you can keep track of changes in user fields. The default value is false. This field is available in API version 64.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a UserManagementSettings component.

```

```

The following is an example package.xml manifest that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<UserManagementSettings xmlns="http://soap.sforce.com/2006/04/metadata" 
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <enableConcealPersonalInfo>false</enableConcealPersonalInfo>
    <enableContactlessExternalIdentityUsers>false</enableContactlessExternalIdentityUsers>
    <enableEnhancedConcealPersonalInfo>true</enableEnhancedConcealPersonalInfo>
    <enableEnhancedPermsetMgmt>false</enableEnhancedPermsetMgmt>
    <enableEnhancedProfileMgmt>true</enableEnhancedProfileMgmt>
    <enableNewProfileUI>false</enableNewProfileUI>
    <enableProfileFiltering>false</enableProfileFiltering>
    <enableRestrictEmailDomains>true</enableRestrictEmailDomains>
    <enableScrambleUserData>false</enableScrambleUserData>
    <enableUserSelfDeactivate>false</enableUserSelfDeactivate>
    <enhancedPermSetList>true</enhancedPermSetList>
    <enhancedUserListView>true</enhancedUserListView>
    <enhancedUserRoleListView>true</enhancedUserRoleListView>
    <groupSummaryUIEnhancement>true</groupSummaryUIEnhancement>
    <restrictedProfileCloning>true</restrictedProfileCloning>
    <userAccessPoliciesEnabled>true</userAccessPoliciesEnabled>
</UserManagementSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>UserManagement</members>
        <name>Settings</name>
    </types>
    <version>53.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
