---
title: "DocumentChecklistSettings"
domain: metadata-api
topic: documentchecklistsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:38.702Z
estimatedTokens: 637
keywords: [DocumentChecklistSettings, org’s, DocumentChecklistItem, settings, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample, Definition, Package, Manifest]
---

# DocumentChecklistSettings

> Represents an org’s DocumentChecklistItem settings.

# DocumentChecklistSettings

Represents an org’s DocumentChecklistItem settings.

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

DocumentChecklistSettings components are stored in the DocumentChecklist.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

DocumentChecklistSettings components are available in API versions 55.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| dciCustomSharing | boolean | Indicates whether the custom sharing rule for document checklist items is enabled for your org (true) or not (false). The default value is false. |
| deleteDCIWithFiles | boolean | Indicates whether deletion of document checklist items is enabled for your org (true) or not (false). The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of a DocumentChecklistSettings.settings component.

```

```

## Example Package Manifest

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<DocumentChecklistSettings
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<dciCustomSharing>true</dciCustomSharing>
	<deleteDCIWithFiles>true</deleteDCIWithFiles>
</DocumentChecklistSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>DocumentChecklist</members>
		<name>Settings</name>
	</types>
	<version>55.0</version>
</Package>
```

## Related Topics

- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
