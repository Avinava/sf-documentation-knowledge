---
title: "Syncing Up"
domain: mobile-sdk
topic: syncing-up
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:30.266Z
estimatedTokens: 2310
keywords: [Syncing, apply, local, changes, server, “sync, up”, data, SmartStore, soup, They, look, created, updated, deleted]
---

# Syncing Up

> To apply local changes on the server, use one of the “sync up” methods. These methods
            update the server with data from the given SmartStore soup.
            They look for created, updated, or deleted records in the soup, and then replicate those
            changes on the server. The op

# Syncing Up

To apply local changes on the server, use one of the “sync up” methods. These methods update the server with data from the given SmartStore soup. They look for created, updated, or deleted records in the soup, and then replicate those changes on the server. The options argument specifies a list of fields to be updated. In Mobile SDK5.1 and later, you can override this field list by initializing the sync manager object with separate field lists for create and update operations. See [Handling Field Lists in Create and Update Operations](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_up_target_def.htm#mobilesync_field_lists_update) .

Locally created objects must include an “attributes” field that contains a “type” field that specifies the sObject type. For example, for an account named Acme, use: {Id:”local\_x”, Name: Acme, attributes: {type:”Account”}}.

## iOS: SFMobileSyncSyncManager Methods

-   You can create a named sync without running it.

    Swift

    ```

    ```

    Objective-C

    ```

    ```

-   You can create and run a sync with just options that uses the default target.

    Swift

    ```

    ```

    Objective-C

    ```

    ```

-   You can create and run a sync based on a target that you configure in code.

    Swift

    ```

    ```

    Objective-C

    ```

    ```

-   Or, you can create and run a named sync. If you load a sync with the same name from a configuration file, this sync overrides it.

    Swift

    ```

    ```

    Objective-C

    ```

    ```

-   To run or rerun an existing named sync configuration:

    Swift

    ```

    ```

    Objective-C

    ```

    ```

-   Or, to rerun a previous sync operation by sync ID:

    Swift

    ```

    ```

    Objective-C

    ```

    ```

-   To rerun a sync without getting progress updates, use this function from the Mobile Sync Swift extension:

    Swift

    ```

    ```

    Objective-C

    (Not available.)

-   To sync up by external ID, see [Syncing Up by External ID](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_up_external_id.htm "Mobile SDK enhances its sync-up functionality by adding the ability to sync up by external ID. To use this feature, you specify an external ID field name in the sync up target definition. If a soup record is marked as locally created, updated, or deleted and has an external ID value, Mobile Sync syncs it up using upsert instead of create. If the record also has a valid Id value, however, Mobile Sync updates the indicated Salesforce record.").

## Android: SyncManager Methods

-   You can create a named sync up configuration without running it.

    ```

    ```

-   You can create and run an unnamed sync up configuration:

    ```

    ```

-   You can create and run a named sync up configuration:

    ```

    ```

-   To run or rerun an existing named sync configuration:

    ```

    ```

-   Or, to rerun a previous sync operation by sync ID:

    ```

    ```

-   To sync up by external ID, see [Syncing Up by External ID](atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_up_external_id.htm "Mobile SDK enhances its sync-up functionality by adding the ability to sync up by external ID. To use this feature, you specify an external ID field name in the sync up target definition. If a soup record is marked as locally created, updated, or deleted and has an external ID value, Mobile Sync syncs it up using upsert instead of create. If the record also has a valid Id value, however, Mobile Sync updates the indicated Salesforce record.").

## Specifying Merge Modes

For sync up operations, you can specify a mergeMode option. You can choose one of the following behaviors:

1.  Overwrite server records even if they've changed since they were synced down to that client. When you call the syncUp method:
    -   **iOS:** Set the options parameter to

        Swift

        ```

        ```

        Objective-C

        \[SFSyncOptions newSyncOptionsForSyncUp: \["Name"\], mergeMode:SFSyncStateMergeModeOverwrite\]

    -   **Android:** Set the options parameter to SSyncOptions.optionsForSyncUp(fieldlist, SyncState.MergeMode.OVERWRITE)
    -   **Hybrid:** Set the syncOptions parameter to {mergeMode:"OVERWRITE"}
2.  If any server record has changed since it was synced down to that client, leave it in its current state. The corresponding client record also remains in its current state. When you call the syncUp() method:
    -   **iOS:** Set the options parameter to

        Swift

        ```

        ```

        Objective-C

        \[SFSyncOptions newSyncOptionsForSyncUp:fieldlist mergeMode:SFSyncStateMergeModeLeaveIfChanged\]

    -   **Android:** Set the options parameter to SyncOptions.optionsForSyncUp(fieldlist, SyncState.MergeMode.LEAVE\_IF\_CHANGED)
    -   **Hybrid:** Set the syncOptions parameter to {mergeMode:"LEAVE\_IF\_CHANGED"}

If your local record includes the target’s modification date field, Mobile SDK detects changes by comparing it to the server record’s matching field. The default modification date field is lastModifiedDate. If your local records do not include the modification date field, the LEAVE\_IF\_CHANGED sync up operation reverts to an overwrite sync up.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

The LEAVE\_IF\_CHANGED merge requires extra round trips to the server. More importantly, the status check and the record save operations happen in two successive calls. In rare cases, a record that is updated between these calls can be prematurely modified on the server.

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

updateRemoteData calls reSync using the syncUpContacts model—aliased here as kSyncUpName—. Syncing up ensures that allowed soup changes are merged into the Salesforce org.

```

```

If sync up succeeds—that is, if the SyncState status indicates “done”—several things happen:

1.  queryLocalData retrieves all raw data from the freshly updated soup.

    ```

    ```

2.  populateDataRows transforms the soup’s data to ContactSObjectData objects and stores these objects in an internal array.

    ```

    ```

3.  Control passes to refreshRemoteData(\_:onFailure:). The refreshRemoteData method looks similar to updateRemoteData with two exceptions:
    -   It performs a sync down instead of sync up.
    -   If sync down succeeds, it “closes the circle” by executing the block that’s been passed to it from syncUpDown via updateRemoteData.

To summarize everything that happens in the syncUpDown call stack:

1.  *Sync up*: It syncs soup changes up to the server by calling updateRemoteData on SObjectsDataManager. This step ensures that all allowable local and offline changes are merged into Salesforce.
2.  *Sync down*: After the soup records are merged with server data, it syncs server data down to the soup through a call to refreshRemoteData. This step ensures that the soup reflects changes originating on the server and also changes merged from sync up. **Remember:** The sync up merge mode determines which soup edits are allowed on the server.
3.  Finally, it updates its UI with the updated contact records from the soup.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

When you’re syncing records, always apply a sync up-sync down pair in the sequence demonstrated by the MobileSyncExplorerSwift sample app.

## Example

**Android:**

To sync up to the server, you call syncUp() with the same arguments as syncDown(): list of fields, name of source SmartStore soup, and an update callback. The only coding difference is that you can format the list of affected fields as an instance of SyncOptions instead of SyncTarget. Here’s the way it’s handled in the MobileSyncExplorer sample:

```

```

In the internal SyncUpdateCallback implementation, this example takes the extra step of calling syncDown() when sync up is done. This step guarantees that the SmartStore soup remains up-to-date with any recent changes made to Contacts on the server.

## Code Examples

```
var syncState = syncManager.createSyncUp(target: target, options: options, 
    soupName: CONTACTS_SOUP, syncName: syncState.syncName)
```

```
- (SFSyncState *)createSyncUp:(SFSyncUpTarget *)target 
                      options:(SFSyncOptions *)options 
                     soupName:(NSString *)soupName 
                     syncName:(NSString *)syncName;
```

```
var syncState = syncManager.syncUp(options: options, soupName: CONTACTS_SOUP, 
    onUpdate: updateFunc)
```

```
- (SFSyncState*) syncUpWithOptions:(SFSyncOptions*)options 
                          soupName:(NSString*)soupName 
                       updateBlock:(SFSyncSyncManagerUpdateBlock)updateBlock;
```

```
var syncState = syncManager.syncUp(options: options, soupName: CONTACTS_SOUP, 
    onUpdate: updateFunc)
```

## Related Topics

- Handling Field Lists
                in Create and Update Operations (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_up_target_def.htm)
- Syncing Up by External ID (atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/entity_framework_native_sync_up_external_id.htm)
