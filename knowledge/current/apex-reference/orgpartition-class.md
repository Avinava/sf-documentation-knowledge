---
title: "OrgPartition Class"
domain: apex-reference
topic: orgpartition-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.718Z
keywords: [OrgPartition, Class, Namespace, Usage, Example, Note, See]
---

# OrgPartition Class

# OrgPartition Class

Contains methods to manage cache values in the org cache of a specific partition. Unlike the session cache, the org cache is not tied to any session. It’s available to the org across requests and to all users.

## Namespace

[Cache](atlas.en-us.apexref.meta/apexref/apex_namespace_cache.htm "The Cache namespace contains methods for managing the platform cache.")

## Usage

This class extends [Cache.Partition](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_class_cache_Partition "Base class of Cache.OrgPartition and Cache.SessionPartition. Use the subclasses to manage the cache partition for org caches and session caches.") and inherits all its non-static methods. Utility methods for creating and validating keys aren’t supported and can be called only from the Cache.Partition parent class. For a list of Cache.Partition methods, see [Partition Methods](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_methods).

To get an org partition, call Cache.Org.getPartition and pass in a fully qualified partition name, as follows.

```

```

See [Cache Key Format for Partition Methods](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#key_format_section).

The org cache supports concurrent reads and writes across multiple simultaneous Apex transactions, but the results can be indeterminate. See [Platform Cache Considerations](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_platform_cache_limitations.htm) in the Apex Developer Guide.

Org cache operations are atomic transactions. If the Apex request that the cache operations run in fails, then all cache operations in that request are rolled back. See [Platform Cache Internals](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_platform_cache_internals.htm) in the Apex Developer Guide.

## Example

This class is the controller for a sample Visualforce page (shown in the subsequent code sample). The controller shows how to use the methods of Cache.OrgPartition to manage a cache value on a particular partition. The controller takes inputs from the Visualforce page for the partition name, key name for a counter, and initial counter value. The controller contains default values for these inputs. When you click **Rerender** on the Visualforce page, the go() method is invoked and increases the counter by one. When you click **Remove Key**, the counter key is removed from the cache. The counter value gets reset to its initial value when it’s re-added to the cache.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

If another user logs in and runs this sample, the user gets the cache values that were last added or updated by the previous user. For example, if the counter value was five, the next user sees the counter value as increased to six.

```

```

This is the Visualforce page that corresponds to the OrgPartitionController class.

```

```

#### See Also

-   [*Apex Developer Guide*: Platform Cache](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_cache_namespace_overview.htm "Apex Developer Guide: Platform Cache - HTML (New Window)")