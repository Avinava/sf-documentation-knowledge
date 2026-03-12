---
title: "AutomatedContactsSettings"
domain: metadata-api
topic: automatedcontactssettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.923Z
estimatedTokens: 928
keywords: [AutomatedContactsSettings, org’s, Einstein, Automated, Contacts, settings, let, new, opportunity, contact, roles, extends, Metadata, inherits, fullName]
---

# AutomatedContactsSettings

> Represents an org’s Einstein Automated Contacts
			settings. These settings let you find new contacts and opportunity contact roles.
		This type extends the Metadata metadata type and inherits its
                        fullName field.

# AutomatedContactsSettings

Represents an org’s Einstein Automated Contacts settings. These settings let you find new contacts and opportunity contact roles. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

AutomatedContactsSettings values are stored in the AutomatedContacts.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

AutomatedContactsSettings is available in API versions 48.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAddContactAutomatically | boolean | Indicates whether new contacts are automatically added from external email accounts (such as Microsoft and Google) to Salesforce (true) or not (false). The default value is false.enableAddContactWithSuggestion must be true to use this setting.NoteWhen this feature is enabled, users do not see new contacts as suggestions. The contacts are added automatically. |
| enableAddContactRoleAutomatically | boolean | Indicates whether opportunity contact roles from external accounts are automatically added to Salesforce (true) or not (false). The default value is false.NoteWhen this feature is enabled, users do not see new contact roles as suggestions. The contact roles are added automatically. |
| enableAddContactRoleWithSuggestion | boolean | Indicates whether opportunity contact roles from external accounts are suggested as new Salesforce opportunity contact roles (true) or not (false). The default value is true. |
| enableAddContactWithSuggestion | boolean | Indicates whether new contacts from external accounts (such as Microsoft and Google) are suggested as new Salesforce contacts (true) or not (false). The default value is true.enableAddContactRoleWithSuggestion must be true to use this setting. |

## Declarative Metadata Sample Definition

The following is an example of the AutomatedContactsSettings.settings file:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the AutomatedContacts settings metadata:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AutomatedContactsSettings xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableAddContactAutomatically>true</enableAddContactAutomatically>
	<enableAddContactRoleAutomatically>true</enableAddContactRoleAutomatically>
	<enableAddContactRoleWithSuggestion>true</enableAddContactRoleWithSuggestion>
	<enableAddContactWithSuggestion>true</enableAddContactWithSuggestion>

</AutomatedContactsSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>AutomatedContactsSettings</members>
		<name>Settings</name>
	</types>
	<version>29.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
