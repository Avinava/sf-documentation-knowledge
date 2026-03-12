---
title: "IndustriesSettings"
domain: psc-api
topic: industriessettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:32.250Z
estimatedTokens: 513
keywords: [IndustriesSettings, settings, Sector, Solutions, Cloud, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample, Definition]
---

# IndustriesSettings

> Represents settings for Public Sector Solutions Cloud.

# IndustriesSettings

Represents settings for Public Sector Solutions Cloud.

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## File Suffix and Directory Location

IndustriesSettings are stored in a single file named Industries.settings in the settings directory.

## Version

Industries settings for Public Sector Solutions Cloud are available in API version 57.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableBenefitAndGoalSharingPref | boolean | Indicates whether the benefit and goal sharing feature is enabled for your org. The default is false. Available in editions where Public Sector Solutions is enabled. |
| enableBenefitManagementPreference | boolean | Indicates whether the program and benefit management feature is enabled for your org. The default is false. Available in editions where Public Sector Solutions is enabled. |
| enableCarePlansPreference | boolean | Indicates whether the care plan feature is enabled for your org. The care plan feature lets you create and edit care plans. The default is false. Available in editions where Public Sector Solutions is enabled.This field is available in API version 58.0 and later. |
| enableEnhancedUIForISPref |  | Indicates whether the enhanced interaction note interface feature is enabled for your org. The enhanced interaction note interface is a single guided flow that enables you to seamlessly create meeting notes; add interaction details, attendees, and interest tags; and share the notes with other users. The default is false. Available in editions where Public Sector Solutions is enabled.This field is available in API version 61.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of the Industries.Settings metadata file.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesSettings xmlns="http://soap.sforce.com/2006/04/metadata">
   <enableBenefitAndGoalSharingPref>true</enableMultipleTopicsForShiftsOrgPref>
   <enableBenefitManagementPreference>true</enableMultipleTopicsForShiftsOrgPref>
   <enableCarePlansPreference>true</enableCarePlansPreference>
</IndustriesSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
       <members>Industries</members>
       <name>Settings</name>
   </types>
   <version>57.0</version>
</Package>
```
