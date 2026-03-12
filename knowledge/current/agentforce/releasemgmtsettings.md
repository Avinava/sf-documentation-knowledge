---
title: "ReleaseMgmtSettings"
domain: agentforce
topic: releasemgmtsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.203Z
estimatedTokens: 450
keywords: [ReleaseMgmtSettings, Represents, settings, enabling, Release, Management, features, Service, Management., Parent, Manifest, Access, File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata]
---

# ReleaseMgmtSettings

> Represents the settings for enabling Release Management
			features of IT Service Management.

# ReleaseMgmtSettings

Represents the settings for enabling Release Management features of IT Service Management.

## Parent Type and Manifest Access

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all the settings metadata types for the org are accessed using the “Settings” name. See Settings for more details.

## File Suffix and Directory Location

ReleaseMgmtSettings values are stored in the ReleaseMgmtSettings.settings file in the settings folder. The .settings files are different from other named components, because there is only one settings file for each settings component.

## Version

ReleaseMgmtSettings components are available in API version 64.0 and later.

## Fields

| Field Name | Description |
| --- | --- |
| enableITSMReleaseMgmt | Field TypebooleanDescriptionIndicates whether the Release Management feature of IT Service Management is enabled (true) or disabled (false) for your org. The default value is false. |
| enableReleaseEventCreation | Field TypebooleanDescriptionIndicates whether the Release Management Event Creation feature is enabled (true) or disabled (false) for your org. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of a ReleaseMgmtSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see Settings. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<ReleaseMgmtSettings xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableITSMReleaseMgmt>true</enableITSMReleaseMgmt>
	<enableReleaseEventCreation>false</enableReleaseEventCreation>
</ReleaseMgmtSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>ReleaseMgmt</members>
        <name>Settings</name>
    </types>
    <version>64.0</version>
</Package>
```
