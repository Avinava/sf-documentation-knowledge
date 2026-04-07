---
title: "Managing Soups"
domain: mobile-sdk
topic: managing-soups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:26.942Z
estimatedTokens: 873
keywords: [Managing, Soups, SmartStore, utility, functionality, lets, retrieve, soup, metadata, perform, soup-level, operations, hybrid, React, Native, Android, iOS, apps]
---

> SmartStore provides utility functionality
   that lets you retrieve soup metadata and perform other soup-level operations. This
  functionality is available for hybrid, React Native, Android native, and iOS native
  apps.

# Managing Soups

SmartStore provides utility functionality that lets you retrieve soup metadata and perform other soup-level operations. This functionality is available for hybrid, React Native, Android native, and iOS native apps.

## iOS Native Apps

To use soup management APIs in a native iOS app, import SmartStore/SFSmartStore.h. You call soup management methods on a shared instance of the SmartStore object. Obtain the shared instance by using one of the following SFSmartStore class methods.

Using the SmartStore instance for the current user:

Swift

```

```

Example:

```

```

Objective-C

```

```

Using the SmartStore instance for a specified user:

Swift

```

```

Example:

```

```

Objective-C

```

```

Example:

```

```

## Android Native Apps

To use soup management APIs in a native Android app, you call methods on the shared SmartStore instance:

```

```

## Hybrid Apps

Each soup management function in JavaScript takes two callback functions: a success callback that returns the requested data, and an error callback. Success callbacks vary according to the soup management functions that use them. Error callbacks take a single argument, which contains an error description string. For example, you can define an error callback function as follows:

```

```

To call a soup management function in JavaScript, first invoke the Cordova plug-in to initialize the SmartStore object. You then use the SmartStore object to call the soup management function. The following example defines named callback functions discretely, but you can also define them inline and anonymously.

```

```

-   **[Get the Database Size](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup_dbsize.htm)**
    To query the amount of disk space consumed by the database, call the database size method.
-   **[Clear a Soup](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup_clear.htm)**
    To remove all entries from a soup, call the soup clearing method.
-   **[Retrieve a Soup’s Index Specs](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup_retrieve_index_specs.htm)**
    If you want to examine or display the index specifications for a soup, call the applicable index specs retrieval method.
-   **[Change Existing Index Specs on a Soup](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup_change_index_specs.htm)**
    To change existing index specs, call the applicable soup alteration method.
-   **[Reindex a Soup](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup_reindex.htm)**
    Use reindexing if you previously altered a soup without reindexing the data, but later you want to make sure all elements in the soup are properly indexed. Both alterSoup() and reindexSoup() perform better for conversion to, or creation of, JSON1 index specs than for other index spec types.
-   **[Remove a Soup](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup_remove.htm)**
    Removing a soup deletes it. When a user signs out, all soups are deleted automatically. For other occasions in which you want to delete a soup, call the applicable soup removal method.

#### See Also

-   [Adding SmartStore to Existing Android Apps](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_android_add_smartstore.htm "Hybrid projects created with Mobile SDK 4.0 or later automatically include SmartStore. If you used Mobile SDK 4.0+ to create an Android native project without SmartStore, you can easily add it later.")

## Code Examples

```
func shared(withName: String) -> SmartStore
```

```
var store = SmartStore.shared(withName: storeName)
```

```
+ (id)sharedStoreWithName:(NSString*)storeName;
```

```
func shared(withName: String, forUserAccount: SFUserAccount) -> SmartStore
```

```
var store = SmartStore.shared(withName: storeName, forUserAccount: user)
```

## Related Topics

- Get the Database Size (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup_dbsize.htm)
- Clear a Soup (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup_clear.htm)
- Retrieve a Soup’s Index Specs (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup_retrieve_index_specs.htm)
- Change Existing Index Specs on a Soup (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup_change_index_specs.htm)
- Reindex a Soup (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup_reindex.htm)
- Remove a Soup (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_soup_remove.htm)
- Adding SmartStore to Existing Android Apps (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_android_add_smartstore.htm)
