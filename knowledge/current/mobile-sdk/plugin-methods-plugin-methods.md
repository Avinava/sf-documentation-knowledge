---
title: "Plugin Methods Plugin Methods"
domain: mobile-sdk
topic: plugin-methods-plugin-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:25.688Z
estimatedTokens: 1799
keywords: [Plugin, Downloads, sObjects, target, SmartStore, soup, soupName, Mobile, Sync, overwrites, duplicate, syncDown, syncUp]
---

> Downloads the sObjects specified by target into the
          SmartStore soup specified by
          soupName. If sObjects in the soup have the same ID as
        objects specified in the target, Mobile Sync overwrites the duplicate
        objects in the soup.

# Plugin Methods Plugin Methods

The Mobile Sync plug-in exposes two methods: syncDown() and syncUp(). When you use these methods, several important guidelines can make your life simpler:

-   To create, update, or delete records locally for syncing with the plug-in, use Force.SObject from mobilesync.js. Mobile Sync expects some special fields on soup records that mobilesync.js creates for you.
-   Similarly, to create the soup that you’ll use in your sync operations, use Force.StoreCache from mobilesync.js.
-   If you’ve changed objects in the soup, always call syncUp() before calling syncDown().

## syncDown() Method

Downloads the sObjects specified by target into the SmartStore soup specified by soupName. If sObjects in the soup have the same ID as objects specified in the target, Mobile Sync overwrites the duplicate objects in the soup.

Mobile Sync also supports a refresh sync down target, which simplifies the process of refreshing cached records. See [Using the Refresh Sync Down Target](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_refresh_target.htm "Many apps download records, cache all of them, and then let users edit them from the SmartStore cache when connectivity drops. Local “offline” work is quick and efficient—a great user experience—but, when connectivity resumes, it's important to refresh the cached records with server updates.").

**Syntax**

```

```

**Parameters**

isGlobalStore

(Optional) Boolean that indicates whether this operation occurs in a global or user-based SmartStore database. Defaults to false.

storeConfig

(Optional) StoreConfig object that specifies a store name and whether the store is global or user-based.

target

Indicates which sObjects to download to the soup. Can be any of the following strings:

-   ```

    ```

    Downloads the sObjects returned by the given SOQL query.

-   ```

    ```

    Downloads the sObjects returned by the given SOSL query.

-   ```

    ```

    Downloads the specified fields of the most recently used sObjects of the specified sObject type.

-   ```

    ```

    Downloads the records specified by the given custom targets. If you use custom targets, provide either androidImpl or iOSImpl, or, preferably, both. See [Using Custom Sync Down Targets](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_custom_down_targets.htm).


soupName

Name of soup that receives the downloaded sObjects.

options

Use one of the following values:

-   To overwrite local records that have been modified, pass {mergeMode:Force.MERGE\_MODE\_DOWNLOAD.OVERWRITE}.
-   To preserve local records that have been modified, pass {mergeMode:Force.MERGE\_MODE\_DOWNLOAD.LEAVE\_IF\_CHANGED}. With this value, locally modified records are not overwritten.

callback

Function called once the sync has started. This function is called multiple times during a sync operation:

1.  When the sync operation begins
2.  When the internal REST request has completed
3.  After each page of results is downloaded, until 100% of results have been received

Status updates on the sync operation arrive via browser events. To listen for these updates, use the following code:

```

```

The event.detail member contains a map with the following fields:

-   syncId: ID for this sync operation
-   type: “syncDown”
-   target: Targets you provided
-   soupName: Soup name you provided
-   options: “{}”
-   status: Sync status, which can be “NEW”, “RUNNING”, “DONE” or “FAILED”
-   progress: Percent of total records downloaded so far (integer, 0–100)
-   totalSize: Number of records downloaded so far

## syncUp() Method

Uploads created, deleted, or updated records in the SmartStore soup specified by soupName, and then updates, creates, or deletes the corresponding records on the Salesforce server. Updates are reported through browser events.

**Syntax**

```

```

**Parameters**

isGlobalStore

(Optional) Boolean that indicates whether this operation occurs in a global or user-based SmartStore database. Defaults to false.

storeConfig

(Optional) StoreConfig object that specifies a store name and whether the store is global or user-based.

target

JSON object that contains at least the name of one native custom target class, if you define custom targets.

A Salesforce object can require certain fields that can’t be updated by apps. With these objects, a target that uses a single field list for both create and update operations can fail if it tries to update locked fields. Past versions of Mobile Sync required the developer to create a custom native target to differentiate between create and update field lists.

As of Mobile SDK 5.1, you no longer have to define custom native targets for these scenarios. Instead, to specify distinct field lists for create and update operations, add the following JSON object to the target object:

```

```

If you provide createFieldlist and updateFieldlist arguments, the native custom target uses them where applicable. In those cases, the target ignores the field list defined in its “sync options” settings.

See the syncDown() method description for more information on target metadata.

soupName

Name of soup from which to upload sObjects.

options

A map with the following keys:

-   fieldlist: List of fields sent to the server.
-   mergeMode:
    -   To overwrite remote records that have been modified, pass “OVERWRITE”.
    -   To preserve remote records that have been modified, pass “LEAVE\_IF\_CHANGED”. With this value, modified records on the server are not overwritten.
    -   Defaults to “OVERWRITE” if not specified.

callback

Function called multiple times after the sync has started. During the sync operation, this function is called for these events:

1.  When the sync operation begins
2.  When the internal REST request has completed
3.  After each page of results is uploaded, until 100% of results have been received

Status updates on the sync operation arrive via browser events. To listen for these updates, use the following code:

```

```

The event.detail member contains a map with the following fields:

-   syncId: ID for this sync operation
-   type: “syncUp”
-   target: “{}” or a map or dictionary containing the class names of iOS and Android custom target classes you’ve implemented
-   soupName: Soup name you provided
-   options:
    -   fieldlist: List of fields sent to the server
    -   mergeMode: “OVERWRITE” or “LEAVE\_IF\_CHANGED”
-   status: Sync status, which can be “NEW”, “RUNNING”, “DONE” or “FAILED”
-   progress: Percent of total records downloaded so far (integer, 0–100)
-   totalSize: Number of records downloaded so far

#### See Also

-   [Creating and Accessing User-based Stores](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_access_store.htm "When an app initializes SmartStore, it creates an instance of a store. It then uses the store to register and populate soups and manipulate soup data. For a user-based store, SmartStore manages the store’s life cycle—you don’t need to think about cleaning up after the user’s session ends. For global stores, though, your app is responsible for deleting the store’s data when the app terminates.")

## Code Examples

```
cordova.require("com.salesforce.plugin.mobilesync").syncDown(
    [isGlobalStore, ]target, soupName, options, callback);
cordova.require("com.salesforce.plugin.mobilesync").syncDown(
    [storeConfig, ]target, soupName, options, callback);
```

```
{type:"soql", query:"<soql query>"}
```

```
{type:"sosl", query:"<sosl query>"}
```

```
{type:"mru", sobjectType:"<sobject type>", fieldlist:"<fields to fetch>"}
```

```
{type:"custom", androidImpl:"<name of native Android target class (if supported)>", iOSImpl:"<name of native iOS target class (if supported)>"}
```

## Related Topics

- Using the Refresh Sync Down Target (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_refresh_target.htm)
- Using Custom Sync Down Targets (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_custom_down_targets.htm)
- Creating and Accessing User-based Stores (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/offline_access_store.htm)
