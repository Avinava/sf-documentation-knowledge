---
title: "PicklistSettings"
domain: metadata-api
topic: picklistsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.738Z
estimatedTokens: 693
keywords: [PicklistSettings, Represents, org’s, picklist, settings., settings, control, behavior, picklist., extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix, Directory, Location]
---

# PicklistSettings

> Represents an org’s picklist settings. These
            settings control the behavior of a picklist.
        This type extends the Metadata metadata type and inherits its
                        fullName field.

# PicklistSettings

Represents an org’s picklist settings. These settings control the behavior of a picklist. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

PicklistSettings values are stored in a single file named Picklist.settings in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

Picklist settings are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| isPicklistApiNameEditDisabled | boolean | While true, users, including admins with Customize Application permission, can’t change the API name of a picklist field. Formulas reference a picklist’s API name so that the formula continues to work even if the displayed name value changes. Prevent changes to the API name to protect the references to fields in formulas or during integrations, such as during a data import. The default is false. |

## Declarative Metadata Sample Definition

The following is a sample picklist.settings metadata file.

```

```

The following is an example package.xml manifest that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PicklistSettings xmlns="http://soap.sforce.com/2006/04/metadata">
  <isPicklistApiNameEditDisabled>true</isPicklistApiNameEditDisabled>
</PicklistSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>Picklist</members>
		<name>Settings</name>
	</types>
	<version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
