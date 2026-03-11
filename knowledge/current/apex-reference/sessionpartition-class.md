---
title: "SessionPartition Class"
domain: apex-reference
topic: sessionpartition-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.782Z
keywords: [SessionPartition, Class, Namespace, Usage, Example, See]
---

# SessionPartition Class

# SessionPartition Class

Contains methods to manage cache values in the session cache of a specific partition.

## Namespace

[Cache](atlas.en-us.apexref.meta/apexref/apex_namespace_cache.htm "The Cache namespace contains methods for managing the platform cache.")

## Usage

This class extends [Cache.Partition](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_class_cache_Partition "Base class of Cache.OrgPartition and Cache.SessionPartition. Use the subclasses to manage the cache partition for org caches and session caches.") and inherits all of its non-static methods. Utility methods for creating and validating keys are not supported and can be called only from the Cache.Partition parent class. For a list of Cache.Partition methods, see [Partition Methods](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_methods).

To get a session partition, call Cache.Session.getPartition and pass in a fully qualified partition name, as follows.

```

```

See [Cache Key Format for Partition Methods](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#key_format_section).

## Example

This class is the controller for a sample Visualforce page (shown in the subsequent code sample). The controller shows how to use the methods of Cache.SessionPartition to manage a cache value on a particular partition. The controller takes inputs from the Visualforce page for the partition name, key name for a counter, and initial counter value. The controller contains default values for these inputs. When you click **Rerender** on the Visualforce page, the go() method is invoked and increases the counter by one. When you click **Remove Key**, the counter key is removed from the cache. The counter value gets reset to its initial value when it’s re-added to the cache.

```

```

This is the Visualforce page that corresponds to the SessionPartitionController class.

```

```

#### See Also

-   [*Apex Developer Guide*: Platform Cache](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_cache_namespace_overview.htm "Apex Developer Guide: Platform Cache - HTML (New Window)")