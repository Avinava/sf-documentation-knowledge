---
title: "Use a Visualforce Global Variable for the Platform Cache"
domain: apex-guide
topic: use-a-visualforce-global-variable-for-the-platform-cache
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.396Z
keywords: [Visualforce, Global, Variable, Platform, Cache, Note]
---

# Use a Visualforce Global Variable for the Platform Cache

# Use a Visualforce Global Variable for the Platform Cache

You can access cached values stored in the session or org cache from a Visualforce page with global variables.

You can use either the $Cache.Session or $Cache.Org global variable. Include the global variable’s fully qualified key name with the namespace and partition name.

This output text component retrieves a session cache value using the global variable’s namespace, partition, and key.

```

```

This example is similar but uses the $Cache.Org global variable to retrieve a value from the org cache.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The remaining examples show how to access the session cache using the $Cache.Session global variable. The equivalent org cache examples are the same except that you use the $Cache.Org global variable instead.

Unlike with Apex methods, you can’t omit the myNamespace.myPartition prefix to reference the default partition in the org.

If a namespace isn’t defined for the org, use local to refer to the org’s namespace.

```

```

The cached value is sometimes a data structure that has properties or methods, like an Apex list or a custom class. In this case, you can access the properties in the $Cache.Session or $Cache.Org expression by using dot notation. For example, this markup invokes the List.size() Apex method if the value of numbersList is declared as a List.

```

```

This example accesses the value property on the myData cache value that is declared as a custom class.

```

```

If you’re using CacheBuilder, qualify the key name with the class that implements the CacheBuilder interface and the literal string \_B\_, in addition to the namespace and partition name. In this example, the class that implements CacheBuilder is called CacheBuilderImpl.

```

```