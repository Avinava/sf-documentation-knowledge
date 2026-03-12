---
title: "MfgServiceConsoleSettings"
domain: mfg-api-devguide
topic: mfgserviceconsolesettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:55.266Z
estimatedTokens: 353
keywords: [MfgServiceConsoleSettings, settings, access, Service, Console, Manufacturing.This, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version]
---

# MfgServiceConsoleSettings

> Represents the settings to access the Service Console for
      Manufacturing.This type extends the Metadata metadata type and inherits its
                        fullName field.

# MfgServiceConsoleSettings

Represents the settings to access the Service Console for Manufacturing.This type extends the Metadata metadata type and inherits its fullName field.

## File Suffix and Directory Location

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

MfgServiceConsoleSettings values are stored in the MfgServiceConsole.settings file in the settings directory.

## Version

MfgServiceConsoleSettings components are available in API version 56.0 and later.

## Special Access Rules

To use this metadata type, your Salesforce org must have the Manufacturing Cloud license.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableMfgServiceConsole | boolean | Indicates whether Service Console for Manufacturing is enabled in your org (true) or not false).NoteBy default, Service Console for Manufacturing is disabled. |

## Declarative Metadata Sample Definition

The following is an example of a MfgServiceConsoleSettings component.

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
<MfgServiceConsoleSettings
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableMfgServiceConsole>true</enableMfgServiceConsole>
</MfgServiceConsoleSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>MfgServiceConsole</members>
		<name>Settings</name>
	</types>
	<version>56.0</version>
</Package>
```
