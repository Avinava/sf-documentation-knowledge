---
title: "InvocableActionSettings"
domain: metadata-api
topic: invocableactionsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:40.654Z
estimatedTokens: 650
keywords: [InvocableActionSettings, Represents, org’s, invocable, action, settings, such, whether, partial, save, allowed.This, extends, Metadata, metadata, inherits, its, fullName, field., File, Suffix]
---

# InvocableActionSettings

> Represents the org’s invocable action
      settings, such as whether partial save is allowed.This type extends the Metadata metadata type and inherits its
                        fullName field.

# InvocableActionSettings

Represents the org’s invocable action settings, such as whether partial save is allowed.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

InvocableActionSettings values are stored in the InvocableAction.settings file in the settings directory. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

InvocableActionSettings components are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| isPartialSaveAllowed | boolean | Indicates whether partial save is enabled for most invocable actions that are invoked via REST API and executed in bulk. When the value is true, Salesforce tries three times to execute invocable actions that run successfully and rolls back only the invocable actions that fail to execute. This functionality is called partial save. If the field is set to false, if one invocable action fails, Salesforce rolls back other invocable actions in the same transaction and the entire transaction fails.Corresponds to the Enable Partial Save for Invocable Actions critical update. |

## Declarative Metadata Sample Definition

The following is an example of the InvocableAction.settings file.

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
<InvocableActionSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <isPartialSaveAllowed>false</isPartialSaveAllowed>
</InvocableActionSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>InvocableAction</members>
		<name>Settings</name>
	</types>
	<version>47.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
