---
title: "Syncing Metadata and Layouts on iOS"
domain: mobile-sdk
topic: syncing-metadata-and-layouts-on-ios
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.500Z
estimatedTokens: 1223
keywords: [Syncing, Metadata, Layouts, iOS, layout, easy, started, how, initialize, configure, APIs, Initializing, Sync, Managers, Retrieving]
---

> Metadata and layout syncing on iOS is easy to use. To get started, learn how to
    initialize and configure the APIs.

# Syncing Metadata and Layouts on iOS

Metadata and layout syncing on iOS is easy to use. To get started, learn how to initialize and configure the APIs.

## Initializing Metadata and Layout Sync Managers

In iOS, metadata and layout managers are both shared objects. You access them by calling the sharedInstance class method as follows:

Swift

```

```

Objective-C

```

```

In this form, sharedInstance initializes the manager with the current user’s credentials and the default store.

In multi-user environments, you can also initialize the manager with a logged-in but non-current user.

Swift

```

```

Objective-C

```

```

Here, user is an instance of UserAccount (Swift) or SFUserAccount (Objective-C).

To specify a store other than the user’s default, use

Swift

```

```

Objective-C

```

```

To tell the manager to default to the current user, set user to nil. The store argument is an instance of SmartStore (Swift) or SFSmartStore (Objective-C) and must be associated with the given user. When a valid store is provided, Mobile Sync uses the given store to create its metadata and layout soups.

## Retrieving Metadata (iOS)

You use metadata manager classes to fetch metadata from a Salesforce org or a SmartStore instance. To fetch, call the following asynchronous method on the shared instance of your metadata sync manager.

Swift

```

```

Objective-C

```

```

objectType

The Salesforce object whose metadata you’re fetching. For example, “Account” or “Opportunity”.

mode

This parameter helps determine the data’s source location. Data retrieval modes include:

-   -   iOS (Swift): FetchMode.cacheOnly
    -   iOS (Objective-C): SFSDKFetchModeCacheOnly
    -   Android: CACHE\_ONLYFetches data from the cache. If cached data is not available, returns null.
-   -   iOS (Swift): FetchMode.cacheFirst
    -   iOS (Objective-C): SFSDKFetchModeCacheFirst
    -   Android: CACHE\_FIRSTFetches data from the cache. If cached data is not available, fetches data from the server .
-   -   iOS (Swift): FetchMode.serverFirst
    -   iOS (Objective-C): SFSDKFetchModeServerFirst
    -   Android: SERVER\_FIRSTFetches data from the server. If server data is not available, fetches data from the cache. Data fetched from the server is automatically cached.

completionBlock

Callback block that executes asynchronously when the operation completes. You pass the block’s implementation or handle to this parameter. This block implements the following method prototype:

```

```

Mobile SDK passes a metadata object to this callback method. This object contains the true data model of the requested Salesforce object. You can use this metadata to query specific fields. This class defines properties whose names match the field names in the object’s manifest. Class properties represent all custom fields and customizable standard fields.

## Retrieving Layouts (iOS)

To sync layouts, call the following asynchronous method on the shared instance of your layout sync manager.

Swift

Objective-C

```

```

objectAPIName

(Required) Salesforce object whose layout you’re fetching. For example, “Account” or “Opportunity”.

formFactor

(Optional) Form factor of the layout you’re fetching. Supported values are “Large”, “Medium”, and “Small”. If not specified, defaults to “Large”.

layoutType

(Optional) Type of layout you’re fetching. Supported values are “Compact” and “Full”. If not specified, defaults to “Full”.

mode

(Optional) Record mode of the layout you’re fetching. Supported values are “Create”, “Edit”, and “View”. If not specified, defaults to “View”.

recordTypeId

(Optional) Record type whose layout you’re fetching. If not specified, uses the default record type.

syncMode

Retrieval mode to use while retrieving data. Supported values are:

-   SFSDKFetchModeCacheOnly—Fetches data from the cache. If cached data is not available, returns null.
-   SFSDKFetchModeCacheFirst—Fetches data from the cache. If cached data is not available, fetches data from the server.
-   SFSDKFetchModeServerFirst—Fetches data from the server. If server data is not available, fetches data from the cache. Data fetched from the server is automatically cached.

-   completionBlock

    Asynchronous block that is triggered when the operation completes. You pass either the block’s implementation or its handle to this parameter. This block implements the following method prototype:

    ```

    ```


Mobile SDK passes an SFLayout object to this callback method. This object contains the true data model of the requested Salesforce object’s layout. You can use this object’s properties to query specific fields.

Behind the scenes, SFLayoutSyncManager uses a Mobile Sync SFLayoutSyncDownTarget object to automatically create a SmartStore soup that contains the returned data. This soup includes index specs for retrieving layout data when the device is offline.

## Code Examples

```
MetadataSyncManager.sharedInstance()
LayoutSyncManager.sharedInstance()
```

```
[SFMetadataSyncManager sharedInstance]
[SFLayoutSyncManager sharedInstance]
```

```
MetadataSyncManager.sharedInstance(user)
LayoutSyncManager.sharedInstance(user)
```

```
[SFMetadataSyncManager sharedInstance:user]
[SFLayoutSyncManager sharedInstance:user]
```

```
MetadataSyncManager.sharedInstance(user, smartStore: store)
LayoutSyncManager.sharedInstance(user, smartStore: store)
```
