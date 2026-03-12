---
title: "Platform Cache Best Practices"
domain: apex-guide
topic: platform-cache-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:33.739Z
estimatedTokens: 1464
keywords: [Platform, Cache, Best, Practices, greatly, improve, performance, applications., However, it’s, important, follow, guidelines, get, best, cache, performance., general, efficient, few]
---

# Platform Cache Best Practices

> Platform Cache can greatly improve performance in your applications.
      However, it’s important to follow these guidelines to get the best cache performance. In
      general, it’s more efficient to cache a few large items than to cache many small items
      separately. Also be mindful of cache limits to prevent unexpected cache
    evictions.

# Platform Cache Best Practices

Platform Cache can greatly improve performance in your applications. However, it’s important to follow these guidelines to get the best cache performance. In general, it’s more efficient to cache a few large items than to cache many small items separately. Also be mindful of cache limits to prevent unexpected cache evictions.

## Evaluate the Performance Impact

To test whether Platform Cache improves performance in your application, calculate the elapsed time with and without using the cache. Don’t rely on the Apex debug log timestamp for the execution time. Use the System.currentTimeMillis() method instead. For example, first call System.currentTimeMillis() to get the start time. Perform application logic, fetching the data from either the cache or another data source. Then calculate the elapsed time.

```

```

## Handle Cache Misses Gracefully

Ensure that your code handles cache misses by testing cache requests that return null. To help with debugging, add logging information for cache operations.

Alternatively, use the Cache.CacheBuilder interface, which checks for cache misses.

```

```

## Group Cache Requests

When possible, group cache requests, but be aware of caching limits. To help improve performance, perform cache operations on a list of keys rather than on individual keys. For example, if you know which keys are necessary to invoke a Visualforce page or perform a task in Apex, retrieve all keys at once. To retrieve multiple keys, call get(keys) in an initialization method.

## Cache Larger Items

It’s more efficient to cache a few large items than to cache many small items separately. Caching many small items decreases performance and increases overhead, including total serialization size, serialization time, cache commit time, and cache capacity usage.

Don’t add many small items to the Platform Cache within one request. Instead, wrap data in larger items, such as lists. If a list is large, consider breaking it into multiple items. Here’s an example of what to avoid.

```

```

Instead, wrap the data in a few reasonably large items without exceeding the limit on the size of single cached items.

```

```

Another good example of caching larger items is to encapsulate data in an Apex class. For example, you can create a class that wraps session data, and cache an instance of the class rather than the individual data items. Caching the class instance improves overall serialization size and performance.

## Be Aware of Cache Limits

When you add items to the cache, be aware of the following limits.

Cache Partition Size Limit

When the cache partition limit is reached, keys are evicted until the cache is reduced to 100% capacity. Platform Cache uses a least recently used (LRU) algorithm to evict keys from the cache.

Local Cache Size Limit

When you add items to the cache, make sure that you are not exceeding local cache limits within a request. The local cache limit for the session cache is 500 KB and 1,000 KB for the org cache. If you exceed the local cache limit, items can be evicted from the local cache before the request has been committed. This eviction can cause unexpected misses and long serialization time and can waste resources.

Single Cached Item Size Limit

The size of individual cached items is limited to 100 KB. If the serialized size of an item exceeds this limit, the Cache.ItemSizeLimitExceededException exception is thrown. It’s a good practice to catch this exception and reduce the size of the cached item.

## Use the Cache Diagnostics Page (Sparingly)

To determine how much of the cache is used, check the Platform Cache Diagnostics page. To reach the Diagnostics page:

1.  Make sure that Cache Diagnostics is enabled for the user (on the User Detail page).
2.  On the Platform Cache Partition page, click the partition name.
3.  Click the link to the Diagnostics page for the partition.

The Diagnostics page provides valuable information, including the capacity usage, keys, and serialized and compressed sizes of the cached items. The session cache and org cache have separate diagnostics pages. The session cache diagnostics are per session, and they don’t provide insight across all active sessions.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Generating the diagnostics page gathers all partition-related information and is an expensive operation. Use it sparingly.

## Minimize Expensive Operations

Consider the following guidelines to minimize expensive operations.

-   Use Cache.Org.getKeys() and Cache.Org.getCapacity() sparingly. Both methods are expensive, because they traverse all partition-related information looking for or making calculations for a given partition.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

    #### Note

    Cache.Session usage is not expensive.

-   Avoid calling the contains(key) method followed by the get(key) method. If you intend to use the key value, simply call the get(key) method and make sure that the value is not equal to null.
-   Clear the cache only when necessary. Clearing the cache traverses all partition-related cache space, which is expensive. After clearing the cache, your application will likely regenerate the cache by invoking database queries and computations. This regeneration can be complex and extensive and impact your application’s performance.

#### See Also

-   [Platform Cache Limits](atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_limits.htm "These limits apply when using Platform Cache.")

-   [*Apex Reference Guide*: CacheBuilder Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_cache_CacheBuilder.htm "Apex Reference Guide: CacheBuilder Interface - HTML (New Window)")

## Code Examples

```apex
long startTime = System.currentTimeMillis();
// Your code here
long elapsedTime = System.currentTimeMillis() - startTime;
System.debug(elapsedTime);
```

```apex
public class CacheManager {
    private Boolean cacheEnabled;
        
    public void CacheManager() {
        cacheEnabled = true;
    }
    
    public Boolean toggleEnabled() { // Use for testing misses
        cacheEnabled = !cacheEnabled;
        return cacheEnabled;
    }

    public Object get(String key) {
        if (!cacheEnabled) return null;
        Object value = Cache.Session.get(key);
        if (value != null) System.debug(LoggingLevel.DEBUG, 'Hit for key ' + key);
        return value;
    }

    public void put(String key, Object value, Integer ttl) {
        if (!cacheEnabled) return;
        Cache.Session.put(key, value, ttl);
        // for redundancy, save to DB
        System.debug(LoggingLevel.DEBUG, 'put() for key ' + key);
    }

    public Boolean remove(String key) {
        if (!cacheEnabled) return false;
        Boolean removed = Cache.Session.remove(key);
        if (removed) { 
            System.debug(LoggingLevel.DEBUG, 'Removed key ' + key);
            return true;
        } else return false;
    }

}
```

```apex
// Don't do this!

public class MyController {

    public void initCache() {
        List<Account> accts = [SELECT Id, Name, Phone, Industry, Description FROM 
            Account limit 1000];
        for (Integer i=0; i<accts.size(); i++) {
            Cache.Org.put('acct' + i, accts.get(i));    
        }
    }
}
```

```apex
// Do this instead.
        
public class MyController {

public void initCache() {
    List<Account> accts = [SELECT Id, Name, Phone, Industry, Description FROM 
        Account limit 1000];
    Cache.Org.put('accts', accts);    
    }
}
```

## Related Topics

- Platform Cache Limits (atlas.en-us.apexcode.meta/apexcode/apex_platform_cache_limits.htm)
