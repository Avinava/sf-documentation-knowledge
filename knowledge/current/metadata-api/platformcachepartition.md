---
title: "PlatformCachePartition"
domain: metadata-api
topic: platformcachepartition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:41.753Z
estimatedTokens: 881
keywords: [PlatformCachePartition, Represents, partition, Platform, Cache., extends, Metadata, metadata, inherits, its, fullName, field., Important, File, Suffix, Directory, Location, Version, Special, Access]
---

# PlatformCachePartition

> Represents a partition in the Platform Cache. This type extends 
    the Metadata metadata type and inherits its fullName field.

# PlatformCachePartition

Represents a partition in the Platform Cache. This type extends the Metadata metadata type and inherits its fullName field.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_meta)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

## File Suffix and Directory Location

PlatformCachePartition components have the suffix .cachePartition and are stored in the cachePartitions folder.

## Version

PlatformCachePartition components are available in API version 35.0 and later.

## Special Access Rules

The “Author Apex” permission is required to deploy and retrieve PlatformCachePartition components.

## Fields

| Field Name | Field Type | Description |
| --- | --- | --- |
| description | string | Describes the cache partition. |
| isDefaultPartition | boolean | Required. Indicates whether this cache partition is the default partition in your organization (true) or not (false). |
| masterLabel | string | Required. The label of the cache partition that appears in the Salesforce user interface. |
| platformCachePartitionTypes | PlatformCachePartitionType[] | An array of cache types that the partition can store. |

## PlatformCachePartitionType

Contains information about a partition type, including its minimum and allocated capacity.

| Field Name | Field Type | Description |
| --- | --- | --- |
| allocatedCapacity | int | Required. The total storage capacity, in megabytes (MB), that is allocated for the cache type, including free, purchased, and trial cache. Purchased capacity includes organization-wide cache, which can be used in any partition, and namespace-specific cache, which can be used only in partitions associated with a namespace. |
| allocatedPartnerCapacity | int | Required. Free capacity, in megabytes (MB). allocated to Developer Edition orgs for the cache type. Use this capacity with security-reviewed managed packages. Available in API version 51.0 and later. |
| allocatedPurchasedCapacity | int | Required. The amount of namespace-specific purchased storage capacity, in MB, that is allocated for the cache type. |
| allocatedTrialCapacity | int | Required. The amount of trial cache space, in MB, that is allocated for the cache type. |
| cacheType | PlatformCacheType (enumeration of type string) | The type of cache. Valid values are:Session—Session cacheOrganization—Org cache |

## Declarative Metadata Sample Definition

The following is an example of a PlatformCachePartition component.

```

```

The following is an example package.xml that references the previous definition.

```

```

If a namespace is defined in your organization, add the namespace prefix to your partition name. For example:

```

```

To retrieve all cache partitions from your organization, use the wildcard character (\*) as follows.

```

```

## Wildcard Support in the Manifest File

This metadata type supports the wildcard character \* (asterisk) in the package.xml manifest file. For information about using the manifest file, see [Deploying and Retrieving Metadata with the Zip File](atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm "The deploy() and retrieve() calls are used to deploy and retrieve a .zip file. Within the .zip file is a project manifest (package.xml) that lists what to retrieve or deploy, and one or more XML components that are organized into folders.").

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<PlatformCachePartition xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>Custom partition and marked as default.</description>
    <isDefaultPartition>true</isDefaultPartition>
    <masterLabel>myPartition</masterLabel>
    <platformCachePartitionTypes>
   ​​     <​allocatedCapacity>10</​allocatedCapacity>
​​        <​​allo​ca​tedPurchasedCapacity>5</​​allo​ca​tedPurchasedCapacity>
        <cacheType>Session</cacheType>
    </platformCachePartitionTypes>
    <platformCachePartitionTypes>
    ​​    <​allocatedCapacity>5</​allocatedCapacity>
​​        <​​allo​ca​tedPurchasedCapacity>5</​​allo​ca​tedPurchasedCapacity>
        <cacheType>Organization</cacheType>
    </platformCachePartitionTypes>​
</PlatformCachePartition>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>myPartition</members>
        <name>PlatformCachePartition</name>
    </types>
    <version>66.0</version>
</Package>
```

```
<members>Namespace.myPartition</members>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<Package xmlns="http://soap.sforce.com/2006/04/metadata">
    <types>
        <members>*</members>
        <name>PlatformCachePartition</name>
    </types>
    <version>66.0</version>
</Package>
```

## Related Topics

- enumeration (atlas.en-us.api_meta.meta/api_meta/meta_objects_intro.htm)
- Deploying and Retrieving Metadata with the Zip File (atlas.en-us.api_meta.meta/api_meta/file_based_zip_file.htm)
