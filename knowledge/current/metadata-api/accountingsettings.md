---
title: "AccountingSettings"
domain: metadata-api
topic: accountingsettings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:36.488Z
estimatedTokens: 646
keywords: [AccountingSettings, Represents, settings, Accounting, Subledger, feature., Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard]
---

# AccountingSettings

> Represents the settings for the Accounting Subledger
			feature.

# AccountingSettings

Represents the settings for the Accounting Subledger feature.

## Parent Type and Manifest Access

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

## File Suffix and Directory Location

AccountingSettings values are stored in the AccountingSettings.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

AccountingSettings components are available in API version 57.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enableAccountingSubledger | Field TypebooleanDescriptionIndicates whether Transaction Journal creation is enabled for the organization (true) or not (false). |
| enableFinancePeriod | Field TypebooleanDescriptionReserved for internal use. |
| enablePaymentMethodAdjust | Field TypebooleanDescriptionIndicates whether changes to the Payment Method generate adjustments on Transaction Journal records (true) or not (false). |
| enableScheduledJob | Field TypebooleanDescriptionReserved for internal use. |
| enableSkipReversalLogicEnabled | Field TypebooleanDescriptionIndicates whether Skip Reversal Logic is enabled (true) or not (false). |

## Declarative Metadata Sample Definition

The following is an example of an AccountingSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AccountingSettings
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableAccountingSubledger>true</enableAccountingSubledger>
	<enablePaymentMethodAdjust>true</enablePaymentMethodAdjust>
</AccountingSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/​metadata">
	<types>
		<members>Accounting</members>
		<name>Settings</name>
	</types>
	<version>57.0</version>
</Package>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
