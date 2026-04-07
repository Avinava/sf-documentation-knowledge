---
title: "PartyDataModelSettings"
domain: metadata-api
topic: partydatamodelsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:28.300Z
estimatedTokens: 718
keywords: [PartyDataModelSettings, organization’s, party, model, settings, including, options, around, Individual, consent, enablement, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Declarative, Sample, Definition, Wildcard, Support, Manifest]
---

> Represents an organization’s party data model settings,
      including options around the Individual object and consent enablement. This type extends the Metadata metadata type and inherits its fullName field.

# PartyDataModelSettings

Represents an organization’s party data model settings, including options around the Individual object and consent enablement. This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

PartyDataModelSettingsPartyDataModel.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

PartyDataModelSettings

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAutoSelectIndividualOnMerge | boolean | Indicates whether the most recently modified data privacy record for the Individual is retained when merging lead, contact, and person accounts (true) or users must manually determine which data privacy record to retain during the merge process (false). This field has a default value of false. |
| enableConsentManagement | boolean | Indicates whether data protection details are available in records (true) or not (false). This has a default value of true.NoteSetting this field to false purges all data protection details, such as privacy preferences and stored consent forms. |
| enableIndividualAutoCreate | boolean | Deprecated in API version 48.0 and removed in API version 49.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a PartyDataModelSettings

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PartyDataModelSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableAutoSelectIndividualOnMerge>true</enableAutoSelectIndividualOnMerge>
    <enableConsentManagementEnabled>true</enableConsentManagementEnabled>
</PartyDataModelSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>PartyDataModel</members>
        <name>Settings</name>
    </types>
    <version>47.0</version>
</Package>
```

## Related Topics

- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
