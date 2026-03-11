---
title: "OrgPreferenceSettings"
domain: metadata-api
topic: orgpreferencesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:53.849Z
keywords: [OrgPreferenceSettings, File, Suffix, Directory, Location, Version, Fields, OrganizationSettingsDetail, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# OrgPreferenceSettings

# OrgPreferenceSettings

Removed in API version 48.0. Represents the unique org preference settings in a Salesforce org.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

OrgPreferenceSettings values are stored in the OrgPreference.settings file in the settings directory. The .settings files are different from other named components because there is only one settings file for each settings component.

## Version

OrgPreferenceSettings components are available in API versions 37.0 to 47.0.

OrgPreferenceSettings is deprecated in API version 47.0 and removed in API version 48.0. In API version 47.0, most of the settings supported in the preferences field were made available in the form of Boolean fields on other Settings types. For example, in API version 47.0 and later, you can enable and disable the CompileOnDeploy preference by using the enableCompileOnDeploy field on the ApexSettings type.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| preferences | OrganizationSettingsDetail[] | The preferences associated with the org settings. In the following list of preferences, click hyperlinked preference names to go to the topic for the Settings type that contains that preference. If there is no link, the preference hasn’t been moved to another Settings type.AnalyticsSharingEnable (available in API version 40.0 and later)ApexApprovalLockUnlockAsyncSaveEnabled (available in API versions 40.0 to 46.0)ChatterEnabledCompileOnDeploy (available in API version 43.0 and later)ConsentManagementEnabled (available in API version 45.0 and later)EnhancedEmailEnabledEventLogWaveIntegEnabledLoginForensicsEnabledNetworksEnabled (available in API version 40.0 and later)NotesReservedPref01OfflineDraftsEnabledPathAssistantsEnabledS1DesktopEnabledNoteAfter it is enabled, S1DesktopEnabled can’t be disabled in any version of the API.S1EncryptedStoragePref2S1OfflinePrefScratchOrgManagementPref (available in API version 41.0 and later)SendThroughGmailPrefSocialProfilesEnableTranslation (available in API version 40.0 and later)VoiceEnabledNoteThe VoiceEnabled preference isn’t being moved to another metadata type. If you want to use it in a scratch org in API version 48.0 and later, you can enable it as a scratch org feature. |

## OrganizationSettingsDetail

| Field Name | Field Type | Description |
| --- | --- | --- |
| settingName | string | The name of the setting. For example, “S1EncryptedStoragePref2.” |
| settingValue | boolean | Indicates whether the setting is enabled (true) or not (false). |

## Declarative Metadata Sample Definition

The following is an example of a OrgPreferenceSettings component. The example shows only the preferences values that are supported but not yet available as fields on another Settings type in API version 47.0.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").