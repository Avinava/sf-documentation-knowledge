---
title: "SocialProfileSettings"
domain: metadata-api
topic: socialprofilesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.711Z
keywords: [SocialProfileSettings, File, Suffix, Directory, Location, Version, Fields, Wildcard, Support, Manifest]
---

# SocialProfileSettings

# SocialProfileSettings

Represents org preferences for social media features such as enabling Twitter and Facebook.Represents org preferences for social media features such as enabling Twitter and Facebook. This type extends the Metadata metadata type and inherits the fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

SocialProfileSettings values are stored in a single file named SocialProfile.settings in the settings directory of the corresponding package directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

SocialProfileSettings is available in API versions 47.0 through 58.0.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| isFacebookSocialProfilesDisabled | boolean | Prevents users from accessing Facebook in social CRM (true) or not (false). enableSocialProfiles must be true to enable Facebook social profiles. |
| isLinkedInSocialProfilesDisabled | boolean | Prevents users from accessing LinkedIn in social CRM (true) or not (false). enableSocialProfiles must be true to enable LinkedIn social profiles. |
| isTwitterSocialProfilesDisabled | boolean | Prevents users from accessing Twitter in social CRM (true) or not (false). enableSocialProfiles must be true to enable Twitter social profiles.This setting is permanently set to True because Twitter access was removed in API version 59.0. |
| isYouTubeSocialProfilesDisabled | boolean | Prevents users from accessing YouTube in social CRM (true) or not (false). enableSocialProfiles must be true to enable YouTube social profiles.This setting is permanently set to True because YouTube access was removed in API version 60.0. |
| enableSocialProfiles | boolean | Indicates whether users can access social media profiles in social CRM (true) or not (false). |

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").