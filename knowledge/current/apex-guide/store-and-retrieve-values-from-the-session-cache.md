---
title: "Store and Retrieve Values from the Session Cache"
domain: apex-guide
topic: store-and-retrieve-values-from-the-session-cache
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.776Z
estimatedTokens: 913
namespace: Cache.SessionPartition
keywords: [Store, Retrieve, Values, Session, Cache, Cache.Session, Cache.SessionPartition, classes, manage, values, session, cache., any, partition, class., you’re, managing, cache, instead., Note]
---

# Store and Retrieve Values from the Session Cache

> Use the Cache.Session and Cache.SessionPartition
    classes to manage values in the session cache. To manage values in any partition, use the
    methods in the Cache.Session class. If you’re managing
    cache values in one partition, use the Cache.SessionPartition methods instead.

**Namespace:** `Cache.SessionPartition`

# Store and Retrieve Values from the Session Cache

Use the Cache.Session and Cache.SessionPartition classes to manage values in the session cache. To manage values in any partition, use the methods in the Cache.Session class. If you’re managing cache values in one partition, use the Cache.SessionPartition methods instead.

## Cache.Session Methods

To store a value in the session cache, call the Cache.Session.put() method and supply a key and value. The key name is in the format namespace.partition.key. For example, for namespace **ns1**, partition **partition1**, and key **orderDate**, the fully qualified key name is ns1.partition1.orderDate.

This example stores a DateTime cache value with the key orderDate. Next, the snippet checks if the orderDate key is in the cache, and if so, retrieves the value from the cache.

```

```

To refer to the default partition and the namespace of the invoking class, omit the namespace.partition prefix and specify the key name.

```

```

The local prefix refers to the namespace of the current org where the code is running, regardless of whether the org has a namespace defined. If the org has a namespace defined as ns1, the following two statements are equivalent.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The local prefix in an installed managed package refers to the namespace of the subscriber org and not the package’s namespace. The cache put calls are not allowed in a partition that the invoking class doesn’t own.

The put() method has multiple versions (or overloads), and each version takes different parameters. For example, to specify that your cached value can’t be overwritten by another namespace, set the last parameter of this method to true. The following example also sets the lifetime of the cached value (3600 seconds or 1 hour) and makes the value available to any namespace.

```

```

To retrieve a cached value from the session cache, call the Cache.Session.get() method. Because Cache.Session.get() returns an object, we recommend that you cast the returned value to a specific type.

```

```

## Cache.SessionPartition Methods

If you’re managing cache values in one partition, use the Cache.SessionPartition methods instead. After the partition object is obtained, the process of adding and retrieving cache values is similar to using the Cache.Session methods. The Cache.SessionPartition methods are easier to use because you specify only the key name without the namespace and partition prefix.

First, get the session partition and specify the desired partition. The partition name includes the namespace prefix: namespace.partition. You can manage the cached values in that partition by adding and retrieving cache values on the obtained partition object. The following example obtains the partition named myPartition in the myNs namespace. Next, if the cache contains a value with the key BookTitle, this cache value is retrieved. A new value is added with key orderDate and today’s date.

```

```

This example calls the get method on a partition in one expression without assigning the partition instance to a variable.

```

```

#### See Also

-   [*Apex Reference Guide*: Session Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_cache_Session.htm "Apex Reference Guide: Session Class - HTML (New Window)")

-   [*Apex Reference Guide*: SessionPartition Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_cache_SessionPartition.htm "Apex Reference Guide: SessionPartition Class - HTML (New Window)")

## Code Examples

```
// Add a value to the cache
DateTime dt = DateTime.parse('06/16/2015 11:46 AM');
Cache.Session.put('ns1.partition1.orderDate', dt);
if (Cache.Session.contains('ns1.partition1.orderDate')) {
    DateTime cachedDt = (DateTime)Cache.Session.get('ns1.partition1.orderDate');
}
```

```
Cache.Session.put('orderDate', dt);
if (Cache.Session.contains('orderDate')) {
    DateTime cachedDt = (DateTime)Cache.Session.get('orderDate');
}
```

```
Cache.Session.put('local.myPartition.orderDate', dt);
Cache.Session.put('ns1.myPartition.orderDate', dt);
```

```
// Add a value to the cache with options
Cache.Session.put('ns1.partition1.totalSum', '500', 3600, Cache.Visibility.ALL, true);
```

```
// Get a cached value
Object obj = Cache.Session.get('ns1.partition1.orderDate');
// Cast return value to a specific data type
DateTime dt2 = (DateTime)obj;
```
