---
title: "SharingSettings"
domain: metadata-api
topic: sharingsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:42.242Z
estimatedTokens: 2015
keywords: [SharingSettings, organization’s, sharing, visibility, data, access, settings, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location]
---

# SharingSettings

> Represents an organization’s sharing, visibility,
      and data access settings. This type extends the Metadata metadata type and inherits its
                        fullName field.

# SharingSettings

Represents an organization’s sharing, visibility, and data access settings. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

SharingSettings values are stored in the Sharing.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

SharingSettings is available in API version 47.0 and later.

## Special Access Rules

To use SharingSettings, you need the Manage Sharing permission.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| deferGroupMembership | boolean | Indicates whether group membership calculations are suspended (true) or not (false). This field has a default value of false. This field is available in API version 49.0 and later.ImportantThe defer sharing calculation feature isn't enabled by default. To enable it for your Salesforce org, contact Salesforce Customer Support.When you change the value of this field from true to false, group membership is automatically recalculated. Sharing rules are also automatically recalculated, unless the deferSharingRules field is set to true prior to modifying deferGroupMembership. Depending on your org, these recalculations can take a significant amount of time to complete.If the deferGroupMembership field is set to true, you can’t change the value of deferSharingRules. Sharing rule calculations are suspended regardless of the value of deferSharingRules. |
| deferSharingRules | boolean | Indicates whether sharing rule calculations are suspended (true) or not (false). This field has a default value of false. This field is available in API version 49.0 and later.ImportantThe defer sharing calculation feature isn't enabled by default. To enable it for your Salesforce org, contact Salesforce Customer Support.When you change the value of this field from true to false, sharing rules are automatically recalculated. Depending on your org, this recalculation can take a significant amount of time to complete.If the deferGroupMembership field is set to true, you can’t change the value of deferSharingRules. Sharing rule calculations are suspended regardless of the value of deferSharingRules. |
| enableAccountRoleOptimization | boolean | Indicates whether person roles are assigned to new site users in accounts without existing users (true) or if regular site roles are created for new users (false). This field has a default value of false. |
| enableAssetSharing | boolean | Indicates whether sharing is enabled for assets (true) or asset access is determined by the parent object’s sharing rules (false). This field has a default value of false. |
| enableCommunityUserVisibility | boolean | Indicates whether site users in the same site can see each other regardless of the organization-wide defaults (true) or not (false). This field has a default value of false. In orgs created in API version 47.0 and later, this setting doesn’t apply to guest users. |
| enableExternalSharingModel | boolean | Indicates whether the external sharing model is enabled (true) or not (false). This field has a default value of true if Salesforce Experiences are enabled, and a default value of false if not. To use this field, you need the Customize Application permission. |
| enableManagerGroups | boolean | Indicates whether users can share records with their managers and manager subordinates groups (true) or not (false). This field has a default value of false. To use this field, you need the View and Manage Users permission. |
| enableManualUserRecordSharing | boolean | Indicates whether users can share their own user record (true) or not (false). This field has a default value of false. |
| enablePartnerSuperUserAccess | boolean | Indicates whether you can grant super user access to partners in sites (true) or not (false). This field has a default value of false. To use this field, you need the Customize Application permission |
| enablePortalUserCaseSharing | boolean | Indicates whether portal users can access related contacts for cases that they own (true) or not (false). This field has a default value of false. |
| enablePortalUserVisibility | boolean | Indicates whether portal users in the same customer or partner portal account can see each other regardless of the organization-wide defaults (true) or not (false). This field has a default value of false. To enable this field, contact Salesforce Support. |
| enableRemoveTMGroupMembership | boolean | Removes group membership info for the original territory management feature after migrating to Sales Territories when set to true. This field has a default value of false. Once this field is set to true, it can't be set to false again. |
| enableRestrictAccessLookupRecords | boolean | Indicates whether users must have read access to a record to see the record’s name in lookup and system fields (true) or not (false). This field has a default value of true in Salesforce orgs created in Spring ’20 or later and a default value of false in all other orgs. This field is available in API version 48.0 and later. |
| enableSecureGuestAccess | boolean | When true, guest users have org-wide defaults set to Private. To share records with them, you must use guest user sharing rules.As of API version 50.0, this field's value is always true, regardless of the value that you set. Changing its value has no effect on Salesforce, even if it reads false.This change applies retroactively back to API version 47.0, when this field was first introduced. Previously, in API version 47.0 to 49.0, this field indicated whether guest users’ record access is secured (true) or not (false), and the field's default value was false. Now, in all API versions, this field's value is always true, even if it reads false. |
| enableStandardReportVisibility | boolean | Indicates whether users can view reports based on standard report types that may expose data of users to whom they don't have access (true) or not (false). This field has a default value of false. |
| enableTerritoryForecastManager | boolean | Indicates whether forecast managers can act as delegated administrators for territories below them in the hierarchy (true) or not (false). This field has a default value of false. |

## Declarative Metadata Sample Definition

The following is an example of a SharingSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<SharingSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <deferGroupMembership>false</deferGroupMembership>
    <deferSharingRules>false</deferSharingRules>
    <enableAccountRoleOptimization>false</enableAccountRoleOptimization>
    <enableAssetSharing>false</enableAssetSharing>
    <enableCommunityUserVisibility>false</enableCommunityUserVisibility>
    <enableExternalSharingModel>true</enableExternalSharingModel>
    <enableManagerGroups>false</enableManagerGroups>
    <enableManualUserRecordSharing>true</enableManualUserRecordSharing>
    <enablePartnerSuperUserAccess>false</enablePartnerSuperUserAccess>
    <enablePortalUserCaseSharing>false</enablePortalUserCaseSharing>
    <enablePortalUserVisibility>true</enablePortalUserVisibility>
    <enableRemoveTMGroupMembership>false</enableRemoveTMGroupMembership>
    <enableRestrictAccessLookupRecords>true</enableRestrictAccessLookupRecords>
    <enableSecureGuestAccess>true</enableSecureGuestAccess>
    <enableStandardReportVisibility>false</enableStandardReportVisibility>
    <enableTerritoryForecastManager>false</enableTerritoryForecastManager>
</SharingSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>Sharing</members>
        <name>Settings</name>
    </types>   
    <version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
