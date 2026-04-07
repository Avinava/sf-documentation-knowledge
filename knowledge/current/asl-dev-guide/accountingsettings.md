---
title: "AccountingSettings"
domain: asl-dev-guide
topic: accountingsettings
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:36:51.852Z
estimatedTokens: 535
keywords: [AccountingSettings, settings, Accounting, Subledger, feature, Parent, Manifest, File, Suffix, Directory, Location, Declarative, Metadata, Sample, Definition, Wildcard, Support]
---

> Represents the settings for the Accounting Subledger
			feature.

# AccountingSettings

Represents the settings for the Accounting Subledger feature.

## Parent Type and Manifest Access

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See Settings for more details.

## File Suffix and Directory Location

AccountingSettings values are stored in the AccountingSettings.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

AccountingSettings components are available in API version 57.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enableAccountingSubledger | Field TypebooleanDescriptionIndicates whether Transaction Journal creation is enabled for the organization (true) or not (false). |
| enableAslDataCloud | Field TypebooleanDescriptionRequires Data Cloud and Accounting Subledger access.Indicates whether Data Cloud Runtime for Accounting Subledger feature is enabled for the organization (true) or not (false).This field is available in API version 66.0 and later. |
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

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<AccountingSettings xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableAccountingSubledger>true</enableAccountingSubledger>
	<enableAslDataCloud>true</enableAslDataCloud>
	<enablePaymentMethodAdjust>true</enablePaymentMethodAdjust>
	<enableSkipReversalLogicEnabled>false</enableSkipReversalLogicEnabled>
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
