---
title: "MfgServiceConsoleSettings"
domain: metadata-api
topic: mfgserviceconsolesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:55.414Z
keywords: [MfgServiceConsoleSettings, File, Suffix, Directory, Location, Version, Special, Access, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support, Manifest]
---

# MfgServiceConsoleSettings

# MfgServiceConsoleSettings

Represents the settings to access the Service Console for Manufacturing.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

MfgServiceConsoleSettings values are stored in the MfgServiceConsole.settings file in the settings directory.

## Version

MfgServiceConsoleSettings components are available in API version 56.0 and later.

## Special Access Rules

To use this metadata type, your Salesforce org must have the Manufacturing Cloud license.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableMfgServiceConsole | boolean | Indicates whether Service Console for Manufacturing is enabled in your org (true) or not false).NoteBy default, Service Console for Manufacturing is disabled. |

## Declarative Metadata Sample Definition

The following is an example of a MfgServiceConsoleSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").