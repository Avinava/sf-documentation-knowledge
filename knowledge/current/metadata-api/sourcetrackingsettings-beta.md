---
title: "SourceTrackingSettings (Beta)"
domain: metadata-api
topic: sourcetrackingsettings-beta
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.714Z
keywords: [SourceTrackingSettings, Beta, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# SourceTrackingSettings (Beta)

# SourceTrackingSettings (Beta)

Represents settings for source tracking, so that changes you make in your Developer and Developer Pro sandboxes or local workspace can be tracked. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

SourceTrackingSettings values are stored in the SourceTracking.settings file in the settings folder. The .settings files are different from other named components because there is only one settings file for each settings component.

## Version

SourceTrackingSettings is available in API version 49.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableSourceTrackingSandboxes | boolean | Indicates whether to enable source tracking automatically when Developer or Developer Pro sandboxes are created or refreshed (true) or not (false). The default value is false.If you set enableSourceTrackingSandboxes back to false after it was enabled, a sandbox that is tracking source changes continues to do so until it is refreshed.NoteYou don't need to have the Developer Hub (DevHub) enabled in the same org to enable source tracking.This field applies to production orgs only; in other orgs, this field is ignored. |

## Declarative Metadata Sample Definition

The following is an example of a SourceTrackingSettings component.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").