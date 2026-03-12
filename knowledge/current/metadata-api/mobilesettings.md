---
title: "MobileSettings"
domain: metadata-api
topic: mobilesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.251Z
estimatedTokens: 1802
keywords: [MobileSettings, Represents, organization’s, mobile, settings., extends, Metadata, metadata, inherits, its, fullName, field., Note, Declarative, File, Suffix, Directory, Location, Version, Fields]
---

# MobileSettings

> Represents an organization’s mobile settings. This type extends the Metadata 
        metadata type and inherits its fullName field.

# MobileSettings

Represents an organization’s mobile settings. This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_meta)

#### Note

[MobileSettings](#meta_mobilesettings "Represents an organization’s mobile settings. This type extends the Metadata metadata type and inherits its fullName field.") is no longer available in API versions 25.0 and 26.0.

## Declarative Metadata File Suffix and Directory Location

[MobileSettings](#meta_mobilesettings "Represents an organization’s mobile settings. This type extends the Metadata metadata type and inherits its fullName field.") values are stored in a single file named Mobile.settings in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

Mobile settings are available in API version 27.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| chatterMobile (Removed) | ChatterMobileSettings | The settings for devices running Chatter mobile. Removed in API version 46.0. |
| dashboardMobile (Deprecated) | DashboardMobileSettings | The settings for devices running the mobile dashboards app. |
| enableImportContactFromDevice | boolean | Indicates whether users can import contacts from their mobile device (true) or not (false).Available in API version 47.0 and later. |
| enableLightningOnMobile (Removed) | boolean | Indicates whether the org is enabled for the Salesforce mobile app. Available in API version 47.0 only. Removed in API version 48.0. |
| enableNewSalesforceMobileAppForTablet (Removed) | boolean | Indicates whether the org is enabled for the Salesforce mobile app tablet experience. Removed in API version 56.0. |
| enableNewSalesforceMobileAppForTabletWideScreen (Removed) | boolean | Indicates whether the org is enabled for the Salesforce mobile app widescreen tablet experience. Available in API version 52.0 through 55.0. Removed in API version 56.0. |
| enableOfflineDraftsEnabled | boolean | Indicates whether users can create, edit, and delete records while offline in the Salesforce mobile app (true) or not (false). The default value is true. This option isn’t available if enableS1OfflinePref is set to false.Available in API version 47.0 and later. |
| enablePopulateNameManuallyInToday | boolean | Indicates whether the user’s name is shown on the Today page in the Salesforce mobile app (true) or not (false). The default value is false.Available in API version 47.0 and later. |
| enableS1EncryptedStoragePref2 | boolean | Indicates whether the Salesforce mobile web uses secure and persistent browser caching to improve performance (true) or not (false). The default value is true.Available in API version 47.0 and later. |
| enableS1OfflinePref | boolean | Indicates whether users can access records offline in the Salesforce mobile app (true) or not (false). This option is set to true the first time someone in your org installs one of the Salesforce downloadable apps.Available in API version 47.0 and later. However, offline access isn’t supported in all versions of the downloadable mobile apps. Users must have version 10.0 or later of the Salesforce for Android app or the Salesforce for iOS app. Offline access isn’t available for the Salesforce mobile web. |
| touchMobile (Removed) | TouchMobileSettings | The settings for devices running Salesforce Touch. Removed in API version 46.0. |

## ChatterMobileSettings

These fields are removed in API version 46.0. Represents your organization's Chatter Mobile settings.

| Field | Field Type | Description |
| --- | --- | --- |
| IPadAuthorized | boolean | Indicates whether iPad devices are enabled for Chatter Mobile (true) or not (false). |
| IPhoneAuthorized | boolean | Indicates whether iPhone devices are enabled for Chatter Mobile (true) or not (false). |
| androidAuthorized | boolean | Indicates whether Android devices are enabled for Chatter Mobile (true) or not (false). |
| blackBerryAuthorized | boolean | Indicates whether Blackberry devices are enabled for Chatter Mobile (true) or not (false). |
| enableChatterMobile | boolean | Indicates whether Chatter Mobile has been enabled for your organization (true) or not (false).Setting this field to true enables you to set all the other ChatterMobile settings. If you change this setting from true to false, and also try to change any of the other ChatterMobile settings, your deployment fails with an error. |
| enablePushNotifications | boolean | Indicates whether Chatter push notifications have been enabled for your organization (true) or not (false) |
| sessionTimeout | MobileSessionTimeout (enumeration of type string) | The length of time after which users without activity are prompted to log out or continue working. Valid values are:NeverOneMinuteFiveMinutesTenMinutesThirtyMinutes |

## DashboardMobileSettings

These fields are deprecated. Represents your organization's Mobile Dashboards iPad app settings.

| Field | Field Type | Description |
| --- | --- | --- |
| enableDashboardIPadApp | boolean | Indicates whether Mobile Dashboards iPad app has been enabled for your organization (true) or not (false). |

## TouchMobileSettings

These fields are removed in API version 46.0. Salesforce Touch has been upgraded to the Salesforce mobile app.

| Field | Field Type | Description |
| --- | --- | --- |
| enableTouchBrowserIPad | boolean | Indicates whether your organization has the Salesforce Touch mobile browser app enabled (true) or not (false). |
| enableTouchAppIPad | boolean | Indicates whether your organization has the Salesforce Touch downloadable app enabled (true) or not (false) |

## Declarative Metadata Sample Definition

Here’s a sample mobile.settings metadata file.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<MobileSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableImportContactFromDevice>true</enableImportContactFromDevice>
    <enableOfflineDraftsEnabled>true</enableOfflineDraftsEnabled>
    <enableS1EncryptedStoragePref2>true</enableS1EncryptedStoragePref2>
    <enableS1OfflinePref>true</enableS1OfflinePref>
</MobileSettings>
```

## Related Topics

- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
