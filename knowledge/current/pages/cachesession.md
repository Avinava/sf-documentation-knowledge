---
title: "$Cache.Session"
domain: pages
topic: cachesession
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:24.364Z
estimatedTokens: 399
namespace: CacheBuilder
keywords: [$Cache.Session, merge, access, org’s, session, cache, Visualforce, Retrieve, cached, partition’s, referenced, org, Usage, Examples]
---

# $Cache.Session

> A global merge field to access an org’s session cache from a Visualforce page. Retrieve
  cached values from a specified partition’s session cache in the referenced org.

**Namespace:** `CacheBuilder`

# $Cache.Session

A global merge field to access an org’s session cache from a Visualforce page. Retrieve cached values from a specified partition’s session cache in the referenced org.

## Usage

Use {!$Cache.Session} to reference an existing session cache. A session cache consists of cached data that can be reused from one session to the next. Use dot notation to specify the namespace, partition name, or properties of a cached value.

## Examples

This output text component retrieves a cached value from the myPartition partition and myNamespace namespace with the key output.

```

```

If the cached value is a data structure that has properties or methods, like an Apex list or a custom class, you can access the properties with$Cache.Session by using dot notation. For example, this markup invokes the List.size() Apex method if the value of numbersList is declared as a List.

```

```

If you’re using CacheBuilder, qualify the key name with the class that implements the CacheBuilder interface and the literal string \_B\_, in addition to the namespace and partition name. In this example, the class that implements CacheBuilder is called CacheBuilderImpl.

```

```

#### See Also

-   [Cache.Session Class](https://help.salesforce.com/s/articleView?id=platform.cl_about.htm&type=5&language=en_US "Cache.Session Class  - HTML (New Window)")

-   [Cache.CacheBuilder Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_interface_cache_CacheBuilder.htm#apex_interface_cache_CacheBuilder "Cache.CacheBuilder Interface - HTML (New Window)")

## Code Examples

```
<apex:outputText value="{!$Cache.Session.myNamespace.myPartition.output}"/>
```

```
<apex:outputText value="{!$Cache.Session.myNamespace.myPartition.numbersList.size}"/>
```

```
<apex:outputText value="{!$Cache.Session.myNamespace.myPartition.CacheBuilderImpl_B_key1}"/>
```
