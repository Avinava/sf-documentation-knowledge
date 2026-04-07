---
title: "Using StoreCache For Offline Caching"
domain: mobile-sdk
topic: using-storecache-for-offline-caching
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.893Z
estimatedTokens: 1299
keywords: [Examples, StoreCache, Offline, Caching, Although, intended, Mobile, Sync, any, cache, mechanism, meets, requirements, described, Construction, Initialization]
---

> Although StoreCache is intended for use with Mobile Sync, you
                can use any cache mechanism with Mobile Sync that
                meets the requirements described in Offline Caching.

# Using StoreCache For Offline Caching

The mobilesync.js library implements a cache named StoreCache that stores its data in SmartStore. Although Mobile Sync uses StoreCache as its default cache, StoreCache is a stand-alone component. Even if you don’t use Mobile Sync, you can still leverage StoreCache for SmartStore operations.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Although StoreCache is intended for use with Mobile Sync, you can use any cache mechanism with Mobile Sync that meets the requirements described in [Offline Caching](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_caching.htm).

## Construction and Initialization

StoreCache objects work internally with SmartStore soups. To create a StoreCache object backed by the soup soupName, use the following constructor:

```

```

soupName

Required. The name of the underlying SmartStore soup.

additionalIndexSpecs

Fields to include in the cache index in addition to default index fields. See [Registering a Soup](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup.htm#offline_soup "Before you try to access a soup, you’re required to register it.") for formatting instructions.

keyField

Name of field containing the record ID. If not specified, StoreCache expects to find the ID in a field named "Id."

Soup items in a StoreCache object include four additional boolean fields for tracking offline edits:

-   \_\_locally\_created\_\_

-   \_\_locally\_updated\_\_

-   \_\_locally\_deleted\_\_

-   \_\_local\_\_ (set to true if any of the previous three are true)


These fields are for internal use but can also be used by apps. If your app uses the Mobile Sync plugin to sync up to the server, you’re probably required to create these fields in the source soup. See [Preparing Soups for](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_mobilesync_compatibility.htm "Soups that exchange information with the Salesforce cloud typically use Mobile Sync for synchronization. To support Mobile Sync, most app types require you to create and manage special soup fields for “sync up” operations.") for instructions.

StoreCache indexes each soup on the \_\_local\_\_ field and its ID field. You can use the additionalIndexSpecs parameter to specify additional fields to include in the index.

To register the underlying soup, call init() on the StoreCache object. This function returns a jQuery promise that resolves once soup registration is complete.

## StoreCache Methods

init()

Registers the underlying SmartStore soup. Returns a jQuery promise that resolves when soup registration is complete.

retrieve(key \[, fieldlist\])

Returns a jQuery promise that resolves to the record with key in the keyField returned by the SmartStore. The promise resolves to null when no record is found or when the found record does not include all the fields in the fieldlist parameter.

key

The key value of the record to be retrieved.

fieldlist

(Optional) A JavaScript array of required fields. For example:

```

```

save(record \[, noMerge\])

Returns a jQuery promise that resolves to the saved record once the SmartStore upsert completes. If noMerge is not specified or is false, the passed record is merged with the server record with the same key, if one exists.

record

The record to be saved, formatted as:

```

```

For example:

```

```

noMerge

(Optional) Boolean value indicating whether the passed record is to be merged with the matching server record. Defaults to false.

saveAll(records \[, noMerge\])

Identical to save(), except that records is an array of records to be saved. Returns a jQuery promise that resolves to the saved records.

records

An array of records. Each item in the array is formatted as demonstrated for the save() function.

noMerge

(Optional) Boolean value indicating whether the passed record is to be merged with the matching server record. Defaults to false.

remove(key)

Returns a jQuery promise that resolves when the record with the given key has been removed from the SmartStore.

key

Key value of the record to be removed.

find(querySpec)

Returns a jQuery promise that resolves once the query has been run against the SmartStore. The resolved value is an object with the following fields:

| Field | Description |
| --- | --- |
| records | All fetched records |
| hasMore | Function to check if more records can be retrieved |
| getMore | Function to fetch more records |
| closeCursor | Function to close the open cursor and disable further fetch |

querySpec

A specification based on SmartStore query function calls, formatted as:

```

```

where query\_type\_params match the format of the related SmartStore query function call. See [Retrieving Data from a Soup](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_query.htm "SmartStore provides a set of helper methods that build query strings for you.").

Here are some examples:

```

```

## Examples

The following example shows how to create, initialize, and use a StoreCache object.

```

```

The next example shows how to use the saveAll() function and the results of the find() function.

```

```

## Code Examples

```
new Force.StoreCache(soupName [, additionalIndexSpecs, keyField])
```

```
["field1","field2","field3"]
```

```
{<field_name1>:"<field_value1>"[,<field_name2>:"<field_value2>",...]}
```

```
{Id:"007", Name:"JamesBond", Mission:"TopSecret"}
```

```
{queryType: "like" | "exact" | "range" | "smart"[, query_type_params]}
```

## Related Topics

- Offline Caching (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_caching.htm)
- Registering a Soup (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup.htm)
- Preparing Soups for (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_mobilesync_compatibility.htm)
- Retrieving Data from a Soup (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_query.htm)
