---
title: "TrialOrgSettings"
domain: metadata-api
topic: trialorgsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:43.276Z
estimatedTokens: 545
keywords: [TrialOrgSettings, Represents, settings, trial, user’s, org., extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix, Directory, Location, Version, Special, Access]
---

# TrialOrgSettings

> Represents the settings in a trial user’s org. This type extends the Metadata metadata type and inherits its
                        fullName field.

# TrialOrgSettings

Represents the settings in a trial user’s org. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

TrialOrgSettings values are stored in the TrialOrg.settings file in the settings directory.The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

TrialOrgsettings is available in API version 48.0 and later.

## Special Access Rules

Access to TrialOrgSettings requires users to complete the checkout flow in Enterprise, Professional, or Essentials editions. For Essentials, you can also access TrialOrgSettings by completing step 7 of the Setup Assistant.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableSampleDataDeleted | boolean | Indicates whether sample data may be deleted on trial orgs (true) or not (false). The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of a TrialOrgSettings component.

```

```

## Wildcard Support in the Manifest File

This metadata type doesn’t support the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<TrialOrgSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableSampleDataDeleted>false</enableSampleDataDeleted>
</TrialOrgSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
