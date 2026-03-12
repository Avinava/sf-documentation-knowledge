---
title: "RetailExecutionSettings"
domain: metadata-api
topic: retailexecutionsettings
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:44.057Z
estimatedTokens: 586
keywords: [RetailExecutionSettings, Represents, settings, manage, inventory, promotions, planograms, in-store, activities., File, Suffix, Directory, Location, Version, Fields, Declarative, Metadata, Sample, Definition, Wildcard]
---

# RetailExecutionSettings

> Represents settings to manage your inventory, promotions,
      planograms, and in-store activities.

# RetailExecutionSettings

Represents settings to manage your inventory, promotions, planograms, and in-store activities.

This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

In the package manifest, all organization settings metadata types are accessed using the Settings name. See [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type.") for more details.

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

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

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

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
