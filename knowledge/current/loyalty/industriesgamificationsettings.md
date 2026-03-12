---
title: "IndustriesGamificationSettings"
domain: loyalty
topic: industriesgamificationsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.866Z
estimatedTokens: 400
keywords: [IndustriesGamificationSettings, settings, enable, games, Loyalty, Management, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample, Definition]
---

# IndustriesGamificationSettings

> Represents the settings to enable games in
      Loyalty Management.

# IndustriesGamificationSettings

Represents the settings to enable games in Loyalty Management.

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## File Suffix and Directory Location

IndustriesGamificationSettings values are stored in a single file named IndustriesGamification.settings in the settings folder. The .settings files are different from other named components because there’s only one settings file for each settings component.

## Version

IndustriesGamificationSettings components are available in API version 60.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableGamification | boolean | Indicates whether the capability to offer games to loyalty program members as program reward is enabled (true) or disabled (false) for your org. The default value is false. |

## Declarative Metadata Sample Definition

The following is an example of a IndustriesGamificationSettings component.

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
<IndustriesGamificationSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableGamification>true</enableGamification>
</IndustriesGamificationSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
  <types>
    <members>IndustriesGamification</members>
    <name>Settings</name>
  </types>
  <version>60.0</version>
</Package>
```
