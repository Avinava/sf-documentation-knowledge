---
title: "IndustriesSettings"
domain: nonprofit-cloud
topic: industriessettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:01.276Z
estimatedTokens: 517
keywords: [IndustriesSettings, settings, Grantmaking, File, Suffix, Directory, Location, Version, Special, Access, Rules, Declarative, Metadata, Sample, Definition]
---

# IndustriesSettings

> Represents the settings for Grantmaking

# IndustriesSettings

Represents the settings for Grantmaking

This type extends the metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name.

## File Suffix and Directory Location

IndustriesSettings are stored in a single file named Industries.settings in the settings directory.

## Version

Industries settings for Grantmaking are available in API version 59.0 and later.

## Special Access Rules

Unless noted otherwise, these settings are available only if the Grantmaking license is enabled, Grantmaking is enabled, and the Manage Application system permission is assigned to users.

## Fields

Industries settings for Grantmaking are available in API version 59.0 and later.

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableCompliantDataSharingForBudget | boolean | Indicates whether the Compliant Data Sharing feature is enabled for the Budget object. The default is false. Available only if the Grantmaking license is enabled and Grantmaking is enabled. |
| enableCompliantDataSharingForIndividualApplication | boolean | Indicates whether the Compliant Data Sharing feature is enabled for the Individual Application object. The default is false. Available only if the Grantmaking license is enabled and Grantmaking is enabled. |
| enableCompliantDataSharingForFundingAward | boolean | Indicates whether the Compliant Data Sharing feature is enabled for the Funding Award object. The default is false. Available only if the Grantmaking license is enabled and Grantmaking is enabled. |
| enableGrantmaking | boolean | Indicates whether the Grantmaking feature is enabled. The default is false. This option can’t be disabled (false) once it’s enabled (true). Only requires that the Grantmaking license is enabled in the org. |

## Declarative Metadata Sample Definition

The following is an example of an Industries.Settings metadata file.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<IndustriesSettings xmlns="http://soap.sforce.com/2006/04/metadata">
  <enableGrantmaking>true</enableGrantmaking>
	<enableCompliantDataSharingForBudget>true</enableCompliantDataSharingForBudget>
   <enableCompliantDataSharingForIndividualApplication>true</enableCompliantDataSharingForIndividualApplication>
   <enableCompliantDataSharingForFundingAward>true</enableCompliantDataSharingForFundingAward>
</IndustriesSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
   <types>
       <members>Industries</members>
       <name>Settings</name>
   </types>
   <version>54.0</version>
</Package>
```
