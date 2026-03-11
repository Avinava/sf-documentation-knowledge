---
title: "Store and Retrieve Values from the Org Cache"
domain: apex-guide
topic: store-and-retrieve-values-from-the-org-cache
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.415Z
keywords: [Store, Retrieve, Values, Org, Cache, Cache.Org, Methods, Note, Cache.OrgPartition, See]
---

# Store and Retrieve Values from the Org Cache

# Store and Retrieve Values from the Org Cache

Use the Cache.Org and Cache.OrgPartition classes to manage values in the org cache. To manage values in any partition, use the methods in the Cache.Org class. If you’re managing cache values in one partition, use the Cache.OrgPartition methods instead.

## Cache.Org Methods

To store a value in the org cache, call the Cache.Org.put() method and supply a key and value. The key name is in the format namespace.partition.key. For example, for namespace **ns1**, partition **partition1**, and key **orderDate**, the fully qualified key name is ns1.partition1.orderDate.

This example stores a DateTime cache value with the key orderDate. Next, the snippet checks if the orderDate key is in the cache, and if so, retrieves the value from the cache.

```

```

To refer to the default partition and the namespace of the invoking class, omit the namespace.partition prefix and specify the key name.

```

```

The local prefix refers to the namespace of the current org where the code is running. The local prefix refers to the namespace of the current org where the code is running, regardless of whether the org has a namespace defined. If the org has a namespace defined as ns1, the following two statements are equivalent.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The local prefix in an installed managed package refers to the namespace of the subscriber org and not the package’s namespace. The cache put calls are not allowed in a partition that the invoking class doesn’t own.

The put() method has multiple versions (or overloads), and each version takes different parameters. For example, to specify that your cached value can’t be overwritten by another namespace, set the last parameter of this method to true. The following example also sets the lifetime of the cached value (3600 seconds or 1 hour) and makes the value available to any namespace.

```

```

To retrieve a cached value from the org cache, call the Cache.Org.get() method. Because Cache.Org.get() returns an object, we recommend that you cast the returned value to a specific type.

```

```

## Cache.OrgPartition Methods

If you’re managing cache values in one partition, use the Cache.OrgPartition methods instead. After the partition object is obtained, the process of adding and retrieving cache values is similar to using the Cache.Org methods. The Cache.OrgPartition methods are easier to use because you specify only the key name without the namespace and partition prefix.

First, get the org partition and specify the desired partition. The partition name includes the namespace prefix: namespace.partition. You can manage the cached values in that partition by adding and retrieving cache values on the obtained partition object. The following example obtains the partition named myPartition in the myNs namespace. If the cache contains a value with the key BookTitle, this cache value is retrieved. A new value is added with key orderDate and today’s date.

```

```

This example calls the get method on a partition in one expression without assigning the partition instance to a variable.

```

```

#### See Also

-   [*Apex Reference Guide*: Org Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_cache_Org.htm "Apex Reference Guide: Org Class - HTML (New Window)")
    
-   [*Apex Reference Guide*: OrgPartition Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_cache_OrgPartition.htm "Apex Reference Guide: OrgPartition Class - HTML (New Window)")