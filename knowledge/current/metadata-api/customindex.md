---
title: "CustomIndex"
domain: metadata-api
topic: customindex
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:37.963Z
estimatedTokens: 575
keywords: [CustomIndex, index, increase, speed, queries.This, extends, Metadata, inherits, fullName, File, Suffix, Directory, Location, Version, Special]
---

# CustomIndex

> Represents an index used to increase the speed of queries.This type extends the Metadata metadata type and inherits its
                        fullName field.

# CustomIndex

Represents an index used to increase the speed of queries.This type extends the [Metadata](atlas.en-us.api_meta.meta/api_meta/metadata.htm "The base class for all metadata types. You can’t edit this object. A component is an instance of a metadata type.") metadata type and inherits its fullName field.

## File Suffix and Directory Location

CustomIndex components have the suffix .indx-meta and are stored in the customindexfolder.

## Version

CustomIndex is available in API versions 50.0 and later.

## Special Access Rules

To use this metadata and create a custom index, review [Indexes](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_large_data_volumes_bp.meta/salesforce_large_data_volumes_bp/ldv_deployments_infrastructure_indexes.htm) in Best Practices for Deployments with Large Data Volumes, and then contact Salesforce Customer Support.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| allowNullValues | boolean | Indicates whether null values are allowed in the index (true) or not (false). The default value is false. |
| booleanIndexedValue | boolean | Indicates whether boolean fields are indexed (true) or not (false). Available in API version 61.0 and later. |

## Declarative Metadata Sample Definition

The following is an example of a CustomIndex component.

```

```

## Wildcard Support in the Manifest File

The wildcard character \* (asterisk) in the package.xml manifest file doesn’t apply to metadata types for feature settings. The wildcard applies only when retrieving all settings, not for an individual setting. For details, see [Settings](atlas.en-us.api_meta.meta/api_meta/meta_settings.htm "Represents the organization settings related to a feature. For example, your password policies, session settings and network access controls are all available in the SecuritySettings component type."). For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8" ?>
<CustomIndex xmlns="http://soap.sforce.com/2006/04/metadata">
    <allowNullValues>false</allowNullValues>
    <booleanIndexedValue>true</booleanIndexedValue>
</CustomIndex>
```

## Related Topics

- Metadata (atlas.en-us.api_meta.meta/api_meta/metadata.htm)
- Settings (atlas.en-us.api_meta.meta/api_meta/meta_settings.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
