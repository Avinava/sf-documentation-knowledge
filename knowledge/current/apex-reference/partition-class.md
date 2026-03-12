---
title: "Partition Class"
domain: apex-reference
topic: partition-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.053Z
estimatedTokens: 7878
namespace: Cache.OrgPartition
keywords: [Partition, Base, Cache.OrgPartition, Cache.SessionPartition, subclasses, manage, cache, org, caches, session, Key, setOfKeys, Usage, createFullyQualifiedKey, createFullyQualifiedPartition]
---

# Partition Class

> Base class of Cache.OrgPartition and Cache.SessionPartition. Use the subclasses to manage the cache partition for org
      caches and session caches.

**Namespace:** `Cache.OrgPartition`

# Partition Class

Base class of Cache.OrgPartition and Cache.SessionPartition. Use the subclasses to manage the cache partition for org caches and session caches.

## Namespace

[Cache](atlas.en-us.apexref.meta/apexref/apex_namespace_cache.htm "The Cache namespace contains methods for managing the platform cache.")

## Cache Key Format for Partition Methods

After you obtain the partition object (an instance of Cache.OrgPartition or Cache.SessionPartition), the methods to add, retrieve, and manage the cache values in a partition take the key name. The key name that you supply to these methods (get(), put(), remove(), and contains()) doesn’t include the namespace.partition prefix.

-   **[Partition Methods](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_methods)**


#### See Also

-   [OrgPartition Class](atlas.en-us.apexref.meta/apexref/apex_class_cache_OrgPartition.htm#apex_class_cache_OrgPartition "Contains methods to manage cache values in the org cache of a specific partition. Unlike the session cache, the org cache is not tied to any session. It’s available to the org across requests and to all users.")

-   [SessionPartition Class](atlas.en-us.apexref.meta/apexref/apex_class_cache_SessionPartition.htm#apex_class_cache_SessionPartition "Contains methods to manage cache values in the session cache of a specific partition.")

-   [*Apex Developer Guide*: Platform Cache](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_cache_namespace_overview.htm "Apex Developer Guide: Platform Cache - HTML (New Window)")


## Partition Methods

The following are methods for Partition.

-   **[contains(key)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_contains)**
    Returns true if the cache partition contains a cached value corresponding to the specified key.
-   **[contains(setOfKeys)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_partition_contains_2)**
    Returns true if the cache partition contains values for a specified set of keys.
-   **[createFullyQualifiedKey(namespace, partition, key)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_createFullyQualifiedKey)**
    Generates a fully qualified key from the passed-in key components. The format of the generated key string is namespace.partition.key.
-   **[createFullyQualifiedPartition(namespace, partition)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_createFullyQualifiedPartition)**
    Generates a fully qualified partition name from the passed-in namespace and partition. The format of the generated partition string is namespace.partition.
-   **[get(key)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_get)**
    Returns the cached value corresponding to the specified key from the cache partition.
-   **[get(keys)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_get_3)**
    Returns the cached values corresponding to the specified set of keys from the cache partition.
-   **[get(cacheBuilder, key)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_get_2)**
    Returns the cached value corresponding to the specified key from the partition cache. Use this method if your cached value is a class that implements the CacheBuilder interface.
-   **[getAvgGetSize()](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_getAvgGetSize)**
    Returns the average item size of all the keys fetched from the partition, in bytes.
-   **[getAvgGetTime()](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_getAvgGetTime)**
    Returns the average time taken to get a key from the partition, in nanoseconds.
-   **[getAvgValueSize()](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_getAvgValueSize)**
    **Deprecated and available only in API versions 49.0 and earlier.** Returns the average item size for keys in the partition, in bytes.
-   **[getCapacity()](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_getCapacity)**
    Returns the percentage of cache used of the total capacity for this partition.
-   **[getKeys()](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_getKeys)**
    Returns a set of all keys that are stored in the cache partition and visible to the invoking namespace.
-   **[getMaxGetSize()](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_getMaxGetSize)**
    Returns the maximum item size of all the keys fetched from the partition, in bytes.
-   **[getMaxGetTime()](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_getMaxGetTime)**
    Returns the maximum time taken to get a key from the partition, in nanoseconds.
-   **[getMaxValueSize()](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_getMaxValueSize)**
    **Deprecated and available only in API versions 49.0 and earlier.** Returns the maximum item size for keys in the partition, in bytes.
-   **[getMissRate()](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_getMissRate)**
    Returns the miss rate in the partition.
-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_getName)**
    Returns the name of this cache partition.
-   **[getNumKeys()](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_getNumKeys)**
    Returns the total number of keys in the partition.
-   **[isAvailable()](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_isAvailable)**
    Returns true if the Salesforce session is available. Only applies to Cache.SessionPartition. The session cache isn’t available when an active session isn’t present, such as in asynchronous Apex or code called by asynchronous Apex. For example, if batch Apex causes an Apex trigger to execute, the session cache isn’t available in the trigger because the trigger runs in asynchronous context.
-   **[put(key, value)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_put_4)**
    Stores the specified key/value pair as a cached entry in the cache partition. The put method can write only to the cache in your org’s namespace.
-   **[put(key, value, visibility)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_put_3)**
    Stores the specified key/value pair as a cached entry in the cache partition and sets the cached value’s visibility.
-   **[put(key, value, ttlSecs)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_put_2)**
    Stores the specified key/value pair as a cached entry in the cache partition and sets the cached value’s lifetime.
-   **[put(key, value, ttlSecs, visibility, immutable)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_put)**
    Stores the specified key/value pair as a cached entry in the cache partition. This method also sets the cached value’s lifetime, visibility, and whether it can be overwritten by another namespace.
-   **[remove(key)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_remove)**
    Deletes the cached value corresponding to the specified key from this cache partition.
-   **[remove(cacheBuilder, key)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_remove_2)**
    Deletes the cached value corresponding to the specified key from the partition cache. Use this method if your cached value is a class that implements the CacheBuilder interface.
-   **[validateCacheBuilder(cacheBuilder)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_validateCacheBuilder)**
    Validates that the specified class implements the CacheBuilder interface.
-   **[validateKey(isDefault, key)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_validateKey)**
    Validates a cache key. This method throws a Cache.InvalidParamException if the key is not valid. A valid key is not null and contains alphanumeric characters.
-   **[validateKeyValue(isDefault, key, value)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_validateKeyValue)**
    Validates a cache key and ensures that the cache value is non-null. This method throws a Cache.InvalidParamException if the key or value is not valid. A valid key is not null and contains alphanumeric characters.
-   **[validateKeys(isDefault, keys)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_validateKeys)**
    Validates the specified cache keys. This method throws a Cache.InvalidParamException if the key is not valid. A valid key is not null and contains alphanumeric characters.
-   **[validatePartitionName(name)](atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm#apex_cache_Partition_validatePartitionName)**
    Validates the partition name — for example, that it is not null.

### contains(key)

Returns true if the cache partition contains a cached value corresponding to the specified key.

#### Signature

public Boolean contains(String key)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A case-sensitive string value that uniquely identifies a cached value.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

true if a cache entry is found. Othewise, false.

### contains(setOfKeys)

Returns true if the cache partition contains values for a specified set of keys.

#### Signature

public Map <String, Boolean\> contains (Set<String\> keys)

#### Parameters

setOfKeys

Type: Set <[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A set of keys that uniquely identifies cached values. For information about the format of the key name, see [Usage](atlas.en-us.apexref.meta/apexref/apex_class_cache_Session.htm#usage_section).

#### Return Value

Type: Map <[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Boolean>

Returns the cache key and corresponding Boolean value indicating that the key entry exists. The Boolean value is false if the key entry doesn't exist.

#### Usage

The number of input keys cannot exceed the maximum limit of 10.

#### Example

In this example, the code checks for the presence of multiple keys on a partition. It fetches the cache key and the corresponding Boolean value for the key entry from the org cache of the partition.

// Assuming there is a partition p1 in the default 'local' namespace Set<String> keys = new Set<String>{'key1','key2','key3','key4','key5'}; Cache.OrgPartition orgPart = Cache.Org.getPartition('local.p1'); Map<String,Boolean> result = orgPart.contains(keys); for(String key : result.keySet()) { system.debug('key: ' + key); system.debug('Is Key Present in the cache:' + result.get(key)); }

In this example, the code checks for the presence of multiple keys on a partition. It fetches the cache key and the corresponding Boolean value for the key entry from the session cache of the partition.

// Assuming there are three partitions p1, p2, p3 with default 'local' namespace Set<String> keys = new Set<String>{'key1','key2','key3','key4','key5'}; Cache.SessionPartition sessionPart = Cache.Session.getPartition('local.p1'); Map<String,Boolean> result = sessionPart.contains(keys); for(String key : result.keySet()) { system.debug('key: ' + key); system.debug('value: ' + result.get(key)); }

### createFullyQualifiedKey(namespace, partition, key)

Generates a fully qualified key from the passed-in key components. The format of the generated key string is namespace.partition.key.

#### Signature

public static String createFullyQualifiedKey(String namespace, String partition, String key)

#### Parameters

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The namespace of the cache key.

partition

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The partition of the cache key.

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the cache key.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### createFullyQualifiedPartition(namespace, partition)

Generates a fully qualified partition name from the passed-in namespace and partition. The format of the generated partition string is namespace.partition.

#### Signature

public static String createFullyQualifiedPartition(String namespace, String partition)

#### Parameters

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The namespace of the cache key.

partition

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The partition of the cache key.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### get(key)

Returns the cached value corresponding to the specified key from the cache partition.

#### Signature

public Object get(String key)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A case-sensitive string value that uniquely identifies a cached value.

#### Return Value

Type: Object

The cached value as a generic object type. Cast the returned value to the appropriate type.

### get(keys)

Returns the cached values corresponding to the specified set of keys from the cache partition.

#### Signature

public Map <String, Object\> get (Set <String\> keys)

#### Parameters

keys

Type: Set <[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A set of keys that uniquely identify cached values. For information about the format of the key name, see [Usage](atlas.en-us.apexref.meta/apexref/apex_class_cache_Session.htm#usage_section).

#### Return Value

Type: Map <[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

Returns the cache key and corresponding value. Returns null when no corresponding value is found for an input key.

#### Usage

The number of input keys cannot exceed the maximum limit of 10.

#### Examples

Fetch multiple keys from the org cache of a partition.

// Assuming there is a partition p1 in the default 'local' namespace Set<String> keys = new Set<String>{'key1','key2','key3','key4','key5'}; Cache.OrgPartition orgPart = Cache.Org.getPartition('local.p1'); Map<String,Object> result = orgPart.get(keys); for(String key : result.keySet()) { system.debug('key: ' + key); system.debug('value: ' + result.get(key)); }

Fetch multiple keys from the session cache of a partition.

// Assuming there is a partition p1 in the default 'local' namespace Set<String> keys = new Set<String>{'key1','key2','key3','key4','key5'}; Cache.SessionPartition sessionPart = Cache.Session.getPartition('local.p1'); Map<String,Object> result = sessionPart.get(keys); for(String key : result.keySet()) { system.debug('key: ' + key); system.debug('value: ' + result.get(key)); }

### get(cacheBuilder, key)

Returns the cached value corresponding to the specified key from the partition cache. Use this method if your cached value is a class that implements the CacheBuilder interface.

#### Signature

public Object get(System.Type cacheBuilder, String key)

#### Parameters

cacheBuilder

Type: [System.Type](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_methods_system_type "Contains methods for getting the Apex type that corresponds to an Apex class and for instantiating new types.")

The Apex class that implements the CacheBuilder interface.

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A case-sensitive string value that, combined with the class name corresponding to the cacheBuilder parameter, uniquely identifies a cached value.

#### Return Value

Type: Object

The cached value as a generic object type. Cast the returned value to the appropriate type.

### getAvgGetSize()

Returns the average item size of all the keys fetched from the partition, in bytes.

#### Signature

public Long getAvgGetSize()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### getAvgGetTime()

Returns the average time taken to get a key from the partition, in nanoseconds.

#### Signature

public Long getAvgGetTime()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### getAvgValueSize()

**Deprecated and available only in API versions 49.0 and earlier.** Returns the average item size for keys in the partition, in bytes.

#### Signature

public Long getAvgValueSize()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### getCapacity()

Returns the percentage of cache used of the total capacity for this partition.

#### Signature

public Double getCapacity()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

Used partition cache as a percentage number.

### getKeys()

Returns a set of all keys that are stored in the cache partition and visible to the invoking namespace.

#### Signature

public Set<String\> getKeys()

#### Return Value

Type: Set<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A set containing all cache keys.

### getMaxGetSize()

Returns the maximum item size of all the keys fetched from the partition, in bytes.

#### Signature

public Long getMaxGetSize()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### getMaxGetTime()

Returns the maximum time taken to get a key from the partition, in nanoseconds.

#### Signature

public Long getMaxGetTime()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### getMaxValueSize()

**Deprecated and available only in API versions 49.0 and earlier.** Returns the maximum item size for keys in the partition, in bytes.

#### Signature

public Long getMaxValueSize()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### getMissRate()

Returns the miss rate in the partition.

#### Signature

public Double getMissRate()

#### Return Value

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

### getName()

Returns the name of this cache partition.

#### Signature

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of this cache partition.

### getNumKeys()

Returns the total number of keys in the partition.

#### Signature

public Long getNumKeys()

#### Return Value

Type: [Long](atlas.en-us.apexref.meta/apexref/apex_methods_system_long.htm#apex_methods_system_long "Contains methods for the Long primitive data type.")

### isAvailable()

Returns true if the Salesforce session is available. Only applies to Cache.SessionPartition. The session cache isn’t available when an active session isn’t present, such as in asynchronous Apex or code called by asynchronous Apex. For example, if batch Apex causes an Apex trigger to execute, the session cache isn’t available in the trigger because the trigger runs in asynchronous context.

#### Signature

public Boolean isAvailable()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### put(key, value)

Stores the specified key/value pair as a cached entry in the cache partition. The put method can write only to the cache in your org’s namespace.

#### Signature

public void put(String key, Object value)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A case-sensitive string value that uniquely identifies a cached value.

value

Type: Object

The value to store in the cache. The cached value must be serializable.

#### Return Value

Type: void

### put(key, value, visibility)

Stores the specified key/value pair as a cached entry in the cache partition and sets the cached value’s visibility.

#### Signature

public void put(String key, Object value, cache.Visibility visibility)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A case-sensitive string value that uniquely identifies a cached value.

value

Type: Object

The value to store in the cache. The cached value must be serializable.

visibility

Type: [Cache.Visibility](atlas.en-us.apexref.meta/apexref/apex_enum_cache_Visibility.htm "Use the Cache.Visibility enumeration in the Cache.Session or Cache.Org methods to indicate whether a cached value is visible only in the value’s namespace or in all namespaces.")

Indicates whether the cached value is available only to Apex code that is executing in the same namespace or to Apex code executing from any namespace.

#### Return Value

Type: void

### put(key, value, ttlSecs)

Stores the specified key/value pair as a cached entry in the cache partition and sets the cached value’s lifetime.

#### Signature

public void put(String key, Object value, Integer ttlSecs)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A case-sensitive string value that uniquely identifies a cached value.

value

Type: Object

The value to store in the cache. The cached value must be serializable.

ttlSecs

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The amount of time, in seconds, to keep the cached value in the cache.

#### Return Value

Type: void

### put(key, value, ttlSecs, visibility, immutable)

Stores the specified key/value pair as a cached entry in the cache partition. This method also sets the cached value’s lifetime, visibility, and whether it can be overwritten by another namespace.

#### Signature

public void put(String key, Object value, Integer ttlSecs, cache.Visibility visibility, Boolean immutable)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A case-sensitive string value that uniquely identifies a cached value.

value

Type: Object

The value to store in the cache. The cached value must be serializable.

ttlSecs

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The amount of time, in seconds, to keep the cached value in the cache.

visibility

Type: [Cache.Visibility](atlas.en-us.apexref.meta/apexref/apex_enum_cache_Visibility.htm "Use the Cache.Visibility enumeration in the Cache.Session or Cache.Org methods to indicate whether a cached value is visible only in the value’s namespace or in all namespaces.")

Indicates whether the cached value is available only to Apex code that is executing in the same namespace or to Apex code executing from any namespace.

immutable

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether the cached value can be overwritten by another namespace (false) or not (true).

#### Return Value

Type: void

### remove(key)

Deletes the cached value corresponding to the specified key from this cache partition.

#### Signature

public Boolean remove(String key)

#### Parameters

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A case-sensitive string value that uniquely identifies a cached value.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

true if the cache value was successfully removed. Otherwise, false.

### remove(cacheBuilder, key)

Deletes the cached value corresponding to the specified key from the partition cache. Use this method if your cached value is a class that implements the CacheBuilder interface.

#### Signature

public Boolean remove(System.Type cacheBuilder, String key)

#### Parameters

cacheBuilder

Type: [System.Type](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_methods_system_type "Contains methods for getting the Apex type that corresponds to an Apex class and for instantiating new types.")

The Apex class that implements the CacheBuilder interface.

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A case-sensitive string value that, combined with the class name corresponding to the cacheBuilder parameter, uniquely identifies a cached value.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

true if the cache value was successfully removed. Otherwise, false.

### validateCacheBuilder(cacheBuilder)

Validates that the specified class implements the CacheBuilder interface.

#### Signature

public static void validateCacheBuilder(System.Type cacheBuilder)

#### Parameters

cacheBuilder

Type: [System.Type](atlas.en-us.apexref.meta/apexref/apex_methods_system_type.htm#apex_methods_system_type "Contains methods for getting the Apex type that corresponds to an Apex class and for instantiating new types.")

The class to validate.

#### Return Value

Type: void

### validateKey(isDefault, key)

Validates a cache key. This method throws a Cache.InvalidParamException if the key is not valid. A valid key is not null and contains alphanumeric characters.

#### Signature

public static void validateKey(Boolean isDefault, String key)

#### Parameters

isDefault

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Set to true if the key references a default partition. Otherwise, set to false.

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The key to validate.

#### Return Value

Type: void

### validateKeyValue(isDefault, key, value)

Validates a cache key and ensures that the cache value is non-null. This method throws a Cache.InvalidParamException if the key or value is not valid. A valid key is not null and contains alphanumeric characters.

#### Signature

public static void validateKeyValue(Boolean isDefault, String key, Object value)

#### Parameters

isDefault

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Set to true if the key references a default partition. Otherwise, set to false.

key

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The key to validate.

value

Type: Object

The cache value to validate.

#### Return Value

Type: void

### validateKeys(isDefault, keys)

Validates the specified cache keys. This method throws a Cache.InvalidParamException if the key is not valid. A valid key is not null and contains alphanumeric characters.

#### Signature

public static void validateKeys(Boolean isDefault, Set<String\> keys)

#### Parameters

isDefault

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Set to true if the key references a default partition. Otherwise, set to false.

keys

Type: Set<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A set of key string values to validate.

#### Return Value

Type: void

### validatePartitionName(name)

Validates the partition name — for example, that it is not null.

#### Signature

public static void validatePartitionName(String name)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the partition to validate.

#### Return Value

Type: void

## Related Topics

- Cache (atlas.en-us.apexref.meta/apexref/apex_namespace_cache.htm)
- Partition Methods (atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm)
- OrgPartition Class (atlas.en-us.apexref.meta/apexref/apex_class_cache_OrgPartition.htm)
- SessionPartition Class (atlas.en-us.apexref.meta/apexref/apex_class_cache_SessionPartition.htm)
- contains(key) (atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm)
- contains(setOfKeys) (atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm)
- createFullyQualifiedKey(namespace, partition, key) (atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm)
- createFullyQualifiedPartition(namespace, partition) (atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm)
- get(key) (atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm)
- get(keys) (atlas.en-us.apexref.meta/apexref/apex_class_cache_Partition.htm)
