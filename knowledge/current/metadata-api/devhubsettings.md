---
title: "DevHubSettings"
domain: metadata-api
topic: devhubsettings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:38.508Z
estimatedTokens: 1324
keywords: [DevHubSettings, Dev, Hub, settings, Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample]
---

# DevHubSettings

> Represents Dev Hub
    settings.

# DevHubSettings

Represents Dev Hub settings.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all org settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

DevHubSettings values are stored in the DevHub.settings file in the settings folder. The .settings files are different from other named components because there is only one settings file for each settings component.

## Version

DevHubSettings are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableALMDevopsCorePref | boolean | Indicates whether the next-generation DevOps Center (Beta) is enabled: true or false. When enabled, you can access the AI-powered, next-generation DevOps Center for change and release management in the org.Available in API version 65.0 and later.NoteenableALMDevopsCorePref is a pilot or beta service that is subject to the Beta Services Terms at Agreements - Salesforce.com or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the Product Terms Directory. Use of this pilot or beta service is at the Customer's sole discretion. |
| enableDevOpsCenterGA | boolean | Indicates whether DevOps Center managed package is enabled: true or false. When enabled, you can install and use the generally available (GA) DevOps Center package in the org. This is an older version of DevOps Center.Available in API version 56.0 and later. |
| enableALMSimpleDeployDataPref | boolean | Indicates whether configuration data migration to a target org is enabled: true or false. When enabled, you can migrate configuration data from a Salesforce org to a target org.To enable enableALMSimpleDeployDataPref, first enable enableALMSimpleDeployPref.Available in API version 65.0 and later.NoteenableALMSimpleDeployDataPref is available as a developer preview. Feature isn’t generally available unless or until Salesforce announces its general availability in documentation or in press releases or public statements. All commands, parameters, and other features are subject to change or deprecation at any time, with or without notice. Don't implement functionality developed with these commands or tools. |
| enableALMSimpleDeployPref | boolean | Indicates whether metadata deployment to a target org is enabled: true or false. When enabled, you can deploy the metadata from a Salesforce org to a target org.Available in API version 65.0 and later.NoteenableALMSimpleDeployPref is a pilot or beta service that is subject to the Beta Services Terms at Agreements - Salesforce.com or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the Product Terms Directory. Use of this pilot or beta service is at the Customer's sole discretion. |
| enablePackaging2 | boolean | Indicates whether unlocked and second-generation managed packaging is enabled: true or false.To enable enablePackaging2, first enable enableScratchOrgManagementPref. |
| enableScratchOrgManagementPref | boolean | Indicates whether Dev Hub is enabled: true or false. When enabled, a Dev Hub allows you to create and manage scratch orgs. |
| enableScratchOrgSnapshotPref | boolean | Indicates whether Scratch Org Snapshots is enabled: true or false. When enabled, you can create snapshots of a fully configured scratch org. A snapshot is a point-in-time copy of a scratch org that you can use to create additional scratch orgs.Available in API version 61.0 and later. |
| enableShapeExportPref | boolean | Indicates whether Org Shape is enabled: true or false. When enabled, you can create org shapes as the basis for scratch orgs.Available in API version 55.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a DevHubSettings component.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DevHubSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enablePackaging2>true</enablePackaging2>
    <enableScratchOrgManagementPref>true</enableScratchOrgManagementPref>
</DevHubSettings>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
