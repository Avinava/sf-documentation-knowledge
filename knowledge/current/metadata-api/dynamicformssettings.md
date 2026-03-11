---
title: "DynamicFormsSettings"
domain: metadata-api
topic: dynamicformssettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:52.104Z
keywords: [DynamicFormsSettings, Parent, Type, Manifest, Access, File, Suffix, Directory, Location, Version, Special, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# DynamicFormsSettings

# DynamicFormsSettings

Represents the settings related to Dynamic Forms.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

DynamicFormsSettings values are stored in the DynamicForms.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

DynamicFormsSettings components are available in API version 58.0 and later.

## Special Access Rules

There are no additional access requirements that are specific to this type.

## Fields

| Field Name | Description |
| --- | --- |
| enableFormsOnMobile | Field TypebooleanDescriptionDetermines whether an org has Dynamic Forms for Mobile (Beta) enabled (true) or not (false).NoteThis feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at Agreements and Terms. |

## Declarative Metadata Sample Definition

The following is an example of a DynamicFormsSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").