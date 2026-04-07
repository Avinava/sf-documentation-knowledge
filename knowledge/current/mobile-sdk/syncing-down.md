---
title: "Syncing Down"
domain: mobile-sdk
topic: syncing-down
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.237Z
estimatedTokens: 1825
keywords: [Syncing, Down, download, sObjects, server, local, Mobile, Sync, soup, appropriate, “sync, down”, Merge, Modes, iOS]
---

# Syncing Down

> To download sObjects from the server to your local Mobile Sync soup, use
            the appropriate “sync down” method.

# Syncing Down

To download sObjects from the server to your local Mobile Sync soup, use the appropriate “sync down” method.

For sync down methods, you define a target that provides the list of sObjects to be downloaded. To provide an explicit list, use JSONObject on Android, or NSDictionary on iOS. However, you can also define the target with a query string. The sync target class provides factory methods for creating target objects from a SOQL, SOSL, or MRU query.

You also specify the name of the SmartStore soup that receives the downloaded data. This soup is required to have an indexed string field named \_\_local\_\_. Mobile SDK reports the progress of the sync operation through the callback method or update block that you provide.

## Merge Modes

Sync down methods support an option that lets you control how incoming data merges with locally modified records. Choose one of the following behaviors:

1.  Overwrite modified local records and lose all local changes. Set the options parameter to the following value:
    -   **iOS:**

        Swift

        ```

        ```

        Objective-C

        \[SFSyncOptions newSyncOptionsForSyncDown:SFSyncStateMergeModeOverwrite\]

    -   **Android:** SyncOptions.optionsForSyncDown(MergeMode.OVERWRITE)
2.  Preserve all local changes and locally modified records. Set the options parameter to the following value:
    -   **iOS:**

        Swift

        ```

        ```

        Objective-C

        \[SFSyncOptions newSyncOptionsForSyncDown:SFSyncStateMergeModeLeaveIfChanged\]

    -   **Android:** SyncOptions.optionsForSyncDown(MergeMode.LEAVE\_IF\_CHANGED)

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

-   If you use a version of syncDown that doesn’t take an options parameter, existing sObjects in the cache can be overwritten. To preserve local changes, always run sync up before running sync down.
-   Sync down payloads don’t reflect records that have been deleted on the server. As a result, the update operation doesn’t automatically delete the corresponding records in the target soups. These records that remain in the soup after deletion on the server are known as ghosts. To delete them, call one of the [cleanResyncGhosts](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_ghosts.htm "If you’re finding that sync down operations sometimes leave unwanted records in your SmartStore soups, you can use the cleanResyncGhosts API to get rid of them.") methods after you sync down.

## iOS Sync Manager Methods

Swift Class Name

```

```

Objective-C Class Name

```

```

To create a sync down operation without running it:

Swift

```

```

Objective-C

```

```

To create and run a sync down operation that overwrites any local changes:

Swift

```

```

Objective-C

```

```

To create and run an unnamed sync down operation:

Swift

```

```

Objective-C

```

```

To create and run a named sync down operation:

Swift

```

```

Objective-C

```

```

To run a named sync down operation:

Swift

```

```

Objective-C

```

```

To rerun a previous sync operation using its sync ID:

Swift

```

```

Objective-C

```

```

## Android SyncManager Methods

To create a sync down operation without running it:

```

```

To create and run a sync down operation that overwrites any local changes:

```

```

To create and run an unnamed sync down operation:

```

```

To create and run a named sync down operation:

```

```

To run or rerun a named sync configuration:

```

```

To rerun a previous sync operation using its sync ID:

```

```

## Example

**iOS:**

The [MobileSyncExplorerSwift](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/master/MobileSyncExplorerSwift "HTML (New Window)") sample app demonstrates how to use named syncs and sync configuration files with the Salesforce Contact object. In iOS, this sample defines a ContactSObjectData class that represents a contact record as a Swift object. The sample also defines several support classes:

-   ContactSObjectDataSpec
-   SObjectData
-   SObjectDataSpec
-   SObjectDataFieldSpec
-   SObjectDataManager

To sync Contact data with the SmartStore soup, this app defines the following named sync operations in the Resources/usersyncs.json file:

```

```

In the RootViewController class, the syncUpDown() method starts the flow by calling the updateRemoteData(\_:onFailure:) method of SObjectDataManager.

```

```

For the first argument of updateRemoteData, which represents success, syncUpDown passes a block that calls the refreshList() method of RootViewController. This method filters the local contacts according to customer input and refreshes the view.

updateRemoteData performs a sync up ensures that allowed soup changes are merged into the Salesforce org. If sync up succeeds—that is, if the SyncState status indicates “done”—then updateRemoteData does the following:

1.  Retrieves all raw data from the freshly updated soup.
2.  Transforms the soup’s data to ContactSObjectData objects and stores these objects in an internal array.
3.  Passes control to refreshRemoteData(\_:onFailure:). The onSuccess argument passed to refreshRemoteData is the block passed in from syncUpDown.

    ```

    ```


In refreshRemoteData, the app again calls reSync but with the syncDownContacts model—aliased as kSyncDownName—to update the soup. If sync down succeeds, refreshRemoteData “closes the circle” by executing the block that’s passed to it from syncUpDown via updateRemoteData.

```

```

To summarize everything that happens in the syncUpDown call stack:

1.  *Sync up*: It syncs soup changes up to the server by calling updateRemoteData on SObjectsDataManager. This step ensures that all allowable local and offline changes are merged into Salesforce.
2.  *Sync down*: After the soup records are merged with server data, it syncs server data down to the soup through a call to refreshRemoteData. This step ensures that the soup reflects changes originating on the server and also changes merged from sync up. **Remember:** The sync up merge mode determines which soup edits are allowed on the server.
3.  Finally, it updates its UI with the updated contact records from the soup.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

When you’re syncing records, always call sync down after sync up as demonstrated by the MobileSyncExplorerSwift sample app.

## Example

**Android:**

The native MobileSyncExplorer sample app demonstrates how to use Mobile Sync named syncs and sync configuration files with Contact records. In Android, it defines a ContactObject class that represents a Salesforce Contact record as a Java object. To sync Contact data down to the SmartStore soup, the syncDown() method resyncs a named sync down configuration that defines a SOQL query.

In the following snippet, the reSync() method loads the following named sync operations from the res/raw/usersyncs.json file:

```

```

If the sync down operation succeeds—that is, if sync.getStatus() equals Status.DONE—the received data goes into the specified soup. The callback method then fires an intent that reloads the data in the Contact list.

```

```

## Code Examples

```
SyncOptions.newSyncOptions(forSyncDown: SyncMergeMode.overwrite)
```

```
SyncOptions.newSyncOptions(forSyncDown: SyncMergeMode.leaveIfChanged)
```

```
SFMobileSyncSyncManager
```

```
var syncState = syncManager.createSyncDown(target: target, options: options, 
    soupName: CONTACTS_SOUP, syncName: syncState.syncName)
```

```
- (SFSyncState *)createSyncDown:(SFSyncDownTarget *)target 
                        options:(SFSyncOptions *)options 
                       soupName:(NSString *)soupName 
                       syncName:(NSString *)syncName;
```

## Related Topics

- cleanResyncGhosts (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_sync_ghosts.htm)
