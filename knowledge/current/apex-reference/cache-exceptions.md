---
title: "Cache Exceptions"
domain: apex-reference
topic: cache-exceptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:19.299Z
estimatedTokens: 632
namespace: Cache
keywords: [Cache, Exceptions, contains, exception, classes.]
---

# Cache Exceptions

> The Cache namespace contains exception
  classes.

**Namespace:** `Cache`

# Cache Exceptions

The Cache namespace contains exception classes.

All exception classes support built-in methods for returning the error message and exception type. See [Exception Class and Built-In Exceptions](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm "An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.") in the Apex Developer Guide.

The Cache namespace contains these exceptions.

| Exception | Thrown when |
| --- | --- |
| Cache.Session.SessionCacheException | An error occurred while adding or retrieving a value in the session cache. |
| Cache.Session.SessionCacheNoSessionException | An attempt is made to access the cache when the session cache isn’t available. |
| Cache.Org.OrgCacheException | An attempt is made to access a partition that doesn’t exist or whose name is invalid. |
| Cache.InvalidParamException | An invalid parameter value is passed into a method of Cache.Session or Cache.Org. This error occurs when:The key referenced is null or empty or is not alphanumeric.The key isn’t qualified with the namespace and partition in the format <namespace>.<partition>.<key>.The key isn’t qualified in the format <key> for the default partition, or for a key inserted through the partition object.The namespace referenced is null or empty.The partition name is null or empty or is not alphanumeric.Another referenced value is null. |
| Cache.ItemSizeLimitExceededException | A cache put call is made with an item that exceeds the maximum size limit. To fix this error, break the item into multiple, smaller items. |
| Cache.BulkApiKeysLimitExceededException | The number of key parameters passed into a bulk method - get(keys) or contains(setOfKeys) exceeds the maximum limit of 10. |
| Cache.PlatformCacheInvalidOperationException | A cache put or remove call is made that is not allowed. For example, when calling put or remove inside a Visualforce constructor. |
| Cache.CacheBuilderExecutionException | This error occurs when the execution of the CacheBuilder fails; this could be due to an error in parsing, a permissions error while accessing records, or an issue with Apex callouts. |
| Cache.InvalidCacheBuilderException | A get(CacheBuilder cb, String key), remove(CacheBuilder cb, String key), or validateCacheBuilder(CacheBuilder cb) method is called but the cb parameter is a class that does not implement the Cache.CacheBuilder interface. |

## Related Topics

- Exception Class and Built-In Exceptions (atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm)
