---
title: "TrailheadSettings"
domain: metadata-api
topic: trailheadsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.882Z
keywords: [TrailheadSettings, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# TrailheadSettings

# TrailheadSettings

Represents an org’s integration with Trailhead for Learning Paths or Enablement programs, including access to enablement sites (formerly myTrailhead).

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

TrailheadSettings values are stored in the Trailhead.settings file in the settings directory. The .settings files are different from other named components because there's only one settings file for each settings component.

## Version

TrailheadSettings components are available in API version 47.0 and later.

## Special Access Rules

To access enablement site (myTrailhead) content, the org must have a Sales Enablement license.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableConfettiEffect | boolean | Indicates whether animated confetti plays on the screen after a user reaches certain milestones, such as completing an Enablement program in the Guidance Center. The default value of this field is false. |
| enableMyTrailheadPref | boolean | Indicates whether the org is connected to an enablement site (myTrailhead). The default value of this field is true. |
| enableTrailheadInLexTerms | boolean | Indicates whether the terms and conditions for showing Trailhead content in Lightning Experience are accepted in your org. The default value of this field is false. |

## Declarative Metadata Sample Definition

The following is an example of a TrailheadSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").