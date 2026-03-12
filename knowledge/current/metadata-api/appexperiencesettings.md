---
title: "AppExperienceSettings"
domain: metadata-api
topic: appexperiencesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.737Z
estimatedTokens: 648
keywords: [AppExperienceSettings, settings, app, experience.This, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Declarative, Sample]
---

# AppExperienceSettings

> Represents settings for the app
      experience.This type extends the Metadata metadata type and inherits its
                        fullName field.

# AppExperienceSettings

Represents settings for the app experience.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

AppExperienceSettings values are stored in the .settings file in the settings directory. The .settings files are different from other named components because there is only one settings file for each settings component.

## Version

AppExperienceSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| doesHideAllAppsInAppLauncher | boolean | If set to false (default), all standard and custom apps show up on the App Launcher. If set to true, the admin must select which standard and custom apps to display on the App Launcher. |

## Declarative Metadata Sample Definition

The following is an example of an AppExperienceSettings component.

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the AppExperienceSettings metadata for an organization:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AppExperienceSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <doesHideAllAppsInAppLauncher>false</doesHideAllAppsInAppLauncher>
</AppExperienceSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>AppExperience</members>
        <name>Settings</name>
    </types>
<version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
