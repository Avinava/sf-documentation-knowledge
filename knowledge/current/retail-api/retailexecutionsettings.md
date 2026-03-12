---
title: "RetailExecutionSettings"
domain: retail-api
topic: retailexecutionsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.067Z
estimatedTokens: 405
keywords: [RetailExecutionSettings, settings, manage, inventory, promotions, planograms, in-store, activities, File, Suffix, Directory, Location, Version, Declarative, Metadata]
---

# RetailExecutionSettings

> Represents settings to manage your inventory, promotions,
      planograms, and in-store activities.

# RetailExecutionSettings

Represents settings to manage your inventory, promotions, planograms, and in-store activities.

This type extends the Metadata metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See Settings for more details.

## File Suffix and Directory Location

RetailExecutionSettings are stored in a single file named RetailExecution.settings in the settings directory.

## Version

RetailExecutionSettings are available in API version 47.0 and later.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| enableProductHierarchy | boolean | Indicates whether Product Hierarchy is enabled for your org (true) or not false).This field is available in API version 53.0 and later. |
| enableRetailExecution | boolean | Indicates whether Retail Execution is enabled for your org (true) or not (false).The default value is false. |
| enableVisitSharing | boolean | Indicates whether Visit Share is enabled for your org (true) or not (false).The default value is false.This field is available in API version 55.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a RetailExecutionSettings component.

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
<RetailExecutionSettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <enableRetailExecution>true</enableRetailExecution>
    <enableProductHierarchy>true</enableProductHierarchy>
    <enableVisitSharing>false</enableVisitSharing>
</RetailExecutionSettings>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>RetailExecution</members>
        <name>Settings</name>
    </types>
    <version>55.0</version>
</Package>
```
