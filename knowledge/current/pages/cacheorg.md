---
title: "$Cache.Org"
domain: pages
topic: cacheorg
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.361Z
estimatedTokens: 392
namespace: CacheBuilder
keywords: [$Cache.Org, merge, access, org, cache, Visualforce, Retrieve, cached, partition’s, referenced, Usage, Examples]
---

# $Cache.Org

> A global merge field to access an org cache from a Visualforce page. Retrieve cached
  values from a specified partition’s org cache in the referenced org.

**Namespace:** `CacheBuilder`

# $Cache.Org

A global merge field to access an org cache from a Visualforce page. Retrieve cached values from a specified partition’s org cache in the referenced org.

## Usage

Use {!$Cache.Org} to reference an existing org cache. An org cache consists of data that’s shared across the org. Use dot notation to specify the namespace, partition name, or properties of a cached value.

## Examples

This output text component retrieves a cached value from the myPartition partition and myNamespace namespace with the key output.

```

```

If the cached value is a data structure that has properties or methods, like an Apex list or a custom class, you can access the properties with$Cache.Org by using dot notation. For example, this markup invokes the List.size() Apex method if the value of numbersList is declared as a List.

```

```

If you’re using CacheBuilder, qualify the key name with the class that implements the CacheBuilder interface and the literal string \_B\_, in addition to the namespace and partition name. In this example, the class that implements CacheBuilder is called CacheBuilderImpl.

```

```

#### See Also

-   [Cache.Org Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_class_cache_Org.htm#apex_class_cache_Org.htm "Cache.Org Class  - HTML (New Window)")

-   [Cache.CacheBuilder Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_interface_cache_CacheBuilder.htm#apex_interface_cache_CacheBuilder "Cache.CacheBuilder Interface - HTML (New Window)")

## Code Examples

```
<apex:outputText value="{!$Cache.Org.myNamespace.myPartition.output}"/>
```

```
<apex:outputText value="{!$Cache.Org.myNamespace.myPartition.numbersList.size}"/>
```

```
<apex:outputText value="{!$Cache.Org.myNamespace.myPartition.CacheBuilderImpl_B_key1}"/>
```
