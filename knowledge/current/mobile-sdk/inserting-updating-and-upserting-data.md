---
title: "Inserting, Updating, and Upserting Data"
domain: mobile-sdk
topic: inserting-updating-and-upserting-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:31.671Z
estimatedTokens: 1390
keywords: [Inserting, Updating, Upserting, Data, SmartStore, standard, help, track, entries, synchronize, soups, external, servers, System, _soupEntryId]
---

# Inserting, Updating, and Upserting Data

> SmartStore defines standard fields
      that help you track entries and synchronize soups with external servers.

# Inserting, Updating, and Upserting Data

SmartStore defines standard fields that help you track entries and synchronize soups with external servers.

## System Fields: \_soupEntryId and \_soupLastModifiedDate

To track soup entries for insert, update, and delete actions, SmartStore adds a few fields to each entry:

-   \_soupEntryId—This field is the primary key for the soup entry in the table for a given soup.
-   \_soupLastModifiedDate, \_soupCreatedDate—The number of milliseconds since 1/1/1970.
    -   To convert a date value to a JavaScript date, use new Date(entry.\_soupLastModifiedDate).
    -   To convert a date to the corresponding number of milliseconds since 1/1/1970, use date.getTime().

When you insert or update soup entries, SmartStore automatically sets these fields. When you remove or retrieve specific entries, you can reference them by \_soupEntryId.

Beginning with Mobile SDK 4.2, SmartStore creates indexes on the \_soupLastModifiedDate and \_soupCreatedDate fields. These indexes provide a performance boost for queries that use these fields. In older soups, the \_soupLastModifiedDate and \_soupCreatedDate fields exist but are not indexed. To create these indexes to legacy soups, simply call alterSoup and pass in your original set of index specs.

## About Upserting

To insert or update soup entries—letting SmartStore determine which action is appropriate—you use an upsert method.

If \_soupEntryId is already set in any of the entries presented for upsert, SmartStore updates the soup entry that matches that ID. If an upsert entry doesn’t have a \_soupEntryId slot, or its \_soupEntryId doesn’t match an existing soup entry, SmartStore inserts the entry and overwrites its \_soupEntryId.

## Upserting with an External ID

If your soup entries mirror data from an external system, you usually refer to those entries by their external primary key IDs. For that purpose, SmartStore supports upsert with an external ID. When you perform an upsert, you can designate any index field as the external ID field. SmartStore looks for existing soup entries with the same value in the designated field with the following results:

-   If no field with the same value is found, SmartStore creates a soup entry.
-   If the external ID field is found, SmartStore updates the entry with the matching external ID value.
-   If more than one field matches the external ID, SmartStore returns an error.

To create an entry locally, set the external ID field to a value that you can query when uploading the new entries to the server.

When you update the soup with external data, always use the external ID. Doing so guarantees that you don’t end up with duplicate soup entries for the same remote record.

SmartStore also lets you track inter-object relationships. For example, imagine that you create a product offline that belongs to a catalog that doesn’t yet exist on the server. You can capture the product’s relationship with the catalog entry through the parentSoupEntryId field. Once the catalog exists on the server, you can capture the external relationship by updating the local product record’s parentExternalId field.

## Upsert Methods

**JavaScript:**

The cordova.force.js library provides two JavaScript upsert functions, each with one overload:

```

```

```

```

To upsert local data only, use the first upsert() function. To upsert data from an external server, use the second function, which supports the externalPathId parameter.

**iOS native:**

The iOS SFSmartStore class provides two instance methods for upserting. The first lets you specify all available options:

-   Soup name
-   NSArray object containing index specs
-   Path for an external ID field name
-   An output NSError object to communicate errors back to the app

***Objective-C:***

```

```

***Swift:***

```

```

Example:

```

```

The second method uses the \_soupEntryId field for the external ID path:

***Objective-C:***

```

```

***Swift:***

```

```

Example:

```

```

**Android native:**

Android provides three overloads of its upsert() method. The first overload lets you specify all available options:

-   Soup name
-   JSON object containing one or more entries for upserting
-   Path for an arbitrary external ID field name
-   Flag indicating whether to use a transactional model for inserts and updates

```

```

The second overload enforces the use of a transactional model for inserts and updates:

```

```

The third overload enforces the transactional model and uses the \_soupEntryId field for the external ID path:

```

```

## Example

The following JavaScript code contains sample scenarios. First, it calls upsertSoupEntries to create an account soup entry. In the success callback, the code retrieves the new record with its newly assigned soup entry ID. It then changes the account description and calls forcetk.mobilesdk methods to create the account on the server and then update it. The final call demonstrates an upsert with external ID. To make the code more readable, no error callbacks are specified. Also, because all SmartStore calls are asynchronous, real applications perform each step in the success callback of the previous step.

This code uses the value new for the id field because the record doesn’t yet exist on the server. When the app comes online, it can query for records that exist only locally (by looking for records where id == "new") and upload them to the server. Once the server returns IDs for the new records, the app can update their id fields in the soup.

```

```

## Code Examples

```
navigator.smartStore.upsertSoupEntries(isGlobalStore, soupName, 
    entries[], successCallback, errorCallback)
navigator.smartStore.upsertSoupEntries(storeConfig, soupName, 
    entries[], successCallback, errorCallback)
```

```
navigator.smartStore.upsertSoupEntriesWithExternalId(isGlobalStore, soupName, 
entries[], externalPathId, successCallback, errorCallback)
navigator.smartStore.upsertSoupEntriesWithExternalId(storeConfig, soupName, 
entries[], externalPathId, successCallback, errorCallback)
```

```
- (NSArray *)upsertEntries:(NSArray *)entries 
                    toSoup:(NSString *)soupName 
        withExternalIdPath:(NSString *)externalIdPath 
                     error:(NSError **)error;
```

```
func upsert(entries: [Any], forSoupNamed: String, 
        withExternalIdPath: String) throws -> [Any]
```

```
var entries = store.upsert(entries: entries,forSoupNamed: soupName, withExternalIdPath: path)
```
