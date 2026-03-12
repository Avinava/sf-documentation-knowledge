---
title: "WarrantyLifeCycleMgmtSettings"
domain: mfg-api-devguide
topic: warrantylifecyclemgmtsettings
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:55.109Z
estimatedTokens: 384
keywords: [WarrantyLifeCycleMgmtSettings, settings, control, Warranty, Administration, org, File, Suffix, Directory, Location, Version, Declarative, Metadata, Sample, Definition]
---

# WarrantyLifeCycleMgmtSettings

> Represents settings that control the Warranty Administration for your
      org.

# WarrantyLifeCycleMgmtSettings

Represents settings that control the Warranty Administration for your org.

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## File Suffix and Directory Location

WarrantyLifeCycleMgmtSettings values are stored in the WarrantyLifecycleMgmt.settings file in the settings directory.

## Version

WarrantyLifeCycleMgmtSettings components are available in API version 54.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableWarrantyLCMgmt | boolean | Indicates whether warranty life-cycle management is enabled in your org (true) or not false). |

## Declarative Metadata Sample Definition

The following is an example of WarrantyLifeCycleMgmtSettings component.

```

```

The following is an example package.xml that references the previous definition.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see Deploying and Retrieving Metadata with the Zip File.

#### See Also

-   [Manufacturing Cloud: Manage Warranties for Your Products and Assets](https://help.salesforce.com/s/articleView?id=ind.mfg_for_service_warranty_admin.htm&type=5&language=en_US "Manufacturing Cloud: Manage Warranties for Your Products and Assets - HTML (New Window)")

## Code Examples

```
<!--
   ~ Copyright 2022 salesforce.com, inc.
   ~ All Rights Reserved
   ~ Company Confidential
   -->
<WarrantyLifecycleMgmtSettings
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<enableWarrantyLCMgmt>true</enableWarrantyLCMgmt>
</WarrantyLifecycleMgmtSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<!--
   ~ Copyright 2022 salesforce.com, inc.
   ~ All Rights Reserved
   ~ Company Confidential
   -->
<Package
	xmlns="http://soap.sforce.com/2006/04/metadata">
	<types>
		<members>WarrantyLifecycleMgmt</members>
		<name>Settings</name>
	</types>
	<version>54.0</version>
</Package>
```
