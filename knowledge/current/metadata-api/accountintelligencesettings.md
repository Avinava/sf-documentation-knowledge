---
title: "AccountIntelligenceSettings"
domain: metadata-api
topic: accountintelligencesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:36.321Z
estimatedTokens: 779
keywords: [AccountIntelligenceSettings, org’s, Account, Intelligence, settings, control, features, easy, sales, reps, accounts, relevant, news, articles, add]
---

# AccountIntelligenceSettings

> Represents an org’s Account Intelligence settings.
			These settings control features that make it easy for sales reps to create accounts, see
			relevant news articles, and add logos to account records.
		This type extends the Metadata metadata type and inherits its
                        fullName field.

# AccountIntelligenceSettings

Represents an org’s Account Intelligence settings. These settings control features that make it easy for sales reps to create accounts, see relevant news articles, and add logos to account records. This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for details.

## File Suffix and Directory Location

AccountIntelligenceSettings values are stored in the AccountIntelligence.settings file in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

AccountIntelligenceSettings is available in API versions 48.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableAccountLogos | boolean | Indicates whether your sales reps can see available company logos (true) or not (false). The logos are for US-based companies only. The default value is false.enableAutomatedAccountFields must be true to use this setting. |
| enableAutomatedAccountFields | boolean | Indicates whether Automated Account Fields is enabled (true) or not (false). The default value is false. |
| enableNewsStories | boolean | Indicates whether News is enabled (true) or not (false). The default value is false.enableAutomatedAccountFields must be true to use this setting. |

## Declarative Metadata Sample Definition

The following is an example of the AccountIntelligence.settings file:

```

```

## Example Package Manifest

The following is an example package manifest used to deploy or retrieve the AccountIntelligence settings metadata:

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AccountIntelligenceSettings xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableAccountLogos>true</enableAccountLogos>
	<enableAutomatedAccountFields>true</enableAutomatedAccountFields>
	<enableNewsStories>true</enableNewsStories>
</AccountIntelligenceSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>AccountIntelligence</members>
		<name>Settings</name>
	</types>
	<version>48.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
