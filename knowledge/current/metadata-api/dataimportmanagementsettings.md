---
title: "DataImportManagementSettings"
domain: metadata-api
topic: dataimportmanagementsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:51.686Z
keywords: [DataImportManagementSettings, Parent, Type, Manifest, Access, File, Suffix, Directory, Location, Version, Special, Rules, Fields, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

# DataImportManagementSettings

# DataImportManagementSettings

Represents an org's contact and leads import settings.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

DataImportManagementSettings values are stored in the DataImportManagement.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

DataImportManagementSettings components are available in API version 57.0 and later.

## Special Access Rules

DataImportManagementSettings is available when your org enables the DataImportManagement permission, which is only available for particular editions.

## Fields

| Field Name | Description |
| --- | --- |
| enableEasyImport | Field TypebooleanDescriptionIndicates whether Basic Data Import is enabled (true) or not (false). When true, users are guided step by step to select how they want to import contacts and leads to Salesforce. |

## Declarative Metadata Sample Definition

The following is an example of a DataImportManagementSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").