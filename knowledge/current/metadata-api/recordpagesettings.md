---
title: "RecordPageSettings"
domain: metadata-api
topic: recordpagesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:45:54.296Z
keywords: [RecordPageSettings, Declarative, Metadata, File, Suffix, Directory, Location, Version, Fields, Sample, Definition, Example, Package, Manifest, Wildcard, Support, See]
---

# RecordPageSettings

# RecordPageSettings

Represents an org’s record page settings. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## Declarative Metadata File Suffix and Directory Location

RecordPageSettings values are stored in a single file named RecordPage.settings in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

Record page settings are available in API version 47.0 and later.

## Fields

| Field | Field Type | Description |
| --- | --- | --- |
| enableActivityRelatedList | boolean | Indicates whether the default activities view is related lists (true) or activity timeline (false). |
| enableDynamicForms | boolean | Indicates whether Dynamic Forms is enabled for the org. Removed in API version 50.0 and later. |
| enableFullRecordView | boolean | Indicates whether the default record page view is full view (true) or grouped view (false). |

## Declarative Metadata Sample Definition

This is a sample recordpage.settings metadata file.

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the Record Page settings metadata for an organization

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

#### See Also

-   [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.")