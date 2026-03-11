---
title: "Platform Cache Partitions"
domain: apex-guide
topic: platform-cache-partitions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:43:46.360Z
keywords: [Platform, Cache, Partitions, Packaging, Note, See]
---

# Platform Cache Partitions

# Platform Cache Partitions

Use Platform Cache partitions to improve the performance of your applications. Partitions allow you to distribute cache space in the way that works best for your applications. Caching data to designated partitions ensures that it’s not overwritten by other applications or less-critical data.

To use Platform Cache, first set up partitions using the Platform Cache Partition tool in Setup. Once you’ve set up partitions, you can add, access, and remove data from them using the Platform Cache Apex API.

To access the Partition tool in Setup, enter Platform Cache in the Quick Find box, then select **Platform Cache**.

Use the Partition tool to:

-   Setup a Platform Cache partition with Provider Free capacity.
-   Request trial cache.
-   Create, edit, or delete cache partitions.
-   Allocate the session cache and org cache capacities of each partition to balance performance across apps.
-   View a snapshot of the org’s current cache capacity, breakdown, and partition allocations (in KB or MB).
-   View details about each partition.
-   Make any partition the default partition.

To use Platform Cache, create at least one partition. Each partition has one session cache and one org cache segment and you can allocate separate capacity to each segment. Session cache can be used to store data for individual user sessions, and org cache is for data that any users in an org can access. You can distribute your org’s cache space across any number of partitions. Session and org cache allocations can be zero, or five or greater, and they must be whole numbers. The sum of all partition allocations, including the default partition, equals the Platform Cache total allocation. The total allocated capacity of all cache segments must be less than or equal to the org’s overall capacity.

You can define any partition as the default partition, but you can have only one default partition. When a partition has no allocation, cache operations (such as get and put) are not invoked, and no error is returned.

When performing cache operations within the default partition, you can omit the partition name from the key.

After you set up partitions, you can use Apex code to perform cache operations on a partition. For example, use the Cache.SessionPartition and Cache.OrgPartition classes to put, retrieve, or remove values on a specific partition’s cache. Use Cache.Session and Cache.Org to get a partition or perform cache operations by using a fully qualified key.

## Packaging Platform Cache Partitions

When packaging an application that uses Platform Cache, add any referenced partitions to your packages explicitly. Partitions aren’t pulled into packages automatically, as other dependencies are. Partition validation occurs during run time, rather than compile time. Therefore, if a partition is missing from a package, you don’t receive an error message at compile time.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

If platform cache code is intended for a package, don’t use the default partition in the package. Instead, explicitly reference and package a non-default partition. Any package containing the default partition can’t be deployed.

#### See Also

-   [*Apex Reference Guide*: Partition Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_cache_Partition.htm "Apex Reference Guide: Partition Class - HTML (New Window)")
    
-   [*Apex Reference Guide*: OrgPartition Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_cache_OrgPartition.htm "Apex Reference Guide: OrgPartition Class - HTML (New Window)")
    
-   [*Apex Reference Guide*: SessionPartition Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_cache_SessionPartition.htm "Apex Reference Guide: SessionPartition Class - HTML (New Window)")
    
-   [Metadata API Developer’s Guide: Platform Cache Partition Type](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_platformcachepartition.htm "Metadata API Developer’s Guide: Platform Cache Partition Type - HTML (New Window)")